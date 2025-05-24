import React from 'react'
import BalanceCard from './BalanceCard'
import ProfileCard from './ProfileCard'
import Coin from './Coin'
import BuyBots from './BuyBots'
import BaPro from './BaPro'

const Main = () => {
  return (
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mx-5'>
        {/* Column 1: Balance & Profile (hidden on small) */}
        <BaPro />
        {/* Column 2: Coin Tap (always visible) */}
        <Coin />
        {/* Column 3: Transactions Placeholder (hidden on small) */}
        <BuyBots />
      </div>
  )
}

export default Main