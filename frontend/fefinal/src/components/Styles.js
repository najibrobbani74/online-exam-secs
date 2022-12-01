import styled from "styled-components";
import background from './../assets/background.svg'
import background1 from './../assets/background1.svg'
import guru from '../assets/guru.svg';
import murid from '../assets/murid.svg';
import {Link} from 'react-router-dom';
import grass from './../assets/grass.svg';
export const colors = {
    white:"#F7F7F7",
    red:"#DC2626",
    grey:"#868686",
    light1:"#F3F4f6",
    light2:"#F3F4f6",
    dark1:"#1F2937",
    dark2:"#485563",
    dark3:"#9CA3A", 
    dark4:"#15202b", 
    dark5:"#1D2D3B",
    dark6:"#22303c",
    white2:"#E8E8E8",
    white3:"#FCF7FF",
    superwhite:'FFFFFF'

};


//dashboard

export const Postname = styled.h1`
font-size: ${(props) => props.size}px;
    
    
    color: ${(props) => props.color? props.color: colors.dark1};
    padding : 5px;
`;

export const Dashboardtitle = styled.h1 `
font-size: ${(props) => props.size}px;
    
    
    color: ${(props) => props.color? props.color: colors.dark1};
    padding : 5px;
    

`;

export const Styleddashboard = styled.div`
margin:0;
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
background-color: ${colors.dark4}
`;

export const Styledsidebar = styled.div`
min-height:100vh;
background-color: ${colors.red}

`;

//login and reg




export const StyledContainer = styled.div`
    margin:0;
    width:100vh;
    height:100vh;
    
    
    background: linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${background1});
    background-size:cover;
    background-attachment:fixed;
    
`;

//home
export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    
    text-align:center;
    color: ${(props) => props.color? props.color: colors.white};
    padding : 5px;
    margin-bottom:20px;
`;

export const StyledTitle2 = styled.p`
    font-size: ${(props) => props.size}px;
    text-align:center;
    color: ${(props) => props.color? props.color: colors.white};
    padding : 5px;
    margin-bottom:25px;
`;

export const Avatar = styled.div`
    width:20%;
    height:20%;
    
    background-image: url(${props => props.image});
    background-size:cover;
    background-position:center;
    margin:auto;
    margin-top:-10%
`;

export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.white};
    border-radius: 25px;
    color: ${colors.red};
    text-decoration: none;
    text-align:center;
    transition: ease-in-out 0.3s;

    &:hover{
        background-color: ${colors.white};
        color: ${colors.red};
        cursor: pointer;
    }
`;

export const ButtonGroup = styled.div `
display :flex;
justify-content space-around;
flex-direction: row;
margin-top: 20px;
`;



export const StyledInput = styled.input `
    width: 100%;
    padding:5% ;
    padding-left: 15%;
    font-size: 17px
    letter-spacing: 1px;
    outline: none;
    color: ${colors.superwhite};
    
    border:0;
    outline:0;
    display: block;
    margin 2% auto 6% auto;
    transition: ease-in-out 0.3s;

    
    
`;

export const StyledRadio = styled.input `
    width: 100%;
    padding:5% ;
    padding-left: 15%;
    font-size: 17px
    letter-spacing: 1px;
    outline: none;
    color: ${colors.superwhite};
    
    type:radio;

    border:0;
    outline:0;
    display: block;
    margin 2% auto 6% auto;
    transition: ease-in-out 0.3s;

    
    
`;

export const StyledLabel = styled.p`
    text-align: left;
    font-size: 23px;
    font-weight: bold;
`;

export const StyledFormreg = styled.div`
background-color: ${props => props.bg || colors.dark1};        
padding: 6% 4%;


transition: ease-in-out 0.3s;


`;

export const StyledForm = styled.div`
background-color: ${props => props.bg || colors.dark1};        
padding: 6% 4%;


transition: ease-in-out 0.3s;
&:hover{
    background-color: ${colors.white};
    color: ${colors.dark1};
}

`;

export const Styledguru = styled.button`
background: url(${guru})no-repeat 40% 20%;
background-size:90% 80%;
background-color: transparent;
border: 0px solid ${colors.red};
transition: ease-in-out 0.3s;
&:hover{
    background-color: ${colors.red};
    color: ${colors.white};
    cursor: pointer;  
`;

export const Styledreg = styled.div`

background: url(${null})no-repeat 0% 45%;
background-size: 50% 50%;
background-color: ${colors.dark1};
border: 0px solid ${colors.red};
transition: ease-in-out 0.3s;
opacity:1;
z-index: 9;

&:hover{    
    opacity:0;
    background-color: ${colors.dark1};
`;

export const Styledreg2 = styled.div`

background: url(${null})no-repeat 0% 45%;
background-size: 50% 50%;
background-color: ${colors.light1};
border: 0px solid ${colors.red};
transition: ease-in-out 0.3s;
opacity:1;


&:hover{    
    opacity:1;
`;

export const Styledmurid = styled(Link)`
background: url(${murid})no-repeat 40% 20%;
background-size:90% 80%;
background-color: transparent;
border: 0px solid ${colors.red};
transition: ease-in-out 0.3s;
&:hover{
    background-color: ${colors.red};
    color: ${colors.white};
    cursor: pointer;  
`;

export const StyledRegBtn = styled(Link) `    
width: 60%;
padding: 2%;
background-color: transparent;
font-size: 180%;
border: 2px solid ${colors.red};
border-radius: 30px;
color: ${colors.red};
text-decoration: none;
text-align:center;
transition: ease-in-out 0.3s;


&:hover{
    background-color: ${colors.red};
    color: ${colors.white};
    cursor: pointer;
}
`;

export const Styledexit = styled.button`
padding: 1% 0%;
width: 60%;


background-color: transparent;
border: 0px solid ${colors.red};
left:43%;
font-size:115%;
font-weight:bold;
color: ${colors.white};
transition: ease-in-out 0.3s;
border-radius: 40px;
&:hover{
    background-color: ${colors.red};
    color: ${colors.dark1};
    cursor: pointer;  
`;

export const StyledFormBtn = styled.button `    
    width: 20%;
    padding: 0.5% 0% 0.5% 0%;
    background-color: transparent;
    font-size: 180%;
    text-allign:center;
    border: 2px solid ${colors.dark1};
    border-radius: 30px;
    color: ${colors.dark1};
    transition: ease-in-out 0.3s;

    &:hover{
        background-color: ${colors.red};
        color: ${colors.white};
        cursor: pointer;       
        border: 2px solid ${colors.white}; 
}`;

export const StyledFormBtnreg = styled.button `    
    width: 20%;
    padding: 0.5% 0% 0.5% 0%;
    background-color: transparent;
    font-size: 180%;
    text-allign:center;
    border: 2px solid ${colors.red};
    border-radius: 30px;
    color: ${colors.red};
    transition: ease-in-out 0.3s;


`;

export const StyledregFormBtn = styled.button `    
    width: 50%;
    padding: 1% 0% 1% 0%;
    background-color: transparent;
    font-size: 180%;
    text-allign:center;
    border: 2px solid ${colors.dark1};
    border-radius: 30px;
    color: ${colors.dark1};
    transition: ease-in-out 0.3s;

    &:hover{
        background-color: ${colors.red};
        color: ${colors.white};
        cursor: pointer;       
        border: 2px solid ${colors.white}; 
}`;

export const StyledFormBtn2 = styled.button `    
    width: 20%;
    padding: 0.5% 0% 0.5% 0%;
    background-color: transparent;
    font-size: 180%;
    text-allign:center;
    border: 2px solid ${colors.dark1};
    border-radius: 30px;
    color: ${colors.dark1};
    transition: ease-in-out 0.3s;

    &:hover{
        background-color: ${colors.red};
        color: ${colors.white};
        cursor: pointer;        
}`;



export const StyledIcon = styled.p `
 color : ${colors.dark1}; 
 position: absolute;
 font-size: 170%;
 top: 55%;
 ${(props) => props.right && `right: 15px;`}
 ${(props) => !props.right && `left: 15px;`}
 `;

 export const ErrorMsg = styled.div`
 font-size: 11px;
 position:absolute;
 color: ${colors.red};
 margin-top: -5%;
 margin-bottom : 10px;
 text-align: left;
 
 `;

 export const ExtraText = styled.p`
font-size: ${(props) => props.size}px;
margin-top:5%;
text-allign:center;
color: ${colors.dark1}
`;

export const TextLink = styled(Link)`
text-decoration:none;
color : ${colors.red};
transition: ease-in-out 0.3s;

&:hover{
    text-decoration: underline;
    letter-spacing: 2px;
    font-weight: bold;
}
`;