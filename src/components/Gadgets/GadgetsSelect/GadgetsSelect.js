import React from 'react';
import styled from 'styled-components'
import GadgetOne from './GadgetOne'

const BuildControls=styled.div`
width: 100%;
background-color: #CF8F2E;
display: flex;
flex-flow: column;
align-items: center;
box-shadow: 0 2px 1px #ccc;
margin: auto;
padding: 10px 0;
`;
const StyledButton = styled.button`
background-color: #DAD735;
outline: none;
cursor: pointer;
border: 1px solid #966909;
color: #966909;
font-family: inherit;
font-size: 1.2em;
padding: 15px 30px;
box-shadow: 2px 2px 2px #966909;

&:hover, &:active {
    background-color: #A0DB41;
    border: 1px solid #966909;
    color: #966909;
}

&:disabled {
    background-color: #C7C6C6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
}

&:not(:disabled) {
    animation: enable 0.3s linear;
}

@keyframes enable {
    0% {
        transform: scale(1);
    }
    60% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }`;

const controls = [
{label: 'Iphone', type:'iphone'},
{label: 'Android', type:'android'},
{label: 'PC', type:'pc'},
{label: 'Laptop', type:'laptop'}

];

const GadgetsSelect = (props) =>(
    <div>
    <BuildControls>
<p>Current Price: {props.price.toFixed(2)}</p>
        {
            controls.map(ctrl =>(
                <GadgetOne key={ctrl.label}
                 label={ctrl.label}
                 added={()=>props.gadgetsAdded(ctrl.type)}/>
            ))
        }
        <StyledButton>
        <button
        disabled={!props.purchasable}
        onClick={props.ordered}
        >ORDER NOW</button>

        </StyledButton>
    </BuildControls>
    </div>
);

export default GadgetsSelect