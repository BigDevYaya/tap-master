import React, { useContext } from 'react'
import { AppContext } from '../utils/AppContext'
import {
    User,
    ShoppingBasketIcon,
    HistoryIcon
} from "lucide-react"

const MobileNav = () => {
    const {
      showHistoryModal,
      showModal,
      showProfileModal,
    } = useContext(AppContext);
  return (
<nav className='fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#002080] rounded-2xl p-4 shadow-xl md:hidden'>
        <ul className='flex items-center justify-between w-64'>
          <li>
            <User
              className='w-6 h-6 text-[#c0d6e4] hover:text-white transition'
              onClick={() => showProfileModal(prev => !prev)}
            />
          </li>
          <li>
            <ShoppingBasketIcon
              className='w-6 h-6 text-[#c0d6e4] hover:text-white transition'
              onClick={() => showModal(prev => !prev)}
            />
          </li>
          <li>
            <HistoryIcon
              className='w-6 h-6 text-[#c0d6e4] hover:text-white transition'
              onClick={() => showHistoryModal(prev => !prev)}
            />
          </li>
        </ul>
      </nav>
  )
}

export default MobileNav