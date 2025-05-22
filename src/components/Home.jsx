import { useEffect, useState } from 'react'
import heads from '../assets/resources/heads.svg'

import Modal from './Modal'
import Header from './Header'
import {
  HistoryIcon,
  ShoppingBasketIcon,
  User,
  Coins,
  DollarSign,
  Wallet2,
  History,
  User2Icon,
} from 'lucide-react'
import WithdrawModal from './WithdrawModal'
import ProfileModal from './ProfileModal'
import HistoryModal from './HistoryModal'

const Home = ({ name }) => {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('count')
    return saved ? JSON.parse(saved) : 0
  })
  const [historyModal, showHistoryModal] = useState(false)
  const [profileModal, showProfileModal] = useState(false)
  const [withdrawModal, showWithdrawModal] = useState(false)
  const [modal, showModal] = useState(false)
  const [dollarCount, setDollarCount] = useState()
  const [plusOnes, setPlusOnes] = useState([])
  const [pin, setPin] = useState()
  const [sendAmount, setSendAmount] = useState()
  const [walletAddress, setWalletAddress] = useState("")

  let valid = false

  function checkInputs() {
    const userPin = 1234
    if (walletAddress.length < 10 || !walletAddress.includes('a')) return false
    if (sendAmount > dollarCount) return false
    if (pin !== userPin) return false
    return true
  }

  function makeTransfer() {
    const sendAmountCoin = sendAmount * 100000
    valid ? setCount(prev => prev - sendAmountCoin) : alert('invalid')
  }

  useEffect(() => {
    const timer = setTimeout(() => setPlusOnes(prev => prev.slice(1)), 1000)
    return () => clearTimeout(timer)
  }, [plusOnes])

  useEffect(() => {
    setDollarCount((count / 100000).toFixed(3))
  }, [count])

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count))
  }, [count])

  const handleCoinClick = () => {
    setCount(prev => prev + 1)
    setPlusOnes(prev => [...prev, { id: Date.now(), offset: Math.random() * 40 - 20 }])
  }

  return (
    <div className=' bg-gradient-to-br from-[#001133] via-[#002255] to-[#001144] text-white min-h-screen relative overflow-x-hidden md:grid md:place-items-center select-none'>
      {/* Header */}
      <Header count={dollarCount} modal={showWithdrawModal} />

      {/* Main Grid: single col on small, three cols on md+ */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mx-5 '>

        {/* Column 1: Balance & Profile (hidden on small) */}
        <div className='hidden md:flex flex-col justify-center gap-6 h-full flex-1/2'>
          {/* Balance Card */}
          <div className='bg-black/50 backdrop-blur-lg rounded-3xl p-6 flex flex-col items-center gap-4 shadow-xl'>
            <h2 className='text-blue-300 font-bold uppercase'>USD Balance</h2>
            <p className='text-5xl font-extrabold text-amber-400'>${dollarCount}</p>
            {count >= 10 && (
              <button
                className='px-8 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold shadow-lg hover:scale-105 active:scale-95 transition'
                onClick={() => showWithdrawModal(prev => !prev)}>
                Withdraw
              </button>
            )}
          </div>

          {/* Profile & Stats Card */}
          <div className='bg-[#131949] rounded-3xl p-6 shadow-inner flex flex-col gap-5'>
            <div className='flex items-center gap-2 border-b border-gray-700 pb-2 mb-5'>
              <User2Icon className='w-5 h-5 text-blue-500' />
              <p className='font-semibold'>{name}</p>
            </div>
            <ul className='space-y-7'>
              <li className='flex items-center justify-between'>
                <span className='flex items-center gap-1'>
                  <Coins className='w-4 h-4 text-amber-500' /> Available
                </span>
                <span className='text-amber-400'>{count} EIA</span>
              </li>
              <li className='flex items-center justify-between'>
                <span className='flex items-center gap-1'>
                  <DollarSign className='w-4 h-4 text-amber-300' /> Earned
                </span>
                <span className='text-amber-400'>${dollarCount}</span>
              </li>
              <li className='flex items-center justify-between'>
                <span className='flex items-center gap-1'>
                  <Wallet2 className='w-4 h-4 text-green-400' /> Withdrawn
                </span>
                <span className='text-green-300'>$0</span>
              </li>
            </ul>
          </div>

          
          
        </div>

        {/* Column 2: Coin Tap (always visible) */}
        <div className='flex flex-col items-center justify-center gap-4'>
          {plusOnes.map(p => (
            <span
              key={p.id}
              className='absolute text-3xl font-bold text-cyan-300 animate-float z-50'
              style={{ left: `calc(50% + ${p.offset}px)`, top: '45%' }}>
              +1
            </span>
          ))}


          <div
            onClick={handleCoinClick}
            className='relative cursor-pointer group transform transition hover:scale-110 active:scale-95'>
            <div className='absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 rounded-full blur-xl animate-pulse'></div>
            <img
              src={heads}
              alt='Coin'
              className='w-56 h-56 sm:w-64 sm:h-64 z-10 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]'
            />
            <div className='absolute inset-0 rounded-full shadow-2xl shadow-blue-900/50 group-hover:shadow-cyan-400/40 transition-shadow'></div>
          </div>

          <p className='text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse'>
            {count} EIA
          </p>
        </div>

        {/* Column 3: Transactions Placeholder (hidden on small) */}
        <div className='hidden md:flex gap-5 flex-col items-center justify-center my-7 h-full flex-1/2 w-full'>
          
            {/* Buy bots card */}
            <div className='bg-[#131949] rounded-3xl py-6 px-6 shadow-2xl flex flex-col gap-5 w-full border border-blue-700'>
              <p className='text-2xl font-bold text-white border-b-4 border-blue-500 pb-4 text-center'>
              Get Boosts at Discount Prices Now!
              </p>

              <div className='flex items-center justify-between bg-[#0b1033] p-4 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-[1.02] hover:bg-[#151c4e]'>
                <p className='text-white text-lg'>
                  Get 100,000 coins now at <span className='text-green-400 font-bold text-xl'>$0.8</span>!
                </p>
                <button
                  className="bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-bold px-3 py-2 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
                >
                  Buy
                </button>
              </div>

              <div className='flex items-center justify-between bg-[#0b1033] p-4 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-[1.02] hover:bg-[#151c4e]'>
                <p className='text-white text-lg'>
                  Increase Tap Limit at <span className='text-green-400 font-bold text-xl'>$0.8</span>!
                </p>
                <button
                  className="bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-bold px-3 py-2 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
                >
                  Buy
                </button>
              </div>

              <div className='flex items-center justify-between bg-[#0b1033] p-4 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-[1.02] hover:bg-[#151c4e]'>
                <p className='text-white text-lg'>
                  Activate bot at <span className='text-green-400 font-bold text-xl'>$12</span>!
                </p>
                <button
                  className="bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-bold px-3 py-2 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
                >
                  Buy
                </button>
              </div>
            </div>
 
        </div>
      </div>

      {/* Mobile Nav */}
      <nav className='fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#002080] rounded-2xl p-4 shadow-xl md:hidden'>
        <ul className='flex items-center justify-between w-64'>
          <li>
            <User
              className='w-6 h-6 text-[#c0d6e4] hover:text-white transition'
              onClick={() => showProfileModal(prev => !prev)}
            />
          </li>
          <li>
            <ShoppingBasketIcon
              className='w-6 h-6 text-[#c0d6e4] hover:text-white transition'
              onClick={() => showModal(prev => !prev)}
            />
          </li>
          <li>
            <HistoryIcon
              className='w-6 h-6 text-[#c0d6e4] hover:text-white transition'
              onClick={() => showHistoryModal(prev => !prev)}
            />
          </li>
        </ul>
      </nav>

      {/* Modals */}
      {modal && <Modal setCount={setCount} showModal={showModal} modal={modal} />}
      {profileModal && <ProfileModal coin={count} dollar={dollarCount} modal={showProfileModal} name={name} />}
      {historyModal && <HistoryModal modal={showHistoryModal} />}
      {withdrawModal && (
        <WithdrawModal
          modal={showWithdrawModal}
          address={walletAddress}
          addressOnchange={e => setWalletAddress(e.target.value)}
          sendAmount={sendAmount}
          amountOnchange={e => setSendAmount(Number(e.target.value))}
          pin={pin}
          pinOnchange={e => setPin(Number(e.target.value))}
          dollarCount={dollarCount}
          coinCount={count}
          makeTransfer={makeTransfer}
          checkInputs={checkInputs}
        />
      )}
    </div>
  )
}

export default Home