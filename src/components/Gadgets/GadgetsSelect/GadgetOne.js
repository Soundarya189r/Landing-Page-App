import React from "react";
import {GadgetStyle,LabelStyle,GadgetButton} from  '../../../styledComp/GadgetStyle'

const GadgetOne = (props) =>(

   <GadgetStyle>
   <LabelStyle>{props.label}</LabelStyle>
   <GadgetButton onClick={props.added}>Add</GadgetButton>
   </GadgetStyle> 
);

export default GadgetOne;