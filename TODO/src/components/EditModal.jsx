import React, { useState } from 'react';
import Modal from 'react-modal';

const EditModal = ({ isOpen, onRequestClose, onSave, defaultText }) => {
    const [editedText, setEditedText] = useState(defaultText);

    const handleSave = () => {
        onSave(editedText);
        onRequestClose();
    };

    return (
        <Modal className="modal"
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Editar Tarefa"
        >
            <h2>Editar Tarefa</h2>
            <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
            />
            <button onClick={handleSave}>Salvar</button>
            <button className='cancel' onClick={onRequestClose}>Cancelar</button>
        </Modal>
    );
};

export default EditModal;
