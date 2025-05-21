import React from 'react'

const Modal = ({setCount, showModal}) => {
  return (
    <div 
    className='fixed grid place-items-center w-full bg-black/50 text-white min-h-svh'
    >
        <div className='z-50'>
            <h1>Buy More Coins to increase your earnings</h1>
            <button
            className='bg-blue-400 px-7  rounded uppercase py-1.5'
            onClick={()=> {
                showModal(prev => !prev),
                setTimeout(() => setCount(prev => prev + 100000), 2000)
            }}>Buy</button>
        </div>
    </div>
  )
}

export default Modal