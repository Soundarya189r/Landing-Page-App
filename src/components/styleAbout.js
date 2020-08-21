import styled from 'styled-components'
import gadgetsmain from '../../src/assets/gadgetsmain.jpg'


 export const Title =styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1em;
    margin-bottom: 2em;
    background-color:  #ff3385;
    color: #80ccff;
  `;

export const Div=styled.div`
          height: "100vh";
        backgroundSize: "cover";
        backgroundRepeat: "no-repeat";
        backgroundPosition: "center";
        backgroundImage: url(${gadgetsmain})
        `;

  export default Title;