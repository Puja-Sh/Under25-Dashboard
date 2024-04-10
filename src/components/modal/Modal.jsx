import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '200px',
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#fff',
        borderRadius: '8px'
    },
    overlay: {
        background: "#1F1F1F4D"
    }
};

const ModalComponent = ({ children, modalIsOpen, setIsOpen }) => {
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={ modalIsOpen }
            onRequestClose={ closeModal }
            style={ customStyles }
            contentLabel="Example Modal"
        >
            { children }
        </Modal>
    )
}

export default ModalComponent