import React from "react";
import Hoc from "../../../wrapper/hoc"
import Backdrop from "../Backdrop/Backdrop";
import {Modal} from "../../../styledComp/ModalStyle"


const modal=(props)=>(
    <Hoc>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
<Modal
     style={{
         transform: props.show ? 'translateY(0)': 'translateY(-100vh',
      opacity: props.show ? '1':'0'
     }}
      >

{props.children}

</Modal>
</Hoc>
);

export default modal;



