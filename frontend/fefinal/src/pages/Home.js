import { StyledTitle,StyledTitle2,Avatar,StyledButton, ButtonGroup, colors, StyledContainer } from "../components/Styles";

import Logo from './../assets/favicon.png';

import background1 from './../assets/background1.svg'
import { useStateContext } from '../contexts/ContextProvider';
const Home =  () => {
    const {setActiveMenu} = useStateContext();
    {setActiveMenu(false)}

    return (
        <div className='bg-half-transparent 
        w-screen h-screen fixed nav-item top-0 right-0 p-0'>
        <StyledContainer style={{width:"100%",height:"100%",
        position:"absolute",top:"0%",zIndex:"1001"}}
        >
            <div style={{                
                top:0,
                left:0,
                backgroundColor:"transparent",
                width:"100%",
                padding:"15px",                            
                paddingTop:"15vh"
            }}>
            <src image={Logo}/>
            </div>
            <StyledTitle size={65}>
                selamat datang
            </StyledTitle>
            <StyledTitle2 size={27}>
                explore
            </StyledTitle2 >
            <ButtonGroup>
            <StyledButton to="/login">Masuk</StyledButton>
            </ButtonGroup>
            
        </StyledContainer>
        </div>
    );
}

export default Home;