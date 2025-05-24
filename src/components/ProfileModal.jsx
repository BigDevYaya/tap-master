import { Coins, DollarSign, User2Icon, Wallet2 } from 'lucide-react'
import React, { useContext } from 'react'
import { AppContext } from '../utils/AppContext'

const ProfileModal = () => {
  const {
    count,
    showProfileModal,
    total,
    withdrawn,
    name
  } = useContext(AppContext);

  return (
    <div
      className='fixed inset-0 grid place-items-center bg-black/70 z-50 animate-fadeIn'
      onClick={() => showProfileModal(prev => !prev)}
    >
      <div
        className='
          bg-[#0d133a] p-8 space-y-6 rounded-xl w-full max-w-sm
          border border-blue-800 shadow-2xl
          transform transition-all duration-300 animate-slideUp
        ' 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Profile Header */}
        <div className='flex items-center gap-3 pb-4 border-b-2 border-b-[#4a5a8e]'> 
          <User2Icon className='w-6 h-6 text-blue-400' />
          <p className='font-extrabold text-white text-xl tracking-wide'>{name}</p> 
        </div>

        
        <ul className='space-y-6 text-lg'> 
          <li className='flex items-center gap-3 font-semibold text-gray-200'>
            <Coins className='w-5 h-5 text-amber-500' />
            Available Coin: <span className='text-amber-300 font-bold ml-auto user-select-none'>{count} EIA</span> 
          </li>

          {/* Total Earned */}
          <li className='flex items-center gap-3 font-semibold text-gray-200'>
            <DollarSign className='w-5 h-5 text-emerald-400' /> 
            Total Earned : <span className='text-emerald-300 font-bold ml-auto user-select-none'>${(total/100000).toFixed(3)}</span>
          </li>

          {/* Total Withdrawn */}
          <li className='flex items-center gap-3 font-semibold text-gray-200'>
            <Wallet2 className='w-5 h-5 text-blue-500' /> 
            Total Withdrawn: <span className='text-blue-300 font-bold ml-auto user-select-none'>${withdrawn}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileModal