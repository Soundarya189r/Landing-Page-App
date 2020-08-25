import styled from 'styled-components'


  export const Gallery =styled.div`

  width: 20%;
  height: auto;
  padding-right:60px;
  paddind-left:60px;
  display:inline-block;  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  
   img {
    width: 52%;
    height: 70%;

  }
  
  
  
  `;


  export const GadgetStyle=styled.div`
  width: 20%;
  height: auto;
  padding-right:60px;
  padding-left:60px;
  display:inline-block;  
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  
  `;
  
 export const GadgetButton=styled.div`
  display:inline-block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 2px solid #AA6817;
  cursor: pointer;
  outline: none;
  
  &:disabled {
      background-color: #AC9980;
      border: 1px solid #7E7365;
      color: #ccc;
      cursor: default;
  }
  &:hover:disabled {
      background-color: #AC9980;
      color: #ccc;
      cursor: not-allowed;
  }
  `;
  export const LabelStyle=styled.div` 
  padding: 10px;
  font-weight: bold;
  display :inline-block;
  cursor: context-menu;
  width: 80px;`;
    
  export const BuildControls=styled.div`
  width: 100%;
  background-color: #80ccff;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
  `;
  export const StyledButton = styled.button`
  background-color: #DAD735;
  outline: none;
  cursor: pointer;
  border: 1px solid #966909;
  color: #966909;
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px #966909;
  
  
  &:hover, &:active {
      background-color: #A0DB41;
      border: 1px solid #966909;
      color: #966909;
  }
  
  &:disabled {
      background-color: #C7C6C6;
      cursor: not-allowed;
      border: 1px solid #ccc;
      color: #888888;
  }
  
  &:not(:disabled) {
      animation: enable 0.3s linear;
  }
  
  @keyframes enable {
      0% {
          transform: scale(1);
      }
      60% {
          transform: scale(1.1);
      }
      100% {
          transform: scale(1);
      }`;
  
      export const GadgetWidth=styled.div`
      width: 100%;
      margin: auto;
      height: 250px;
      overflow: scroll;
      text-align : center;
      font-weight : bold;
      font-size=1.2 rem; 
      display : inline;
      `;
      