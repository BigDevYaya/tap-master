import { useState } from "react"


const WithdrawModal = ({modal, address, addressOnchange, sendAmount, amountOnchange, pin, pinOnchange, dollarCount, coinCount, makeTransfer}) => {
    const [isLoading, setIsLoading] = useState(false);
    
    
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
    >
        <div 
        className='absolute h-full w-full'
        onClick={() => {
        modal(prev => !prev)
        }}>
        </div>
  <form 
  className="bg-[#131949] p-6 rounded-2xl space-y-4 w-full max-w-md z-50"
  onSubmit={(e) => {
    e.preventDefault()
    setIsLoading(prev => !prev)
    setTimeout(() =>{
        makeTransfer()
        setIsLoading(prev => !prev)
        modal(prev => !prev)
    }, 2000)
  }}>
    <label className="block text-gray-200">Wallet Address</label>
    <input
      type="text"
      value={address}
      onChange={addressOnchange}
      className="w-full bg-transparent border border-gray-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <label className="block text-gray-200">Amount</label>
    <input
      type="text"
      value={sendAmount}
      onChange={amountOnchange}
      className="w-full bg-transparent border border-gray-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <label className="block text-gray-200">Pin</label>
    <input
      type="number"
      value={pin}
      onChange={pinOnchange}
      className="w-full bg-transparent border border-gray-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      type="submit"
      className="w-full mt-4 bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 rounded-xl shadow-2xl transition-transform transform hover:scale-105"
    >
      Confirm Withdrawal
    </button>
  </form>
</div>

  )
}

export default WithdrawModal