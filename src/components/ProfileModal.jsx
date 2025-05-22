import { Coins, DollarSign, User2Icon, Wallet2 } from 'lucide-react'
import React from 'react'

const ProfileModal = ({coin, dollar, modal}) => {
  return (
    <div
    className='fixed inset-0 grid place-items-center bg-black/50'
    onClick={() => modal(prev => !prev)}>
        <div className='bg-[#131949] p-6 space-y-4 text-2xl rounded w-full max-w-sm max-h-sm border-l-8 border-l-[#00072D]'>
            <div className='flex items-center gap-4 border-b pb-5'>
                <User2Icon className='font-bold text-blue-700' />
                <p className='font-bold'>Israel Yaya</p>
            </div>
            <ul className='space-y-10 mt-8 text-xl'>
            <li className='flex items-center gap-3 font-semibold'><Coins className='font-bold text-amber-700' />Available Coin: <span className='text-amber-400'>{coin} EIA</span></li>
            <li className='flex items-center gap-3 font-semibold'><DollarSign className='text-amber-300' />Total Earned : <span className='text-amber-400'>${dollar}</span></li>
            <li className='flex items-center gap-3 font-semibold'><Wallet2 className='text-green-800' />Total Withdrawn: <span className='text-green-500'>$0</span></li>
            </ul>
        </div>
    </div>
  )
}

export default ProfileModal