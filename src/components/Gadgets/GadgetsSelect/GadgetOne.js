import React from "react";
import styled from "styled-components"

const GadgetStyle=styled.div`
width: 20%;
height: auto;
padding-right:60px;
paddind-left:60px;
display:inline-block;  background-repeat: no-repeat;
background-size: contain;
position: relative;

`;

const GadgetButton=styled.div`display: block;
font: inherit;
padding: 5px;
margin: 0 5px;
width: 80px;
border: 2px solid #AA6817;
cursor: pointer;
outline: none;

&:disabled {
    background-color: #AC9980;
    border: 1px solid #7E7365;
    color: #ccc;
    cursor: default;
}
&:hover:disabled {
    background-color: #AC9980;
    color: #ccc;
    cursor: not-allowed;
}
`;

const LabelStyle=styled.div` 
padding: 10px;
font-weight: bold;
width: 80px;`;



const GadgetOne = (props) =>(

   <>
     <LabelStyle>{props.label}</LabelStyle>
<GadgetButton onClick={props.added}>Add</GadgetButton>


</>



    
);

export default GadgetOne;