import React, { useContext } from 'react'
import { AppContext } from '../utils/AppContext'
import BalanceCard from './BalanceCard'

const Header = () => {
  const {
    count,
    showWithdrawModal
  } = useContext(AppContext)
  return (
    <header className='items-center mx-10 my-5 md:hidden text-2xl'>
        <BalanceCard />
    </header>
  )
}

export default Header