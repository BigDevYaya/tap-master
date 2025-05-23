import { createContext, useState, useEffect } from "react";


export const AppContext = createContext();


export const AppProvider = ({children}) => {
    const [name, setName] = useState("");
    const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('count')
    return saved ? JSON.parse(saved) : 0
  })
  const [historyModal, showHistoryModal] = useState(false)
  const [profileModal, showProfileModal] = useState(false)
  const [withdrawModal, showWithdrawModal] = useState(false)
  const [modal, showModal] = useState(false)
  const [dollarCount, setDollarCount] = useState()
  const [plusOnes, setPlusOnes] = useState([])
  const [pin, setPin] = useState()
  const [sendAmount, setSendAmount] = useState()
  const [walletAddress, setWalletAddress] = useState("")

  let valid = false

  function checkInputs() {
    const userPin = 1234
    if (walletAddress.length < 10 || !walletAddress.includes('a')) return false
    if (sendAmount > dollarCount) return false
    if (pin !== userPin) return false
    return true
  }

  function makeTransfer() {
    const sendAmountCoin = sendAmount * 100000
    valid ? setCount(prev => prev - sendAmountCoin) : alert('invalid')
  }

  useEffect(() => {
    const timer = setTimeout(() => setPlusOnes(prev => prev.slice(1)), 1000)
    return () => clearTimeout(timer)
  }, [plusOnes])

  useEffect(() => {
    setDollarCount((count / 100000).toFixed(3))
  }, [count])

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count))
  }, [count])

  const handleCoinClick = () => {
    setCount(prev => prev + 1)
    setPlusOnes(prev => [...prev, { id: Date.now(), offset: Math.random() * 40 - 20 }])
  }

  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        count,
        setCount,
        historyModal,
        showHistoryModal,
        profileModal,
        showProfileModal,
        withdrawModal,
        showWithdrawModal,
        modal,
        showModal,
        dollarCount,
        plusOnes,
        pin,
        setPin,
        sendAmount,
        setSendAmount,
        walletAddress,
        setWalletAddress,
        checkInputs,
        makeTransfer,
        handleCoinClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};