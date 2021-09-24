import React from 'react';
import { Modal } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { AddUserModal } from './AddUserModal';
import { CLOSE_MODAL } from '../../store/actions';

const MainModal = () => {
    const dispatch = useDispatch();
    const { modalType, isModalOpen } = useSelector((state) => state.customization);

    const handleClose = () => {
        dispatch({ type: CLOSE_MODAL });
    };

    const showModalContent = () => {
        switch (modalType) {
            case 'add-user-modal':
                return <AddUserModal />;
            default:
                return <></>;
        }
    };

    return (
        <Modal open={isModalOpen} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            {showModalContent()}
        </Modal>
    );
};

export default MainModal;
