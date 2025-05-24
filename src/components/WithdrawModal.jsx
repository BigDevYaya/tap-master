import { useContext, useState } from "react"
import { AppContext } from "../utils/AppContext"
import { Formik } from "formik"
import { withdrawalSchema } from "../utils/schema"


const WithdrawModal = () => {
  const {
    showWithdrawModal,
    dollarCount,
    setCount,
    setWithdrawn,
    setTransactions,
  } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(false);


 
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 animate-fadeIn" 
    >
      
      <div
        className='absolute h-full w-full'
        onClick={() => {
          showWithdrawModal(prev => !prev)
        }}>
      </div>

      
      <Formik
      initialValues={{
        walletAddress : '',
        amount : '',
        pin: ''
      }}
      validationSchema={withdrawalSchema(dollarCount)}
      onSubmit={({amount}, {resetForm}) => {
        setIsLoading(prev => !prev)
        setTimeout(() => {
          setCount(prev => prev - Number(amount * 100000))
          setWithdrawn(prev => prev += amount)
          setIsLoading(prev => !prev)
          setTransactions(prev => [...prev, { amount: amount, type: 'debit', date: Date.now() }])
          showWithdrawModal(prev => !prev)
        }, 3000)
        resetForm()
      }}>
        {
          props => (
            <form
        className="
          bg-[#0d133a] p-8 rounded-xl space-y-6 w-full max-w-md z-50
          shadow-2xl border border-blue-800 animate-slideUp
        "
        onSubmit={props.handleSubmit}>

        {/* Wallet Address Input */}
        <div>
          <label className="block text-blue-300 font-semibold text-lg mb-2"
          htmlFor="walletAddress">Wallet Address</label>
          <input
            type="text"
            id="walletAddress"
            {...props.getFieldProps('walletAddress')}
            placeholder="e.g., 0xAbCdEf..."
            className="
              w-full bg-transparent border border-blue-700 text-white px-4 py-3 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400
              transition-all duration-200
            "
          />
          {
            props.touched.walletAddress && props.errors.walletAddress ? <div className="text-red-600 text-sm">{props.errors.walletAddress}</div> : null
          }
        </div>

        {/* Amount Input */}
        <div>
          <label className="block text-blue-300 font-semibold text-lg mb-2"
          htmlFor="amount">Amount (USD)</label>
          <input
            type="number"
            id="amount"
            {...props.getFieldProps('amount')}
            placeholder="e.g., 100"
            className="
              w-full bg-transparent border border-blue-700 text-white px-4 py-3 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400
              transition-all duration-200
            " 
          />
          {
            props.touched.amount && props.errors.amount ? <div className="text-red-600 text-sm">{props.errors.amount}</div> : null
          }
          {props.values.amount && (
            <p className="text-sm text-amber-300 italic mt-1 font-medium user-select-none"> 
              {`${props.values.amount * 100000} EIA`}
            </p>
          )}
        </div>

        {/* Pin Input */}
        <div>
          <label className="block text-blue-300 font-semibold text-lg mb-2"
          htmlFor="pin">Pin</label>
          <input
            type="password"
            id="pin"
            {
              ...props.getFieldProps('pin')
            }
            placeholder="****"
            className="
              w-full bg-transparent border border-blue-700 text-white px-4 py-3 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400
              transition-all duration-200
            " 
          />
          {
            props.touched.pin && props.errors.pin ? <div className="text-red-600 text-sm">{props.errors.pin}</div> : null
          }
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
          "
          disabled={isLoading}
        >
            {
              isLoading ? <span class='loader'></span> : 'Confirm Withdrawal'
            }
        </button>
      </form>
          )
        }
      </Formik>
      
    </div>
  )
}

export default WithdrawModal