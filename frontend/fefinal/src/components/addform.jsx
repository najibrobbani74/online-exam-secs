import {React,useState} from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import cancel from '../assets/cancel.svg'
import { motion ,AnimatePresence} from 'framer-motion';
import axios from '../auth/UserActions'

import {MdOutlineCancel} from 'react-icons/md';



const Addform = () => {
    const {currentColor,setkelasAdd,tokenref,token,addformid,addForm} = useStateContext();
    const [form_name, setinput] = useState()
    const class_id =addformid;
    

    var x = {form_name,class_id};
    

  console.log(form_name)
  console.log(class_id)
  console.log(addformid)
  console.log(x)



   
  const buatkelas = async() => {
      const response = await axios.post('/forms',
      x,
      {headers:{
        Authorization: `Bearer ${tokenref}`
      }
      });

      console.log(response);
      if(response.statusText === 'Created'){
        addForm('')
      }else{
        console.log('error')
      }
      
      }
      

    
  



  return (
    <motion.div     
    className='bg-half-transparent 
    w-screen h-screen fixed nav-item top-0 right-0 p-0 md:p-10 '
    
    >
    
  
      
      <motion.div className='w-full h-full dark:text-gray-200  
      bg-white dark:bg-main-dark-bg rounded-xl overflow-auto'
      animate={{ x:0 }} initial={{x:1700}} exit={{x:1700}}  transition={{duration:1.0}}
      >
        <motion.button  onClick={() => {addForm('')}} className='text-xl rounded-full dark:text-white  mt-4 block' 
        whileHover={{
          scale:1.1
        }}
        
        >
       <MdOutlineCancel/>
        </motion.button>
       <form> 
      {/* awal edit form*/}
      <div className='m-10'>
      <div className='p-3 ' style={{width:"100%",minHeight:"25vh"}}>
        <div className=' bg-slate-200 w-full h-full rounded-xl font-bold p-4 dark:bg-black'>
            {/* nama form id class*/}
        <div className='flex'>
          <div className='md:flex' style={{height:"3.5vh",width:"75%"}}>
          <h1 className='mr-3'>nama form :</h1>          
          <input type='text' placeholder=''
          onInput={event=>setinput(event.target.value)}
          className='rounded-xl pl-2 dark:text-black'/>

          {/* <input type='file' placeholder=''
          onInput={event=>setinput(event.target.value)}
          className='rounded-xl pl-2'/> */}
          </div>
          <div className='text-center '>
          <h1>invite link :</h1><h1>{addformid}</h1>
          </div>
          </div>
       

       
          
           </div>           
      </div>
      <div className='w-full flex justify-center pl-3 pr-3' >
      <button 
      type='button'
      className='bg-slate-200 rounded-xl p-4 w-full font-bold'
      style={{backgroundColor:currentColor}}
      onClick={buatkelas}
      > 
      submit
      </button>
      </div>
      </div>
      </form>
      {/* akhir edit form*/}
      
                  
      </motion.div>
      
    </motion.div>
  )
}

export default Addform