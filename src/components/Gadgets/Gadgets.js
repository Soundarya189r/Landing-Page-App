import React from 'react';
import GadgetItem from './GadgetItems/GadgetItems'
import {GadgetWidth} from "../../styledComp/GadgetStyle"


const Gadgets =(props)=>{
    return(
 <GadgetWidth>
<GadgetItem type="pc"/>
<GadgetItem type="iphone"/>
<GadgetItem type="laptop"/>
<GadgetItem type="android"/>
</GadgetWidth>

    );
}
export default Gadgets;