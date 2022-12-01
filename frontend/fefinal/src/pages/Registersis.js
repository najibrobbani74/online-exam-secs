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

import {BsLadder, BsPersonSquare} from 'react-icons/bs';
import {MdAlternateEmail} from 'react-icons/md';
import {BsFileEarmarkLock,BsFileEarmarkLock2Fill} from 'react-icons/bs';
import {SiGoogleclassroom} from 'react-icons/si';


import { Navigate, useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';



//1
import body from '../assets/sisreg/1/body.svg';
import handl1 from '../assets/sisreg/1/handl1.svg';
import handl2 from '../assets/sisreg/1/handl2.svg';
import pagers2 from '../assets/sisreg/1/pagers2.svg';
import head from '../assets/sisreg/1/head.svg';


//2
import body2 from '../assets/sisreg/2/body.svg';
import paper from '../assets/sisreg/2/paper.svg';
import hand2 from '../assets/sisreg/2/hand.svg';
import head2 from '../assets/sisreg/2/head.svg';
import penutup from '../assets/sisreg/2/penutup.svg';

//reg

import axios from '../auth/UserActions'
import { useStateContext } from '../contexts/ContextProvider.js';

const Registersis = () => {
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
        console.log(response.data)
        console.log(response.data.id_class)
                if(response.statusText === "Created"){
                    
                    alert("berhasil membuat akun" );
                    navigate('/login');
                    setActiveMenu((prevActiveMenu) =>!prevActiveMenu )
                   

                    console.log('succes')
                    console.log(response);
                }else{
                    console.log("failed");
                }
                setSubmitting(false);
            }).catch(
                (err) => {console.log(err)
                if(err.response.data.message === 'Email already exist'){
              
                setFieldError('email','email telah di pakai')                
                setSubmitting(false);
                }else if(err.response.data.message === 'Internal server error'){
              
                    setFieldError('id_class','kelas tidak ada,atau terjadi error pada server')                
                    setSubmitting(false);
                    }
                    else if(err.response.data.message === 'Class not found'){
              
                        setFieldError('id_class','kelas tidak ada')                
                        setSubmitting(false);
                        }
            
            })
       
    }

    return( 
        <div className='bg-half-transparent 
        w-screen h-screen fixed nav-item top-0 right-0 p-0 md:p-10 '>
        <StyledContainer 
        style={{width:"100%",height:"100%",position:"absolute",top:"0%",zIndex:"1001"}}
        className='w-screen fixed nav-item top-0 right-0'
        >

            {/* animasi 1 */}
            <div style={{left:"-7vh",position:"absolute",zIndex:'-1',top:"-30vh",opacity: b? 0:1}}>
            <motion.img 
                    style={{backgroundColor:null
                    ,width:"90vh",pointerEvents:"none"}}
                    animate={{ rotate:[-52,-52,-52]}} 
                    src={body}
                    />
                    </div>



            <motion.div style={{left:"16vh",position:"absolute",zIndex:'-1',top:"-25vh",
            opacity: b? 0:1,pointerEvents:"none",zIndex:"2",
                        }}
                        animate={{ rotate:[-52,-48,-52]}} 
                        transition={{
                            yoyo:Infinity,
                            duration:10
                        }}
                        >
            <motion.img 
                    style={{backgroundColor:null
                    ,width:"15vh",pointerEvents:"none",}}
                    
                    
                    src={handl2}
                    />
            </motion.div>

            <motion.div style={{left:"7vh",position:"absolute",zIndex:'-1',top:"-11vh",
            opacity: b? 0:1,pointerEvents:"none",zIndex:"2",
                        }}
                        animate={{ rotate:[-72,-68,-72]}} 
                        transition={{
                            yoyo:Infinity,
                            duration:10
                        }}
                        >
            <motion.img 
                    style={{backgroundColor:null
                    ,width:"30vh",pointerEvents:"none",}}
                    
                    
                    src={pagers2}
                    />
            </motion.div>

            
            <motion.div style={{left:"-4vh",position:"absolute",zIndex:'-1',top:"-17vh",
            opacity: b? 0:1,pointerEvents:"none",zIndex:"2",
                        }}
                        animate={{ rotate:[-52,-48,-52]}} 
                        transition={{
                            yoyo:Infinity,
                            duration:10
                        }}
                        >
            <motion.img 
                    style={{backgroundColor:null
                    ,width:"20vh",pointerEvents:"none",}}
                    
                    
                    src={handl1}
                    />
            </motion.div>

            <motion.div style={{left:"-1vh",position:"absolute",zIndex:'-1',top:"0vh",
            opacity: b? 0:1,pointerEvents:"none",zIndex:"2",
                        }}
                        animate={{ rotate:[-52,-48,-52,-53,-47,-43,-47,-45,-50]}} 
                        transition={{
                            yoyo:Infinity,
                            duration:18
                        }}
                        >
            <motion.img 
                    style={{backgroundColor:null
                    ,width:"20vh",pointerEvents:"none",}}
                    
                    
                    src={head}
                    />
            </motion.div>

            

           

             {/* animasi 2 */}

                    <div style={{right:"22vh",position:"absolute",zIndex:'-1',bottom:"-13vh",opacity: b? 0:1,pointerEvents:"none"}}>
                    <motion.img 
                            style={{backgroundColor:null
                            ,width:"40vh",pointerEvents:"none"}}
                            animate={{ rotate:[52,52,52]}} 
                            src={body2}
                            />
                    </div>  

                    <div style={{right:"28vh",position:"absolute",zIndex:'2',bottom:"-20vh",opacity: b? 0:1,pointerEvents:"none"}}>
            <motion.img 
                    style={{backgroundColor:null
                    ,width:"30vh",pointerEvents:"none"}}
                    animate={{ rotate:[52,52,52]}} 
                    src={penutup}
                    />
                    </div>

                    <div style={{right:"-20vh",position:"absolute",zIndex:'1',bottom:"16vh",opacity: b? 0:1,pointerEvents:"none"}}>
                            <motion.img 
                            style={{backgroundColor:null
                            ,width:"80vh",pointerEvents:"none"}}
                            animate={{ rotate:[38,50,42,46,42,40,46,49,48,52]}} 
                            transition={{
                                yoyo:Infinity,
                                duration:25
                            }}
                            src={paper}
                            />
                    </div>

                    <div style={{right:"-10vh",position:"absolute",zIndex:'3',bottom:"19vh",opacity: b? 0:1,pointerEvents:"none"}}>
                    <motion.img 
                    style={{backgroundColor:null
                    ,width:"60vh",pointerEvents:"none"}}
                    animate={{ rotate:[49,49,46,49,48,52,50,42,46,42]}} 
                    transition={{
                        yoyo:Infinity,
                        duration:17
                    }}
                    src={hand2}
                    />
                    </div>

                    <div style={{right:"0vh",position:"absolute",zIndex:'-1',bottom:"28vh",
                    opacity: b? 0:1,pointerEvents:"none"}}>
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
                initialValues={{
                    role:"student",
                    id_class:"",
                    email:"",
                    name:"",
                    password:"",                    
                    confirm_password:"",
                    
                    
                }}
                validationSchema={
                    Yup.object({
                        role : Yup.string(),
                        id_class: Yup.string().required("tidak bisa kosong"),
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
                    values.role='student';
                    handleSubmit(values,setFieldError,setSubmitting)
                }}
                >
                    {({isSubmitting}) => (
                        <Form   onChange={() => {
                                    
                                     }
                        
                       }    >
                        

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
                           name="id_class" 
                           type="text" 
                           label="id class"
                           placeholder="id class"
                           icon={<SiGoogleclassroom/>}

                           onKeyDown={ 
                            (evt) => evt.key === 'e' && evt.preventDefault()
                           ||evt.key === '.' && evt.preventDefault() || evt.key === ',' && evt.preventDefault() }
                           i/>
                           
                            
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
                               {!isSubmitting && (<StyledFormBtn                              
                                 type='submit'
                                 className='w-full sm:bg-red-400'
                                 >
                               <p style={{fontSize:"80%"}}>   Daftar</p>
                               </StyledFormBtn> 
                               )} 
                               
                                                        
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

export default Registersis;