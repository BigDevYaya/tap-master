import React, { useContext } from 'react'
import heads from '../assets/resources/heads.svg'
import { AppContext } from '../utils/AppContext'

const Coin = () => {
    const {
      count,
      plusOnes,
      handleCoinClick,
      availablePoints,
      MAX
    } = useContext(AppContext);
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
          {plusOnes.map(p => (
            <span
              key={p.id}
              className='absolute text-3xl font-bold text-cyan-300 animate-float z-50'
              style={{ left: `calc(50% + ${p.offset}px)`, top: '45%' }}>
              +1
            </span>
          ))}


          <div
            onClick={availablePoints > 0 ? handleCoinClick : undefined}
            className='relative cursor-pointer group transform transition hover:scale-110 active:scale-95'>
            <div className='absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 rounded-full blur-xl animate-pulse'
            ></div>
            <img
              src={heads}
              alt='Coin'
              className='w-56 h-56 sm:w-64 sm:h-64 z-10 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]'
            />
            <div className='absolute inset-0 rounded-full shadow-2xl shadow-blue-900/50 group-hover:shadow-cyan-400/40 transition-shadow'></div>
          </div>

          <p className='text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse'>
            {Math.floor(count)} EIA
          </p>
          <p className='text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse'>
            {availablePoints} / {MAX}
          </p>
        </div>
  )
}

export default Coin