import { createContext, useState, useEffect, useRef } from "react";


export const AppContext = createContext();


export const AppProvider = ({children}) => {
    const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('count')
    
    return saved ? JSON.parse(saved) : 0
  })
  const [total, setTotal] = useState(() => {
  const saved = localStorage.getItem('total');
  return saved ? JSON.parse(saved) : 0;
});

  const [name, setName] = useState(() => {
    const saved = localStorage.getItem('name')

    return saved ? JSON.parse(saved) : ''
  });

  const [MAX, setMax] = useState(() =>{
    const saved = localStorage.getItem('MAX')

    return saved ? JSON.parse(saved) : 100
  });
  const REFILL_RATE = 1000;
  const intervalRef = useRef(null);
  const [availablePoints, setAvailablePoints] = useState(()=>{
    const saved = localStorage.getItem('availablePoints')

    return saved ? JSON.parse(saved) : MAX
  });

  const botIntervalRef = useRef(null)
  const [bot, setBot] = useState(() => {
    const saved = localStorage.getItem('bot')

    return saved ? JSON.parse(saved) : false
  })

  useEffect(()=>{
    if(bot && botIntervalRef.current === null){
      botIntervalRef.current = setInterval(() => {
        setCount(prev => prev + 1)
      }, REFILL_RATE)
    }
    return () => {
      clearInterval(botIntervalRef.current)
      botIntervalRef.current = null
    };
  }, [bot])

  const [historyModal, showHistoryModal] = useState(false)
  const [profileModal, showProfileModal] = useState(false)
  const [withdrawModal, showWithdrawModal] = useState(false)
  const [modal, showModal] = useState(false)
  const [dollarCount, setDollarCount] = useState()
  const [plusOnes, setPlusOnes] = useState([])
  const [withdrawn, setWithdrawn] = useState(() => {
    const saved = localStorage.getItem('withdrawn')
    
    return saved ? JSON.parse(saved) : 0
  })

  const [transactions, setTransactions] = useState(()=> {
    const saved = localStorage.getItem('transactions')

    return saved ? JSON.parse(saved) : [] 
  })

  useEffect(() => {
  setTransactions(prev =>
    prev.map(tx => ({
      ...tx,
      date:
        typeof tx.date === 'number' // if it's a timestamp
          ? new Date(tx.date).toLocaleString()
          : tx.date // already formatted
    }))
  );
}, []);


  useEffect(()=>{
    if(availablePoints < MAX && intervalRef.current === null){
      intervalRef.current = setInterval(() => {
        setAvailablePoints(prev => {
          if(prev < MAX){
            return prev + 1
          } else {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            return prev
          }
        })
      }, REFILL_RATE)
    }
    return () => {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    };
  }, [availablePoints])

  useEffect(() => {
    const timer = setTimeout(() => setPlusOnes(prev => prev.slice(1)), 1000)
    return () => clearTimeout(timer)
  }, [plusOnes])

  useEffect(() => {
    setDollarCount((count / 100000).toFixed(3))
  }, [count])

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count))

    localStorage.setItem('total', JSON.stringify(total))

    localStorage.setItem('withdrawn', JSON.stringify(withdrawn))

    localStorage.setItem('MAX', JSON.stringify(MAX))

    localStorage.setItem('availablePoints', JSON.stringify(availablePoints))
    
    localStorage.setItem('bot', JSON.stringify(bot))

    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [count, total, withdrawn, MAX, availablePoints, name, bot, transactions])

  const handleCoinClick = () => {
    setCount(prev => prev +1);
    setTotal(prev => prev +1);
    setAvailablePoints(prev => Math.max(prev -1, 0));
    setPlusOnes(prev => [...prev, { id: Date.now(), offset: Math.random() * 40 - 20 }])
  }

  function updateCoin() {
    const moneyAdded = Math.floor(Math.random() * 10000)
    setCount(prev => prev + moneyAdded)
    setTotal(prev => prev + moneyAdded)
    setTransactions(prev => [...prev, { amount: moneyAdded, type: 'credit', date: new Date().now()
 }]);
  }

  return (
    <AppContext.Provider
      value={{
        total,
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
        setDollarCount,
        plusOnes,
        setPlusOnes,
        handleCoinClick,
        updateCoin,
        withdrawn,
        setWithdrawn,
        name,
        setName,
        availablePoints,
        setAvailablePoints,
        MAX,
        setMax,
        bot,
        setBot,
        transactions, setTransactions
      }}
    >
      {children}
    </AppContext.Provider>
  );
};