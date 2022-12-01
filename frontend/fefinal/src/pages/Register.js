import {
    StyledInput,
    StyledForm,
    StyledFormda,
    StyledFormBtn,
    StyledRegBtn,
    StyledFormreg,
    StyledFormBtnreg,
    Wave,
    TextLink,
    StyledLabel,StyledTitle,colors,Avatar,
ButtonGroup,
ExtraText,
ErrorMsg,
StyledContainer



} from '../components/Styles.js'

import Logo from './../assets/favicon.png';

import { Formik, Form} from 'formik';
import { TextInput } from '../components/FormLib.js';

import * as Yup from 'yup';
import {Bars} from 'react-loader-spinner';

//
import {BsLadder, BsPersonSquare} from 'react-icons/bs';
import {MdAlternateEmail} from 'react-icons/md';
import {BsFileEarmarkLock,BsFileEarmarkLock2Fill} from 'react-icons/bs';

import { Navigate, useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';



//1
import body from '../assets/gurureg/1/body.svg';
import hand from '../assets/gurureg/1/hand.svg';
import head from '../assets/gurureg/1/head.svg';
import dots from '../assets/gurureg/1/dots.svg';
//2
import body2 from '../assets/gurureg/2/body.svg';
import coffee from '../assets/gurureg/2/coffee.svg';
import hand2 from '../assets/gurureg/2/hand.svg';
import head2 from '../assets/gurureg/2/head.svg';

//reg

import axios from '../auth/UserActions'
import { useStateContext } from '../contexts/ContextProvider.js';

const Register = () => {
   const { setLogin } = useStateContext();
    const navigate = useNavigate();
    const { cookies,setActiveMenu } = useStateContext();


    var a=false;

    var b=false;

    let width = window.innerWidth;

    {
        if(width < 767){
        a=true;
    }

    if(width < 1148){
        b=true;
    }
}
    
    const handleSubmit = async (e,setFieldError,setSubmitting) => {

        console.log(e)
       
          await axios.post('/auth/sign-up',
            e,
        {
    headers: {
        "Content-Type" : "application/json"

            }
        }).then((response) => {
        console.log(response.status);
        console.log(response)
                if(response.statusText === "Created"){
                    

                    alert("berhasil membuat akun" );
                    navigate('/login');
                    setActiveMenu((prevActiveMenu) =>!prevActiveMenu )
                    
                }else{
                    console.log("failed");
                }
            }).catch(
                (err) => {
                if(err.response.data.message === 'Email already exist'){
              
                setFieldError('email','email telah di pakai')                
                setSubmitting(false);
                }})
        
    }

    return( 
        <div className='bg-half-transparent 
        w-screen h-screen fixed nav-item top-0 right-0 p-0 md:p-10 '>
        <StyledContainer 
        style={{width:"100%",height:"100%",position:"absolute",top:"0%",zIndex:"1001"}}
        className='w-screen fixed nav-item top-0 right-0'
        >

            {/* animasi 1 */}
            <div style={{left:"30vh",position:"absolute",zIndex:'-1',top:"6vh",opacity: b? 0:1}}>
            <motion.img 
                    style={{backgroundColor:null
                    ,width:"40vh",pointerEvents:"none"}}
                    animate={{ rotate:[-12,-12,-12]}} 
                    src={body}
                    />
                    </div>

            <div style={{left:"1vh",position:"absolute",zIndex:'-1',top:"4vh",opacity: b? 0:1,pointerEvents:"none"}}>
            <motion.img 
                    style={{backgroundColor:null
                    ,width:"80vh",pointerEvents:"none",}}
                    animate={{ rotate:[-12,-8,-12,-9,-7,-4,-12,-10,-8,-7,-10,-12]}} 
                    transition={{
                        yoyo:Infinity,
                        duration:13
                    }}
                    src={hand}
                    />
            </div>

            <div style={{left:"23vh",position:"absolute",zIndex:'-1',top:"-2vh",opacity: b? 0:1,pointerEvents:"none"}}>
            <motion.img 
                    style={{backgroundColor:null
                    ,width:"20vh",pointerEvents:"none",}}
                    animate={{ rotate:[-7,-8,-10,-9,-7,3,-2,-8,-6,-7,-10,-12]}} 
                    transition={{
                        yoyo:Infinity,
                        duration:10
                    }}
                    src={head}
                    />
            </div>

            <div style={{left:"12vh",position:"absolute",top:"15vh",opacity: b? 0:1,pointerEvents:"none"}}>
            <motion.img 
                    style={{backgroundColor:null
                    ,width:"5vh",pointerEvents:"none",}}
                    animate={{ y:[80,-80],opacity:[1,1,1,1,1,1,0,0,0,0,0,0]}} 
                    transition={{
                        yoyo:Infinity,
                        duration:5
                    }}
                    src={dots}
                    />

            </div>

            <div style={{left:"12vh",position:"absolute",top:"15vh",zIndex:"-2",opacity: b? 0:1,pointerEvents:"none"}}>
            <motion.img 
                    style={{backgroundColor:null
                    ,width:"5vh",pointerEvents:"none",}}
                    animate={{ y:[80,-80],opacity:[0,0,0,0,0,0,1,1,1,1,1,1]}} 
                    transition={{
                        yoyo:Infinity,
                        duration:5
                    }}
                    src={dots}
                    />

            </div>

             {/* animasi 2 */}
             <div style={{right:"30vh",position:"absolute",zIndex:'-1',bottom:"-15vh",opacity: b? 0:1,pointerEvents:"none"}}>
            <motion.img 
                    style={{backgroundColor:null
                    ,width:"40vh",pointerEvents:"none"}}
                    animate={{ rotate:[52,52,52]}} 
                    src={body2}
                    />
                    </div>

                    <div style={{right:"12vh",position:"absolute",zIndex:'1',bottom:"13vh",opacity: b? 0:1,pointerEvents:"none"}}>
                    <motion.img 
                    style={{backgroundColor:null
                    ,width:"30vh",pointerEvents:"none"}}
                    animate={{ rotate:[38,50,42,46,42,40,46,49,48,52]}} 
                    transition={{
                        yoyo:Infinity,
                        duration:25
                    }}
                    src={coffee}
                    />
                    </div>

                    <div style={{right:"9vh",position:"absolute",zIndex:'-1',bottom:"21vh",opacity: b? 0:1,pointerEvents:"none"}}>
                    <motion.img 
                    style={{backgroundColor:null
                    ,width:"60vh",pointerEvents:"none"}}
                    animate={{ rotate:[49,49,49]}} 
                    src={hand2}
                    />
                    </div>

                    <div style={{right:"11vh",position:"absolute",zIndex:'-1',bottom:"38vh",opacity: b? 0:1,pointerEvents:"none"}}>
                    <motion.img 
                    style={{backgroundColor:null
                    ,width:"20vh",pointerEvents:"none"}}
                    animate={{ rotate:[52,52,52]}} 
                    src={head2}
                    />
                    </div>


            <div className='overflow-auto h-screen'>
            
        <StyledForm 
        //style={{width:"40%",margin:"auto"}}
        style={{backgroundColor: a ? colors.white : ''}}
        className='w-full md:w-1/2 m-auto'
        >
                <img src={Logo} style={{width:"15vh",margin:"auto"}}/>
                <StyledTitle color={colors.red} size={50}
                style={{fontWeight:"bolder"}}
                >
                    daftar</StyledTitle>
    
                <Formik 
                enableReinitialize
                
                initialValues={{
                    role:"admin",
                    email:"",
                    name:"",
                    password:"",                    
                    confirm_password:"",
                    
                    
                }}
                validationSchema={
                    Yup.object({
                        role : Yup.string(),                    
                        email: Yup.string().required("tidak bisa kosong"), 
                        name: Yup.string()
                        .required("tidak bisa kosong").max(30,'maksimal 30 huruf').matches(/^(?=.*[a-z])/, 'Harus mengandung setidaknya satu karakter huruf kecil')
                        .matches(/^(?=.*[A-Z])/, 'Harus mengandung setidaknya satu karakter huruf Besar'),
                        password :  Yup.string().min(8, "kata sandi terlalu pendek")
                        .required("tidak bisa kosong")
                        .matches(/^(?=.*[a-z])/, 'Harus mengandung setidaknya satu karakter huruf kecil')
                        .matches(/^(?=.*[A-Z])/, 'Harus mengandung setidaknya satu karakter huruf Besar')
                        .matches(/^(?=.*[0-9])/, 'Harus mengandung setidaknya satu nomor')
                        .matches(/^(?=.*[!@#\$%\^&\_=()*])/, 'Harus mengandung setidaknya satu karakter khusus'),                     
                        confirm_password: Yup.string().required("tidak bisa kosong").
                        oneOf([Yup.ref("password")],"password tidak sama"),                      
                         
                        
                    })
                }


 

                
                onSubmit={(values,{setSubmitting,setFieldError}) => {
                    values.role='admin';
                    handleSubmit(values,setFieldError,setSubmitting)
                }}
                >
                    {({isSubmitting}) => (
                        <Form   onChange={() => {
                                console.log(width);
                                    
                                     }
                        
                       }    >
                        
                           <ErrorMsg id='bigimg' style={{position:"absolute",marginTop:"27%",marginLeft:"15%",zIndex:"1",
                                visibility:"hidden",fontSize:"80%"
                            }}>
                               image too big</ErrorMsg>
                           <ErrorMsg id='unsupimg' style={{position:"absolute",marginTop:"27%",
                           marginLeft:"15%",zIndex:"1",
                                visibility:"hidden",fontSize:"80%"
                            }}>
                               unsuported image type</ErrorMsg>

                           <TextInput 
                           name="name" 
                           type="text" 
                           label="name"
                           placeholder="name"
                           icon={<BsPersonSquare/>}
                           />

                            <TextInput 
                           name="email" 
                           type="text" 
                           label="email"
                           placeholder="email"
                           icon={<MdAlternateEmail/>}
                           />
                           
                            
                           <TextInput
                           name="password" 
                           type="password" 
                           label="password"
                           placeholder="password"
                           icon={<BsFileEarmarkLock/>}
                           />

                           <TextInput
                           name="confirm_password" 
                           type="password" 
                           label="repeat password"
                           placeholder="repeat password"
                           icon={<BsFileEarmarkLock2Fill/>}
                           />                            

                           <ButtonGroup>
                               {!isSubmitting &&<StyledFormBtn                              
                                 type='submit'
                                 className='w-full sm:bg-red-400'
                                 >
                               <p style={{fontSize:"80%"}}>   Daftar</p>
                               </StyledFormBtn> } 
                               
                                                        
                {isSubmitting && (
                    <Bars
                 
                    color= {colors.red}
                    height={49}
                    width={100}
                    />                    
                )}    
                           </ButtonGroup>
                           <ExtraText >sudah punya akun?
                    <TextLink to="/login">login</TextLink>                    
                               </ExtraText> 
                        </Form>
                    )}
                </Formik>
                
            </StyledForm>
            </div>
            </StyledContainer>

            </div>
          
    )
}

export default Register;