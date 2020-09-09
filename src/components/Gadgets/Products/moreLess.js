import React from 'react'
import ShowMoreText from 'react-show-more-text';

 const MoreLess=(props)=> {
 
        return (
            <ShowMoreText
                /* Default options */
                lines={1}
                more='Show more'
                less='Show less'
                anchorClass=''
                expanded={false}
                width={260}
            >
           {props.children}
                

            </ShowMoreText>
        );
    }



    export default  MoreLess;