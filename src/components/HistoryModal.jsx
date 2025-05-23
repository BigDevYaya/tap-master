import { History } from 'lucide-react'
import { useContext } from 'react'
import { AppContext } from '../utils/AppContext'

const HistoryModal = () => {
  const {
    showHistoryModal
  } = useContext(AppContext)
  return (
    <div
    className='fixed inset-0 grid place-items-center bg-black/50 select-none'
    onClick={() => showHistoryModal(prev => !prev)}>
        <div className='bg-[#131949] flex justify-center items-center h-72 p-6 space-y-4 text-2xl rounded w-full max-w-sm'>
            <p className='text-gray-400 text-sm flex items-center gap-4'>Your past transactions appear here <History /></p>
        </div>
    </div>
  )
}

export default HistoryModal