import React from 'react'

const WithdrawModal = () => {
  return (
    <div className='fixed bg-[#131949] z-5000 flex flex-col px-10 py-5 left-1/7 rounded-2xl transition-all ease-out duration-100'>
        <form className='flex flex-col space-y-2' action="">
            <label htmlFor="">Wallet Address:</label>
            <input type="text" className='border  px-5 py-2 rounded'/>
            <label htmlFor="">Amount:</label>
            <input type="number" className='border px-5 py-2 rounded'/>
            <label htmlFor="">Pin:</label>
            <input type="number" className='border px-5 py-2 rounded'/>
            <input
            className="group relative bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-semibold px-8 py-3 rounded-xl shadow-2xl shadow-blue-900/50 hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1" 
            type="button" 
            value="Confirm Withdrawal"
            disabled />
        </form>
    </div>
  )
}

export default WithdrawModal