import React from "react"
import styled from "styled-components"
import NavigationItem from "../NavigationItems/NavigationItems"


const Tool=styled.header`
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #703B09;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;



@media (max-width: 499px) {
    .DesktopOnly {
        display: none;
    }
}`;




const toolbar=(props)=>(

    <Tool>
        <div>MENU</div>
<NavigationItem/>
    </Tool>

);

export default toolbar;