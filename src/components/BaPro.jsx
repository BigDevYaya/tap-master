import React from 'react'
import BalanceCard from './BalanceCard'
import ProfileCard from './ProfileCard'

const BaPro = () => {
  return (
            <div className='hidden md:flex flex-col justify-center gap-6 h-full flex-1/2'>
          {/* Balance Card */}
          <BalanceCard />

          {/* Profile & Stats Card */}
          <ProfileCard />
        </div>
  )
}

export default BaPro