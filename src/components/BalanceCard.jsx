import React, { useContext } from 'react'
import { AppContext } from '../utils/AppContext'

const BalanceCard = () => {
  const {
    showWithdrawModal,
    dollarCount
  } = useContext(AppContext);


  return (
    <div className='
      bg-[#0d133a] rounded-3xl p-8 flex flex-col items-center gap-5 shadow-2xl
      border border-blue-800 transition-all duration-300 hover:border-blue-500
    '>

      <h2 className='
        text-blue-400 font-bold uppercase text-lg tracking-wider
        border-b-2 border-blue-600 pb-2 mb-2
      '>
        USD Balance
      </h2>

      {/* Balance Display */}
      <p className='
        text-6xl font-extrabold text-amber-300
        drop-shadow-lg user-select-none
      '>
        ${dollarCount}
      </p>


      {dollarCount >= 10 && (
        <button
          className='
            mt-4 px-10 py-3 bg-gradient-to-br from-cyan-500 to-blue-700
            rounded-full font-bold text-white text-lg shadow-lg
            transform transition-all duration-300
            hover:scale-105 hover:from-cyan-400 hover:to-blue-600
            active:scale-95 active:shadow-inner
          '
          onClick={() => showWithdrawModal(prev => !prev)}
        >
          Withdraw
        </button>
      )}
    </div>
  )
}

export default BalanceCard