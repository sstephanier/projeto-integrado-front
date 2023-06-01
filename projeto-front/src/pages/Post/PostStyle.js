import styled from "styled-components";

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

export const Button2 = styled.div`
cursor: pointer;
`

export const ContainerPost = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-content: center;
flex-direction: column;
textarea {
width: 20.4rem;
height: 8.2rem; 
padding:12px; 
background: #E5E5E5;
border-radius: 8px;
margin-top: 2rem;
font-family:sans-serif;
font-size:14px;
@media (max-width: 480px) {
    width: 16rem;
    
}
@media (max-width: 320px) {
    width: 12.5rem;
    
}
}
.card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 20rem;
    min-height: 10rem;
    padding: 1rem;
    background: #FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    gap: 1.2rem;
    margin-top: 2rem;
    @media (max-width: 480px) {
    width: 250px;
    display: flex;
    align-content: center;
    align-items: center;
}
    @media (max-width: 320px) {
    width: 190px;
    }
    .content {
        h1 {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        margin-right: 7rem;
        color: #6F6F6F;
        }
        h2 {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #000000;
        }
        .buttons {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: 2.6rem;
            margin-top: 2.8rem;
        }
    }
}
img {
    margin-top: 2rem;
}
`