import { History } from 'lucide-react';
import { useContext, useRef, useEffect } from 'react';
import { AppContext } from '../utils/AppContext';

const HistoryModal = () => {
  const {
    showHistoryModal,
    transactions,
    clearHistory
  } = useContext(AppContext);

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0; // Scroll to top when transactions change
    }
  }, [transactions]);

  return (
    <div
      className='fixed inset-0 grid place-items-center bg-black/60 select-none backdrop-blur-sm z-50' // Added z-50 to ensure it's on top
      onClick={() => showHistoryModal(prev => !prev)}
    >
      <div
        className="
    bg-gradient-to-br from-[#1a235c] to-[#0d123e]
    flex flex-col justify-center items-center
    p-10 space-y-8 text-xl rounded-xl border border-blue-700 shadow-2xl
    w-96 max-w-md
    max-h-[80vh] min-h-[200px]
    overflow-y-auto
    relative
  "
        onClick={e => e.stopPropagation()}
      >
        <h2 className='text-white text-2xl font-extrabold tracking-wide mb-4'>Transaction History</h2>

        {transactions.length > 0 ? (
          <ul ref={scrollRef} className='w-full space-y-5 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent'>
            {[...transactions].reverse().map((transaction, index) => (
              <li
                key={index}
                // Conditional styling based on transaction.type
                className={`
                  flex justify-between items-center gap-7 p-4 rounded-lg
                  text-white transform hover:scale-105 transition duration-200 ease-in-out
                  ${transaction.type === 'credit'
                    ? 'bg-green-700/30 border-l-4 border-green-400' 
                    : 'bg-red-700/30 border-l-4 border-red-400'
                  }
                `}
              >
                <div className='flex flex-col'>
                  {/* Display amount with appropriate color */}
                  <span className={`font-bold text-2xl ${transaction.type === 'credit' ? 'text-green-300' : 'text-red-300'}`}>
                    {transaction.type === 'credit' ? '+' : '-'}${(transaction.amount/100000).toFixed(3)} {/* Add +/- and format to 2 decimal places */}
                  </span>
                  <span className='text-sm text-gray-300 capitalize'>{transaction.type}</span> {/* Display type clearly */}
                </div>
                <span className='text-sm text-gray-300 flex flex-col wrap-normal'>{transaction.date}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-gray-400 text-lg flex flex-col items-center gap-3 text-center'>
            <History size={28} className='text-blue-400' />
            No past transactions recorded yet.
          </p>
        )}

        <button 
        className="
            w-1/2 mt-2
            bg-gradient-to-br from-cyan-500 to-blue-700
            rounded font-bold text-white text-lg py-3 shadow-lg
            transform transition-all duration-300
            hover:scale-[1.02] hover:from-cyan-400 hover:to-blue-600
            active:scale-[0.98] active:shadow-inner
            disabled:opacity-50 disabled:cursor-not-allowed
          "
          onClick={clearHistory}>Clear</button>

        {/* Optional: Add a close button */}
        <button
          className='absolute top-3 right-3 text-white hover:text-gray-300 transition-colors duration-200'
          onClick={() => showHistoryModal(false)} // Explicitly close
        >
          <svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default HistoryModal;