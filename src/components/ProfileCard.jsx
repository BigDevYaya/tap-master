import React, { useContext } from 'react'
import { AppContext } from '../utils/AppContext'
import {
  User2Icon,
  Coins,
  DollarSign,
  Wallet2
} from 'lucide-react'

const ProfileCard = () => {
  const {
    total,
    count,
    withdrawn,
    name
  } = useContext(AppContext)

  return (
    <div className='
      bg-[#0d133a] rounded-3xl p-8 shadow-2xl flex flex-col gap-6
      border border-blue-800 transition-all duration-300 hover:border-blue-500
    '>
      <div className='flex items-center gap-3 pb-4 border-b-2 border-b-[#4a5a8e]'>
        <User2Icon className='w-6 h-6 text-blue-400' />
        <p className='font-extrabold text-white text-xl tracking-wide'>{name}</p>
      </div>

      
      <ul className='space-y-6 text-lg'> 
        <li className='flex items-center justify-between text-gray-200'>
          <span className='flex items-center gap-3 font-semibold'> 
            <Coins className='w-5 h-5 text-amber-500' /> Available 
          </span>
          <span className='text-amber-300 font-bold user-select-none'>{count} EIA</span> 
        </li>

        
        <li className='flex items-center justify-between text-gray-200'>
          <span className='flex items-center gap-3 font-semibold'>
            <DollarSign className='w-5 h-5 text-emerald-400' /> Earned 
          </span>
          <span className='text-emerald-300 font-bold user-select-none'>${(total/100000).toFixed(3)}</span>
        </li>

        
        <li className='flex items-center justify-between text-gray-200'>
          <span className='flex items-center gap-3 font-semibold'>
            <Wallet2 className='w-5 h-5 text-blue-500' /> Withdrawn 
          </span>
          <span className='text-blue-300 font-bold user-select-none'>${withdrawn}</span> 
        </li>
      </ul>
    </div>
  )
}

export default ProfileCard