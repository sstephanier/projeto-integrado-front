import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 95vh;
input {
background: #FFFFFF;
border: 1px solid #D5D8DE;
border-radius: 4px;
width: 365px;
margin: 1vh ;
height: 51px;
margin-top: 1vh;
@media (max-width: 470px) {
    width: 280px;
}
@media (max-width: 340px) {
    width: 240px;
}
}
h1 {
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 0px;
text-align: center;
color: #000000;
margin-bottom: 2vh;
}
.bar {
    position: absolute;
    margin-top: 52rem ;
}
`
export const Image = styled.img`
display: flex;
justify-content: center;
align-items: center;  
`
export const ButtonBoss = styled.div`
margin-top: 10vh;
@media (max-width: 470px) {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   margin-right: 20px;
   width: 180px;
    
}
img {
    @media (max-width: 470px) {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   margin-right: -20px;
   width: 300px; 
}
@media (max-width: 340px) {
    width: 250px;
    margin-left: 0rem;
    
}
}
`
export const Button = styled.div`
cursor: pointer;
margin: 5px;
@media (max-width: 470px) {
    width: 280px;
    
}
@media (max-width: 340px) {
    width: 150px;
    margin-right: 5.5rem;
    
}
`