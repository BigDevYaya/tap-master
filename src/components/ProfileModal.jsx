import { Coins, DollarSign, User2Icon, Wallet2 } from 'lucide-react'
import React, { useContext } from 'react'
import { AppContext } from '../utils/AppContext'

const ProfileModal = () => {
  const {
    count,
    showProfileModal,
    name,
    dollarCount
  } = useContext(AppContext);

  return (
    <div
      className='fixed inset-0 grid place-items-center bg-black/70 z-50 animate-fadeIn' // Positioning and overlay remain unchanged
      onClick={() => showProfileModal(prev => !prev)}
    >
      <div
        className='
          bg-[#0d133a] p-8 space-y-6 rounded-xl w-full max-w-sm
          border border-blue-800 shadow-2xl
          transform transition-all duration-300 animate-slideUp
        ' // Updated background, border, and shadow to match ProfileCard
        onClick={(e) => e.stopPropagation()} // Crucial: Prevent modal from closing when clicking inside
      >
        {/* Profile Header */}
        <div className='flex items-center gap-3 pb-4 border-b-2 border-b-[#4a5a8e]'> {/* Adjusted gap, padding, and border */}
          <User2Icon className='w-6 h-6 text-blue-400' /> {/* Consistent icon size and color */}
          <p className='font-extrabold text-white text-xl tracking-wide'>{name}</p> {/* Consistent font, color, size, and tracking */}
        </div>

        {/* Profile Details List */}
        <ul className='space-y-6 text-lg'> {/* Consistent spacing and text size */}
          {/* Available Coins */}
          <li className='flex items-center gap-3 font-semibold text-gray-200'> {/* Consistent gap and text color */}
            <Coins className='w-5 h-5 text-amber-500' /> {/* Consistent icon size and color */}
            Available Coin: <span className='text-amber-300 font-bold ml-auto user-select-none'>{count} EIA</span> {/* Consistent value color, bold, pushed right, no selection */}
          </li>

          {/* Total Earned */}
          <li className='flex items-center gap-3 font-semibold text-gray-200'>
            <DollarSign className='w-5 h-5 text-emerald-400' /> {/* Consistent icon size and color */}
            Total Earned : <span className='text-emerald-300 font-bold ml-auto user-select-none'>${dollarCount}</span> {/* Consistent value color, bold, pushed right, no selection */}
          </li>

          {/* Total Withdrawn */}
          <li className='flex items-center gap-3 font-semibold text-gray-200'>
            <Wallet2 className='w-5 h-5 text-blue-500' /> {/* Consistent icon size and color */}
            Total Withdrawn: <span className='text-blue-300 font-bold ml-auto user-select-none'>$0</span> {/* Consistent value color, bold, pushed right, no selection */}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileModal