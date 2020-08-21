import React from 'react'
import Title from "./styleAbout"
import gadgetsmain from '../../src/assets/gadgetsmain.jpg'

function About() {
    return (
        <>
        <div  style={{
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${gadgetsmain})` }}>
                 <Title >
                    <h1>About Us</h1>
                </Title>
                <Title>
                    <h2>Shop all Gadgets with us</h2>
                </Title>
                <Title>
                    <ul>
                        <li>
                            Iphone
                        </li>
                        <li>
                            Android
                        </li>
                        <li>PC</li>
                        <li>Laptop</li>
                        <li>Much more...</li>
                    </ul>

                </Title>
                </div>
               
    
    </>
    )
        }
export default About
