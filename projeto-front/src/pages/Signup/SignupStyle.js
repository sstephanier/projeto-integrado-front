import styled from "styled-components";

export const ContainerSignup = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-content: center;
flex-direction: column;
h1 {
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 700;
font-size: 33px;
line-height: 43px;
color: #373737;
padding-left: 1rem;
}
.bar {
    position: absolute;
    margin-top: 55rem ;
}
.input {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
}
input {
background: #FFFFFF;
border: 1px solid #D5D8DE;
border-radius: 4px;
width: 365px;
margin: 1vh ;
height: 51px;
margin-top: 1vh;
@media (max-width: 480px) {
    width: 340px;
}
@media (max-width: 330px) {
    width: 14rem;
    margin-left: 0.7rem;
}
}
div {
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
margin-top: 1rem;
color: #000000;
align-items: center;
}
.authorization {
margin-top: 2rem;
display: flex;
flex-direction: column;
flex-wrap: wrap;
margin-left: 1rem;
a {
    font-weight: normal;
    color: #4088CB;
    text-decoration: none;
}
}
.contrato {
/* position: absolute;
margin-right: 10rem;
margin-left: -37.5rem; */
display: flex;
flex-direction: row;
justify-content: center;
width: 50%;
@media (max-width: 900px) {
    width: 100%;
    display: flex;
    justify-content: center;
}
@media (max-width: 580px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
span {
    width: 40%;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
    @media (max-width: 900px) {
    width: 45%;
}
    @media (max-width: 580px) {
    width: 90%;
}
}
input {
    height: 2rem;
    width: 2%;
    @media (max-width: 900px) {
    width: 2%;
    height: 1rem;
}
    @media (max-width: 580px) {
    width: 10%;
    height: 1rem;
}
}
}
`
export const Button = styled.button`
margin-top: 2rem;
background: linear-gradient(90deg, #FF6489, #F9B24E);
color:#FFFFFF;
border-style:none;
cursor:pointer;
font-weight:bold;
font-size: 18px;
font-family:sans-serif;
border-radius:2.5vh;
width:23rem;
height:6vh;
@media (max-width: 480px) {
    width: 21rem;
    margin-right: 0.4rem;
}
@media (max-width: 330px) {
    width: 14rem;
    margin-left: 0.7rem;
}
`