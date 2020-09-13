import styled from 'styled-components'
import {NavLink} from 'react-router-dom'


export const Div = styled.table`
text-align : center;
border-collapse: collapse;
width: 100%;

background-size : contain;

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;

img {
    width: 32%;
    height: 50%;

  }

`;
export const NavStyle = styled(NavLink)`
text-decoration: none;
float:right;
font: inherit;
padding: 15px 25px;
font-size: 24px;
text-align: center;
cursor: pointer;
outline: none;
color: black;
background-color: rgba(0,0,0,0.2);
border: none;
border-radius: 15px;
box-shadow: 0 9px #999;


&:hover {background-color: #ff3385}

&:active {
background-color: #ff3385;
box-shadow: 0 5px #666;
transform: translateY(4px);
}`;


export const Order=styled.button` 
font: inherit;
padding: 15px 25px;
font-size: 24px;
text-align: center;
cursor: pointer;
outline: none;
color: black;
background-color: rgba(0,0,0,0.2);
border: none;
border-radius: 15px;
box-shadow: 0 9px #999;


&:hover {background-color: #ff3385}

&:active {
background-color: #ff3385;
box-shadow: 0 5px #666;
transform: translateY(4px);
}`;

export const Fixed= styled.div`
position: fixed;
top : 0;
width: 100%`;

export const Wrap = styled.div`
           box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
            max-width: 800px;
            margin: auto;
            text-align: center;
            background-repeat: no-repeat;
            background-size: 300px 100px;
            padding-bottom: 10px;
            }}`;


            export const Name=styled.h1`
            background-color: #80ccff;
            color: #ff3385;
            `;

            export const Specs = styled.div`
            background-color: #80ccff;
          color: #ff3385; 
          font-weight: bolder;
           font-size: 20px;
            `;

            export const Features= styled.p`
           border-style: double;
            color: black;
  border-width: 5px 10px;
  max-width: 200px;
  font-size: 1.5em;
margin-left:auto;
margin-right: auto;
            `;


          export  const Label=styled.label`
padding: 5em;
font: inherit;
`;