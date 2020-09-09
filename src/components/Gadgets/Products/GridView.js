import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './override.css';


const GridView = (props) => {
    return (
       
         <Carousel>
                {
                 props.image.map((img,index)=>(
                     <div key={index} >
                     <img src={img} alt={props.name}/>
                 <p className="legend">{props.name}</p>
                     </div>       

                 ))
                }

        </Carousel>    
           )
}

export default GridView
