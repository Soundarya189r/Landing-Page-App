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
                    <h1>To Contact</h1>
                </Title>
                <Title>
                    <h2>Visit our Official Website</h2>
                </Title>
                <Title>
                    
                        <li>
                            Mob:+6698086974
                        </li>
                        <li>
                            email:gadgetsworld@gmail.com
                        </li>
                        <li>Follow Us </li>
                        <li>Twitter: @gadgetsworld</li>
                    

                </Title>
                </div>
               
    
    </>
    )
        }
export default About
