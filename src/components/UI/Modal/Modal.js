import React from "react";
import Hoc from "../../../wrapper/hoc"
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.css"


const modal=(props)=>(
    <Hoc>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
<div class="Modal"
     style={{
         transform: props.show ? 'translateY(0)': 'translateY(-100vh',
      opacity: props.show ? '1':'0'
     }}
      >

{props.children}

</div>
</Hoc>
);

export default modal;


