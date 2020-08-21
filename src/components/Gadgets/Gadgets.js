import React from 'react';
import styled from 'styled-components'
import GadgetItem from './GadgetItems/GadgetItems'

const GadgetWidth=styled.div`
width: 100%;
margin: auto;
height: 250px;
overflow: scroll;
text-align : center;
font-weight : bold;
font-size=1.2 rem; 
display : inline;
`;

const Gadgets =(props)=>{
    return(
<div>
<GadgetWidth>
<GadgetItem type="pc"/>
<GadgetItem type="iphone"/>
<GadgetItem type="laptop"/>
<GadgetItem type="android"/>


</GadgetWidth>
</div>
    );
}
export default Gadgets;