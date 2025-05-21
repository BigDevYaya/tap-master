import { useEffect, useState } from 'react'
import heads from '../assets/resources/heads.svg'
import tail from '../assets/resources/tails.svg'
import Modal from './Modal'
import Header from './Header'
import { ShoppingBasketIcon, User, UserPlus } from 'lucide-react'

const Home = () => {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('count')
    return saved !== null ? JSON.parse(saved) : 0
  })
  const [modal, showModal] = useState(false)
  const [dollarCount, setDollarCount] = useState(0)
  const [plusOnes, setPlusOnes] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => setPlusOnes(prev => prev.slice(1)), 1000)
    return () => clearTimeout(timer)
  }, [plusOnes])

  useEffect(() => {
    const value = (count / 100000).toFixed(3)
    setDollarCount(value)
  }, [count])

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count))
  }, [count])

  const handleCoinClick = () => {
    setCount(prev => prev + 1)
    setPlusOnes(prev => [...prev, { id: Date.now(), offset: Math.random() * 40 - 20 }])
  }

  return (
    <div className="relative overflow-hidden min-h-screen bg-[#00156e] text-white">
      {/* Background Blobs */}
      <div className="absolute w-96 h-96 bg-[#00156e]/20 rounded-full -top-48 -left-48 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-[#00156e]/30 rounded-full -bottom-48 -right-48 animate-pulse"></div>

      <Header count={dollarCount} />

      <main className="flex flex-col items-center justify-center px-6 py-12 space-y-8 z-10">
        {/* Floating +1s */}
        {plusOnes.map(item => (
          <span
            key={item.id}
            className="absolute text-2xl font-extrabold text-green-300 animate-float z-20"
            style={{ left: `calc(50% + ${item.offset}px)`, top: '50%' }}
          >
            +1
          </span>
        ))}

        <h1 className="text-5xl sm:text-6xl font-black text-center bg-gradient-to-r from-[#002080] to-[#00156e] bg-clip-text text-transparent drop-shadow-lg">
          Welcome to TAP MASTER!
        </h1>

        <p className="text-center max-w-xl text-base sm:text-lg font-medium text-[#c0d6e4]">
          Tap your way to financial freedom
        </p>

        {/* Coin Button */}
        <div onClick={handleCoinClick} className="relative cursor-pointer group">
          <img
            src={heads}
            alt="Coin"
            className="w-48 h-48 sm:w-64 sm:h-64 transform transition-transform duration-300 group-hover:scale-110 group-active:scale-90 drop-shadow-2xl"
          />
          <div className="absolute inset-0 rounded-full shadow-2xl shadow-[#00156e]/60 group-hover:shadow-[#0060b0]/40 transition-shadow duration-300"></div>
        </div>

        {/* Count Display */}
        <div className="space-y-1 text-center">
          <p className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-br from-green-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            {count} EIA
          </p>
          <p className="text-lg sm:text-xl font-semibold text-[#b3e5fc]">
            You have <span className="text-xl sm:text-2xl font-bold text-[#80d8ff]">${dollarCount}</span>
          </p>
        </div>

        {/* Navigation */}
        <nav className="fixed bottom-8 right-8 bg-[#002080] rounded-2xl shadow-2xl p-4">
          <ul className="flex items-center space-x-6">
            <li><User className="w-6 h-6 text-[#c0d6e4] hover:text-white transition" /></li>
            <li>
              <ShoppingBasketIcon
                className="w-6 h-6 text-[#c0d6e4] hover:text-white transition cursor-pointer"
                onClick={() => showModal(prev => !prev)}
              />
            </li>
            <li><UserPlus className="w-6 h-6 text-[#c0d6e4] hover:text-white transition" /></li>
          </ul>
        </nav>

        {modal && <Modal setCount={setCount} showModal={showModal} />}
      </main>
    </div>
  )
}

export default Home
