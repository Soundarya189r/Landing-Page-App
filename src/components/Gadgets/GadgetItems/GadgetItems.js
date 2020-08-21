import React from 'react'
import styled from 'styled-components'
import android from '../../../assets/android.jpg'
import pc from '../../../assets/pc.jpg'
import iphone from '../../../assets/iphone.jpg'
import laptop from '../../../assets/laptop.jpg'
import Gallery from '../GadgetItems/GadgetStyle'






const GadgetItem=(props)=>{

    let items = null;
    switch(props.type){
        case('android'): items=<Gallery>
            <img src={android}/> 
</Gallery>
        break;
            case('iphone'): items=<Gallery><img src={iphone}/></Gallery>
            break;

                case('pc'): items=<Gallery><img src={pc}/></Gallery>
                break;

                    case('laptop'): items=<Gallery><img src={laptop}/></Gallery>
                    break;
            
    }
    return items;

    // GadgetItem.propTypes={
    //     type:PropTypes.isString.isRequired
    // }
};

export default GadgetItem;
