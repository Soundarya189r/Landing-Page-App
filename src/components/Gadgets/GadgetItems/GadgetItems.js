import React from 'react'
import android from '../../../assets/android.jpg'
import pc from '../../../assets/pc.jpg'
import iphone from '../../../assets/iphone.jpg'
import laptop from '../../../assets/laptop.jpg'
import {Gallery} from '../../../styledComp/GadgetStyle'


const GadgetItem=(props)=>{

    let items = null;
    switch(props.type){
        case('android'): items=<Gallery><img src={android} alt="android"/> </Gallery>
        break;
        case('iphone'): items=<Gallery><img src={iphone} alt="iphone"/></Gallery>
        break;
        case('pc'): items=<Gallery><img src={pc} alt="pc"/></Gallery>
        break;
        case('laptop'): items=<Gallery><img src={laptop} alt="laptop"/></Gallery>
        break;
        default: items=   <h1>No project match</h1>
        break;

    }
    return items;

};

export default GadgetItem;
