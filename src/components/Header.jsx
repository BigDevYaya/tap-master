import React, { useContext } from 'react'
import { AppContext } from '../utils/AppContext'
import BalanceCard from './BalanceCard'

const Header = () => {
  return (
    <header className='items-center mx-10 my-5 md:hidden text-2xl animate-slideUp'>
        <BalanceCard />
    </header>
  )
}

export default Header