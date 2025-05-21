import { useEffect, useState } from 'react'
import heads from '../assets/resources/heads.svg'

import tail from '../assets/resources/tails.svg'
import Modal from './Modal'
import Header from './Header'
import { ShoppingBasketIcon, User, UserPlus } from 'lucide-react'

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
      <div className='bg-gradient-to-br from-[#00072D] via-[#00156E] to-[#000B3A] text-white overflow-hidden relative min-h-svh'>
  <div className="absolute w-96 h-96 bg-indigo-900/20 rounded-full -top-48 -left-48 animate-pulse"></div>
  <div className="absolute w-96 h-96 bg-blue-900/20 rounded-full -bottom-48 -right-48 animate-pulse"></div>
  
  <Header count={dollarCount} />
  
  <div className="flex flex-col items-center justify-center px-4 py-8 gap-5 ">
    {plusOnes.map((plusOne) => (
      <span
        key={plusOne.id}
        className="absolute text-2xl font-bold text-cyan-400 animate-float z-50"
        style={{
          left: `calc(50% + ${plusOne.offset}px)`,
          top: '50%'
        }}
      >
        +1
      </span>
    ))}

    <h1 className="font-bold text-5xl sm:text-6xl text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_5px_15px_rgba(34,211,238,0.5)]">
      Welcome to TAP MASTER!
    </h1>

    <p className="text-center max-w-lg text-sm sm:text-base font-medium text-cyan-200/90">
      Tap your way to financial freedom
    </p>

    <div className="relative flex flex-col items-center cursor-pointer group transition-all duration-500"
      onClick={handleCoinClick}>
      <div className="relative transition-transform duration-500 group-hover:scale-110 group-active:scale-95">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <img 
          className="w-48 h-48 sm:w-64 sm:h-64 transition-all duration-500 z-50 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]"
          src={heads} 
          alt="Coin" 
        />
        <div className="absolute inset-0 rounded-full shadow-xl shadow-blue-900/50 group-hover:shadow-cyan-400/40 transition-shadow duration-300"></div>
      </div>
    </div>

    <div className="space-y-2 text-center mb-8">
      <p className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
        {count} EIA
      </p>  
    </div>

    <nav className="group relative bg-gradient-to-br from-indigo-700 via-[#00156E] to-blue-800 hover:from-indigo-600 hover:via-[#001399] hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow-2xl shadow-[#00156E]/50 hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
      <ul className='flex items-center justify-between space-x-10 fixed bottom-10 right-17 px-10 py-5 rounded-2xl'>
        <li className="p-3 rounded-lg hover:bg-indigo-700/30 transition-colors">
          <User className="w-6 h-6 text-cyan-400" />
        </li>
        <li 
          className="p-3 rounded-lg hover:bg-indigo-700/30 transition-colors"
          onClick={() => showModal(prev => !prev)}
        >
          <ShoppingBasketIcon className="w-6 h-6 text-cyan-400" />
        </li>
        <li className="p-3 rounded-lg hover:bg-indigo-700/30 transition-colors">
          <UserPlus className="w-6 h-6 text-cyan-400" />
        </li>
      </ul>
    </nav>

    {modal && <Modal setCount={setCount} showModal={showModal} />}
  </div>
</div>
    )
}

export default Home