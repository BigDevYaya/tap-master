import { useEffect, useState } from 'react'
import heads from '../assets/resources/heads.svg'

import Modal from './Modal'
import Header from './Header'
import { HistoryIcon, ShoppingBasketIcon, User, UserPlus } from 'lucide-react'
import WithdrawModal from './WithdrawModal'
import ProfileModal from './ProfileModal'
import HistoryModal from './HistoryModal'

const Home = () => {

    const [count, setCount] = useState(() => {
    // Retrieve the count from localStorage or default to 0
    const savedCount = localStorage.getItem('count');
    return savedCount !== null ? JSON.parse(savedCount) : 0;
  });
    const [historyModal, showHistoryModal] = useState(false);
    const [profileModal, showProfileModal] = useState(false);
    const [withdrawModal, showWithdrawModal] = useState(false);
    const [modal, showModal] = useState(false);
    const [dollarCount, setDollarCount] = useState(0);
    const [plusOnes, setPlusOnes] = useState([]);
    const [walletAddress, setWalletAddress] = useState("");

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
  
  <Header count={dollarCount} modal={showWithdrawModal}  />
  {
    withdrawModal && <WithdrawModal modal={showWithdrawModal} address={walletAddress} addressOnchange={(e) => setWalletAddress(e.target.value)} />
  }
  
  <div className="flex flex-col items-center justify-center px-4 py-8 gap-5 ">
    {plusOnes.map((plusOne) => (
      <span
        key={plusOne.id}
        className="absolute text-2xl font-bold text-cyan-400 animate-float z-50"
        style={{
          left: `calc(50% + ${plusOne.offset}px)`,
          right: `calc(50% + ${plusOne.offset}px)`,
          top: '45%'
        }}
      >
        +1
      </span>
    ))}

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

    <nav className={`fixed bottom-10 bg-[#002080] rounded-2xl shadow-2xl p-4 ${
      !withdrawModal && 'z-50' 
    }`}>
          <ul className="flex items-center space-x-10">
            <li><User 
            className="w-6 h-6 text-[#c0d6e4] hover:text-white transition cursor-pointer" 
            onClick={() => {
              if(modal) {
                showModal(prev => !prev)
                showProfileModal(prev => !prev)
              } else if(historyModal){
                showHistoryModal(prev => !prev)
                showProfileModal(prev => !prev)
              }else {
                showProfileModal(prev => !prev)
              }
              }}/></li>
            <li>
              <ShoppingBasketIcon
                className="w-6 h-6 text-[#c0d6e4] hover:text-white transition cursor-pointer"
                onClick={() => {
                  if(profileModal){
                    showProfileModal(prev => !prev)
                    showModal(prev => !prev)
                  } else if (historyModal) {
                    showHistoryModal(prev => !prev)
                    showModal(prev => !prev)
                  } else {
                    showModal(prev => !prev)
                  }
                  console.log(modal)
                }}
              />
            </li>
            <li><HistoryIcon className="w-6 h-6 text-[#c0d6e4] hover:text-white transition cursor-pointer"
            onClick={() => {
              if(modal){
                showModal(prev => !prev)
                showHistoryModal(prev => !prev)
              } else if(profileModal) {
                showProfileModal(prev => !prev)
                showHistoryModal(prev => !prev)
              } else {
                showHistoryModal(prev => !prev)
              }
            }}/></li>
          </ul>
        </nav>

    {modal && <Modal setCount={setCount} showModal={showModal} modal={modal} />}
    {
      profileModal && <ProfileModal coin={count} dollar={dollarCount} modal={showProfileModal} />
    }
    {
      historyModal && <HistoryModal modal={showHistoryModal} />
    }
  </div>
</div>
    )
}

export default Home