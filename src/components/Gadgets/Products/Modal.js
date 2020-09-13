import React from 'react';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

 
const ModalHook=(props)=>{

 
    return (
      <div>
        <Modal
          isOpen={props.modalIsOpen}
          onRequestClose={props.closeModal}
          style={customStyles}
          ariaHideApp={false}

        >
 {props.children}
          
        </Modal>
        </div>
    );
}

export default ModalHook;