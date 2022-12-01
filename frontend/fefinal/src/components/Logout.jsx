import {React,useState} from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import cancel from '../assets/cancel.svg'
import { motion ,AnimatePresence} from 'framer-motion';
import axios from '../auth/UserActions'
import { useNavigate } from 'react-router-dom';
import {MdOutlineCancel} from 'react-icons/md';

import coff from '../assets/logout/1/1.svg'
import coss from '../assets/logout/3/3.svg'
import conn from '../assets/logout/2/2.svg'

//coffee
import body from '../assets/logout/1/body.svg'

import femalehandright from '../assets/logout/1/femalehandright.svg'
import malehandright from '../assets/logout/1/malehandright.svg'
import malehandleft from '../assets/logout/1/malehandleft.svg'

import malehead from '../assets/logout/1/malehead.svg'
import femalehead from '../assets/logout/1/femalehead.svg'

//alcohol
//person 1
import bodyp1 from '../assets/logout/2/person1/body.svg'
import handleftp1 from '../assets/logout/2/person1/handleft.svg'
import handrightp1 from '../assets/logout/2/person1/handright.svg'
import headp1 from '../assets/logout/2/person1/head.svg'
//person 2
import bodyp2 from '../assets/logout/2/person2/body.svg'
import handleftp2 from '../assets/logout/2/person2/handleft.svg'
import handrightp2 from '../assets/logout/2/person2/handright.svg'
import headp2 from '../assets/logout/2/person2/head.svg'
//person 3
import bodyp3 from '../assets/logout/2/person3/body.svg'
import handleftp3 from '../assets/logout/2/person3/handleft.svg'
import handrightp3 from '../assets/logout/2/person3/handright.svg'
import headp3 from '../assets/logout/2/person3/head.svg'

//person 4
import bodyp4 from '../assets/logout/2/person4/body.svg'
import hand4 from '../assets/logout/2/person4/hand.svg'
import headp4 from '../assets/logout/2/person4/head.svg'

//pohon
import bodypo from '../assets/logout/3/body.svg'
import handpo from '../assets/logout/3/hand.svg'
import handpo2 from '../assets/logout/3/hand2.svg'
import headppo from '../assets/logout/3/head.svg'





const Logout = () => {
  const navigate = useNavigate();
  const {currentColor,setloggg,cookies,akunNama} = useStateContext();

  var a=false;
  var b=false;


  let width = window.innerWidth;

  {
      if(width > 800){
      a=true;
  }

  if(width < 400){
    b=true;
}
}


  return (
    <motion.div     
    className='bg-half-transparent 
    w-screen h-screen fixed nav-item top-0 right-0 p-0 md:p-10 '
    animate={{ opacity:1 }} initial={{opacity:0}} exit={{opacity:0}}  transition={{duration:0.7}}
    >
      {a ? 
      <motion.div className='md:w-760 h-auto dark:text-gray-200  
      bg-white dark:bg-main-dark-bg rounded-xl m-auto'
      animate={{ opacity:1 }} initial={{opacity:0}} exit={{opacity:0}}  transition={{duration:0.7}}
      >
      <div>
            <MdOutlineCancel  className='w-8 h-8 -m-5 -mt-2 dark:text-white' 
        onClick={() => {setloggg(false)}}/>
        </div> 
       <form> 
      {/* awal edit form*/}
      <div className='m-3 '>
      
      <div className='p-3 ' style={{width:"100%",minHeight:"25vh"}}>
        <div className=' bg-slate-200 h-full rounded-xl font-bold p-4 dark:bg-black ' 
         style={{width:"70vh",margin:"auto",height:"70vh"}}
        >

          
            <img src={coss} style={{width:"80vh",position:"absolute",left:"0vh",top:"0vh",pointerEvents:"none"}}/>
            


          <div style={{pointerEvents:"none"}}>
          <motion.img  src={malehandright} style={{width:"14vh",position:"absolute",top:"36.7vh",right:"106vh",pointerEvents:"none"}}
          animate={{ rotate:[-3,2,-7]}} 
          transition={{yoyo:Infinity,duration:6}} 
          />        
          
          <img src={body} style={{width:"40vh",position:"absolute",opacity:"1",top:"20vh",right:"81.5vh",pointerEvents:"none"}}/>

          <motion.img  src={malehandleft} style={{width:"5vh",position:"absolute",top:"26vh",right:"113vh",pointerEvents:"none"}}
          animate={{ rotate:[0,1,5,3,4,3,4,2,3,1]}} 
          transition={{yoyo:Infinity,duration:15}} 
          />

          <motion.img  src={femalehandright} style={{width:"18vh",position:"absolute",top:"33vh",right:"89vh",pointerEvents:"none"}}
          animate={{ rotate:[-2,2,1,2,5,3] }}
          transition={{yoyo:Infinity,duration:6}} 
          />

          <motion.img  src={malehead} style={{width:"4vh",position:"absolute",top:"32vh",right:"111.5vh",pointerEvents:"none"}}
          animate={{ rotate:[-3,-2,-3,1,3,2,3,1]}} 
          transition={{yoyo:Infinity,duration:10}} 
          />

          <motion.img  src={femalehead} style={{width:"4vh",position:"absolute",top:"32vh",right:"94.3vh",pointerEvents:"none"}}
          animate={{ rotate:[-5,-4,-7,-2,1,2,3,1]}} 
          transition={{yoyo:Infinity,duration:10}} 
          />
          
          </div>

          <div style={{pointerEvents:"none"}}>

          <motion.img  src={handrightp1} style={{width:"14vh",position:"absolute",top:"44.4vh",right:"71.1vh",pointerEvents:"none"}}
          animate={{ rotate:[-2,-5,4,3,-1]}} 
          transition={{yoyo:Infinity,duration:8}} 
          />        
          
          <img src={bodyp1} style={{width:"40vh",position:"absolute",opacity:"1",top:"32vh",right:"50vh",pointerEvents:"none"}}/>

          <motion.img  src={handleftp1} style={{width:"11vh",position:"absolute",top:"44.4vh",right:"77.4vh",pointerEvents:"none"}}
          animate={{ rotate:[3,4,3,4,2,3,1]}} 
          transition={{yoyo:Infinity,duration:15}} 
          />    


          <motion.img  src={headp1} style={{width:"5vh",position:"absolute",top:"39.9vh",right:"76vh",pointerEvents:"none"}}
          animate={{ rotate:[-4,6,1]}} 
          transition={{yoyo:Infinity,duration:10}} 
          />
          
          </div>

          <div style={{pointerEvents:"none"}}>

          <motion.img  src={handrightp2} style={{width:"7vh",position:"absolute",top:"36.3vh",right:"57.9vh",pointerEvents:"none"}}
          animate={{ rotate:[-3,-2,-3,2,3,1]}} 
          transition={{yoyo:Infinity,duration:10}} 
          />        
          
          <img src={bodyp2} style={{width:"10vh",position:"absolute",
          opacity:"1",top:"40vh",right:"60vh"}}/>

          <motion.img  src={handleftp2} style={{width:"8vh",position:"absolute",top:"35.5vh",right:"63.2vh",pointerEvents:"none"}}
          animate={{ rotate:[-5,-3,-5,4,2,3,1]}} 
          transition={{yoyo:Infinity,duration:10}} 
          />    


          <motion.img  src={headp2} style={{width:"4vh",position:"absolute",top:"40.4vh",right:"62vh",pointerEvents:"none"}}
          animate={{ rotate:[-7,6,1]}} 
          transition={{yoyo:Infinity,duration:7}} 
          />
          
          </div>

          <div style={{pointerEvents:"none"}}>

          <motion.img  src={handpo} style={{width:"28vh",position:"absolute",top:"24vh",right:"115vh",pointerEvents:"none"}}
          animate={{ rotate:[-5,4,-6,-3,-4]}} 
          transition={{yoyo:Infinity,duration:8 }} 
          />        

          <img src={bodypo} style={{width:"15vh",position:"absolute",
          opacity:"1",top:"31vh",right:"123vh"}}/>

          <motion.img  src={handpo2} style={{width:"10vh",position:"absolute",top:"18vh",right:"130vh",pointerEvents:"none"}}
          animate={{ rotate:[-2,1,-3,4]}} 
          transition={{yoyo:Infinity,duration:8}} 
          />    


          <motion.img  src={headppo} style={{width:"8vh",position:"absolute",top:"27vh",right:"126.2vh",pointerEvents:"none"}}
          animate={{ rotate:[-5,6,1]}} 
          transition={{yoyo:Infinity,duration:10}} 
          />

          </div>

          
          <div style={{pointerEvents:"none"}}>

          <motion.img  src={hand4} style={{width:"17vh",position:"absolute",top:"43vh",right:"80vh",pointerEvents:"none"}}
          animate={{ rotate:[-4,-5,-6,-3,2,1,3,1]}} 
          transition={{yoyo:Infinity,duration:10}} 
          />        
          
          <img src={bodyp4} style={{width:"39vh",position:"absolute",
          opacity:"1",top:"38.5vh",right:"68vh"}}/>

          <motion.img  src={headp4} style={{width:"5vh",position:"absolute",top:"41vh",right:"84.1vh",pointerEvents:"none"}}
          animate={{ rotate:[-5,2,3]}} 
          transition={{yoyo:Infinity,duration:6}} 
          />
          
          </div>

          <div style={{pointerEvents:"none"}}>

          <motion.img  src={handleftp3} style={{width:"17vh",position:"absolute",top:"46.7vh",right:"47vh",pointerEvents:"none"}}
          animate={{ rotate:[-5,6,-2.4,2,-5,3]}} 
          transition={{yoyo:Infinity,duration:10}} 
          />        
          
          <img src={bodyp3} style={{width:"18vh",position:"absolute",
          opacity:"1",top:"41vh",right:"47vh"}}/>

          <motion.img  src={handrightp3} style={{width:"7vh",position:"absolute",top:"37.5vh",right:"49vh",pointerEvents:"none"}}
          animate={{ rotate:[-4,2,-3,1,-4]}} 
          transition={{yoyo:Infinity,duration:10}} 
          />    


          <motion.img  src={headp3} style={{width:"5vh",position:"absolute",top:"42.5vh",right:"53vh",pointerEvents:"none"}}
          animate={{ rotate:[-2,5,-3]}} 
          transition={{yoyo:Infinity,duration:10}} 
          />
          
          </div>

          <img src={conn} style={{width:"40vh",position:"absolute",top:"34vh",right:"50vh",pointerEvents:"none"}}/>
          <h1 className='mt-14 ml-62 text-4xl'>ingin pergi?</h1>
           </div>           
      </div>
      <div className='w-full p-1' >
          <button 
          type='button'
          className='bg-slate-200 rounded-xl p-4 w-full  font-bold'
          style={{backgroundColor:currentColor}}
          onClick={() => {
            console.log(cookies);

            akunNama=''
            cookies.remove('token', { path: '/' });
            cookies.remove('tokenref',{ path: '/' });
            cookies.remove('uid', { path: '/' });
            cookies.remove('class', { path: '/' });
            cookies.remove('role', { path: '/' });
            cookies.remove('name', { path: '/' });

            navigate('/')
            console.log(cookies);
            setloggg(false)
          }}
          > 
          logout
          </button>
      </div>
      </div>
      </form>
      {/* akhir edit form*/}
      
                  
      </motion.div>:
      <motion.div className='w-screen md:w-760 h-auto dark:text-gray-200  
      bg-white dark:bg-main-dark-bg rounded-xl m-auto'
      animate={{ opacity:1 }} initial={{opacity:0}} exit={{opacity:0}}  transition={{duration:0.7}}
      >
      <div>
        <img src={cancel}  className='w-5 h-5 -m-5 md:-mt-1' style={{margin:a?'':"0vh"}} 
        onClick={() => {setloggg(false)}}/>
        </div> 
       <form> 
      {/* awal edit form*/}
      <div className='m-3 '>
      
      <div className='p-3 ' style={{width:"100%",minHeight:"25vh"}}>
        <div className=' bg-slate-200 h-full rounded-xl font-bold p-4 dark:bg-black ' 
         style={{width:a ? "70vh": '',margin:"auto",height:"70vh"}}
        >

          
        <img src={coss} style={{width:"80vh",position:"absolute",left:"0vh",top:"0vh",pointerEvents:"none"}}/>
          

          <h1 style={{marginLeft: b ? "25vh":'40vh'}}>ingin log out ?</h1>

          <img src={conn} style={{width:"40vh",position:"absolute",top:"34vh",right:"50vh",pointerEvents:"none"}}/>
          
           </div>           
      </div>
      <div className='w-full p-1' >
          <button 
          type='button'
          className='bg-slate-200 rounded-xl p-4 w-full  font-bold'
          style={{backgroundColor:currentColor}}
          onClick={() => {
            console.log(cookies);
            
            cookies.remove('token', { path: '/' });
            cookies.remove('tokenref',{ path: '/' });
            cookies.remove('uid', { path: '/' });
            cookies.remove('class', { path: '/' });
            cookies.remove('role', { path: '/' });
            cookies.remove('name', { path: '/' });

            navigate('/')
            console.log(cookies);
            setloggg(false)
          }}
          > 
          logout
          </button>
      </div>
      </div>
      </form>
      {/* akhir edit form*/}
      
                  
      </motion.div>
      }
      
      
    </motion.div>
  )
}

export default Logout