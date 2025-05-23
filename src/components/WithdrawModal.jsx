import { useContext, useState } from "react"
import { AppContext } from "../utils/AppContext"


const WithdrawModal = () => {
  const {
    showWithdrawModal,
    walletAddress,
    setWalletAddress,
    sendAmount,
    setSendAmount,
    pin,
    setPin,
    makeTransfer,
    checkInputs,
    isLoading,
    setLoading
  } = useContext(AppContext)


  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 animate-fadeIn" // Increased overlay opacity, added fade-in animation
    >
      {/* Clickable background to close modal */}
      <div
        className='absolute h-full w-full'
        onClick={() => {
          showWithdrawModal(prev => !prev)
        }}>
      </div>

      {/* Withdrawal Form */}
      <form
        className="
          bg-[#0d133a] p-8 rounded-xl space-y-6 w-full max-w-md z-50
          shadow-2xl border border-blue-800 animate-slideUp
        " // Consistent background, padding, rounding, spacing, shadow, border, and slide-up animation
        onSubmit={(e) => {
          e.preventDefault()
          setLoading(prev => !prev)
          setTimeout(() => {
            checkInputs()
            makeTransfer()
            setLoading(prev => !prev)
            showWithdrawModal(prev => !prev)
          }, 2000)
        }}>

        {/* Wallet Address Input */}
        <div>
          <label className="block text-blue-300 font-semibold text-lg mb-2">Wallet Address</label> {/* Brighter blue, bold, larger, bottom margin */}
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder="e.g., 0xAbCdEf..."
            className="
              w-full bg-transparent border border-blue-700 text-white px-4 py-3 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400
              transition-all duration-200
            " // Consistent border, padding, rounding, focus, placeholder, transition
          />
        </div>

        {/* Amount Input */}
        <div>
          <label className="block text-blue-300 font-semibold text-lg mb-2">Amount (USD)</label> {/* Brighter blue, bold, larger, bottom margin */}
          <input
            type="number"
            value={sendAmount}
            onChange={(e) => setSendAmount(e.target.value)}
            placeholder="e.g., 100"
            className="
              w-full bg-transparent border border-blue-700 text-white px-4 py-3 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400
              transition-all duration-200
            " // Consistent border, padding, rounding, focus, placeholder, transition
          />
          {sendAmount && (
            <p className="text-sm text-amber-300 italic mt-1 font-medium user-select-none"> {/* Consistent amber color, font, no selection */}
              {`${sendAmount * 100000} EIA`}
            </p>
          )}
        </div>

        {/* Pin Input */}
        <div>
          <label className="block text-blue-300 font-semibold text-lg mb-2">Pin</label> {/* Brighter blue, bold, larger, bottom margin */}
          <input
            type="password" // Changed type to password for security
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="****"
            className="
              w-full bg-transparent border border-blue-700 text-white px-4 py-3 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400
              transition-all duration-200
            " // Consistent border, padding, rounding, focus, placeholder, transition
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="
            w-full flex items-center justify-center gap-3 mt-6
            bg-gradient-to-br from-cyan-500 to-blue-700
            rounded-full font-bold text-white text-lg py-3 shadow-lg
            transform transition-all duration-300
            hover:scale-[1.02] hover:from-cyan-400 hover:to-blue-600
            active:scale-[0.98] active:shadow-inner
            disabled:opacity-50 disabled:cursor-not-allowed
          " // Consistent gradient, padding, rounding, font, shadow, hover/active effects, disabled states
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="loader"></span>
          ) : (
            <p>Confirm Withdrawal</p>
          )}
        </button>
      </form>
    </div>
  )
}

export default WithdrawModal