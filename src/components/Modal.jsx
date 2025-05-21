import { X } from 'lucide-react'
import React from 'react'

const Modal = ({setCount, showModal}) => {
  return (
    <div 
    className='fixed grid place-items-center min-w-svh min-h-svh'
    onClick={() => showModal(prev => !prev)}
    >
        <div
        className='absolute bg-[#131949] text-white px-6 py-5 rounded-sm bottom-10 z-50'>
        <X 
        className='relative -right-11/12'
        onClick={() => showModal(prev => !prev)} />
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
    </div>
  )
}

export default Modal