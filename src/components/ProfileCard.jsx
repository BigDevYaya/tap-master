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
        name,
        count,
        dollarCount
    } = useContext(AppContext)
  return (
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
  )
}

export default ProfileCard