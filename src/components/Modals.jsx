import React, { useContext } from 'react'
import { AppContext } from '../utils/AppContext'
import Modal from './Modal';
import ProfileModal from './ProfileModal';
import HistoryModal from './HistoryModal';
import WithdrawModal from './WithdrawModal';

const Modals = () => {
    const {
        modal, 
        profileModal,
        historyModal,
        withdrawModal
    } = useContext(AppContext);
  return (
    <>
    {modal && <Modal />}
      {profileModal && <ProfileModal />}
      {historyModal && <HistoryModal />}
      {withdrawModal && (
        <WithdrawModal/>
      )}
    </>
  )
}

export default Modals