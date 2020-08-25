import React from 'react';
import GadgetOne from './GadgetOne'
import {StyledButton, BuildControls} from '../../../styledComp/GadgetStyle'

const controls = [
{label: 'Iphone', type:'iphone'},
{label: 'Android', type:'android'},
{label: 'PC', type:'pc'},
{label: 'Laptop', type:'laptop'}

];

const GadgetsSelect = (props) =>(
    <BuildControls> 
            {
                controls.map(ctrl =>(
                <GadgetOne key={ctrl.label}
                 label={ctrl.label}
                 added={()=>props.gadgetsAdded(ctrl.type)}/>
                 
                  ))
            }
    <p style={{
              fontWeight: "bold",
              cursor:"context-menu" }}>
              Your Cart: {props.price.toFixed(2)}</p>
        
        <StyledButton
        disabled={!props.purchasable}
        onClick={props.ordered} >ORDER NOW
        </StyledButton>

    </BuildControls>
);

export default GadgetsSelect