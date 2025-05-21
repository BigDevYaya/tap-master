import { useEffect, useState } from 'react'
import heads from '../assets/resources/heads.svg'

import tail from '../assets/resources/tails.svg'
import Modal from './Modal'
import Header from './Header'

const Home = () => {
    const [count, setCount] = useState(() => {
    // Retrieve the count from localStorage or default to 0
    const savedCount = localStorage.getItem('count');
    return savedCount !== null ? JSON.parse(savedCount) : 0;
  });
    const [modal, showModal] = useState(false);
    const [dollarCount, setDollarCount] = useState(0);
    const [plusOnes, setPlusOnes] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPlusOnes(prev => prev.slice(1));
        }, 1000);
        return () => clearTimeout(timer);
    }, [plusOnes]);
    
    useEffect(() => {
      const hundreds = Math.fround((count/100000)).toFixed(3);
      setDollarCount(hundreds)}, [count])

    useEffect(() => {
    // Update localStorage whenever count changes
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

    const handleCoinClick = () => {
        setCount(prev => prev + 1);
        // Add new +1 animation with random horizontal offset
        setPlusOnes(prev => [...prev, {
            id: Date.now(),
            offset: Math.random() * 40 - 20 // Random offset between -20 and 20
        }]);
    }

    return (
      <div className='bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white overflow-hidden relative min-h-svh'>
        <div className="absolute w-96 h-96 bg-indigo-600/10 rounded-full -top-48 -left-48 animate-pulse"></div>
            <div className="absolute w-96 h-96 bg-teal-600/10 rounded-full -bottom-48 -right-48 animate-pulse"></div>
        <Header count={dollarCount} />
      <div className="flex flex-col items-center justify-center px-4 py-8 gap-5 ">
          {plusOnes.map((plusOne) => (
                <span
                    key={plusOne.id}
                    className="absolute text-2xl font-bold text-green-400 animate-float z-50"
                    style={{
                        left: `calc(50% + ${plusOne.offset}px)`,
                        top: '50%'
                    }}
                >
                    +1
                </span>
            ))}
            
          
            <h1 className="font-bold text-5xl sm:text-6xl text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
                Welcome to TAP MASTER!
            </h1>

            <p className="text-center max-w-lg text-sm sm:text-base font-medium text-cyan-100">
                Tap your way to finacial freedom
            </p>

            <div className="relative flex flex-col items-center cursor-pointer group transition-all duration-500"
                onClick={handleCoinClick}>
                <div className="relative transition-transform duration-500 group-hover:scale-110 group-active:scale-95">
                    <img 
                        className={`w-48 h-48 sm:w-64 sm:h-64 transition-all duration-500 z-50`}
                        src={heads} 
                        alt="Coin" 
                    />
                    <div className="absolute inset-0 rounded-full shadow-xl shadow-blue-900/50 group-hover:shadow-cyan-400/30 transition-shadow duration-300"></div>
                </div>
            </div>

            <div className="space-y-2 text-center">
                <p className="text-4xl font-black bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                    {count} EIA
                </p>
               
            </div>

            <button 
                className="group relative bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-3 rounded-xl shadow-2xl shadow-blue-900/50 hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                onClick={() => {
                    showModal(prev => !prev)
                }}>
                <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0l3 6h6l-3 6 3 6h-6l-3 6-3-6H0l3-6-3-6h6z"/>
                    </svg>
                    Buy More Coin
                </span>
                <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {modal && <Modal setCount={setCount} showModal={showModal} />}
        </div>
      </div>
    )
}

export default Home