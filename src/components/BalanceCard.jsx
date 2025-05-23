import React, { useContext } from 'react'
import { AppContext } from '../utils/AppContext'

const BalanceCard = () => {
    const {
        dollarCount,
        count,
        showWithdrawModal
    } = useContext(AppContext);
  return (
    <div className='bg-black/50 backdrop-blur-lg rounded-3xl p-6 flex flex-col items-center gap-4 shadow-xl'>
            <h2 className='text-blue-300 font-bold uppercase'>USD Balance</h2>
            <p className='text-5xl font-extrabold text-amber-400'>${dollarCount}</p>
            {count >= 10 && (
              <button
                className='px-8 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold shadow-lg hover:scale-105 active:scale-95 transition'
                onClick={() => showWithdrawModal(prev => !prev)}>
                Withdraw
              </button>
            )}
          </div>
  )
}

export default BalanceCard