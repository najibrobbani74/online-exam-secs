import {React,useState} from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import cancel from '../assets/cancel.svg'
import { motion ,AnimatePresence} from 'framer-motion';
import axios from '../auth/UserActions'
import {MdOutlineCancel} from 'react-icons/md';



const Addpost = () => {
    const {currentColor,setpostadd,formNama,tokenref,token,setkelasu,getPost} = useStateContext();
    const [email, setemail] = useState()
    const [message, setmessage] = useState()
    const [class_id, setclass_id] = useState()
   
  const buatpost = async() => {
      const response = await axios.post('/post',
      {class_id,email,message},
      {headers:{
        Authorization: `Bearer ${tokenref}`
      }
      }
      );

      console.log(response)
      if(response.statusText === 'Created'){
        setpostadd(false)
        console.log('success')
      }else{
        console.log('failed')
      }
      getPost();

    
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
        <motion.button  onClick={() => {setpostadd(false)}} className='text-xl rounded-full dark:text-white  mt-4 block' 
        whileHover={{
          scale:1.1
        }}>
        <MdOutlineCancel/>
        </motion.button>
        
       <form> 
      {/* awal edit form*/}
      <div className='m-10'>
      <div className='p-3 ' style={{width:"100%",minHeight:"25vh"}}>
        <div className=' bg-slate-200 w-full h-full rounded-xl font-bold p-4 dark:bg-black'>
            {/* nama form id class*/}
        <div className=''>
          <div className='md:flex' style={{height:"3.5vh",width:"75%"}}>
          <h1 className='mr-3'>email :</h1>          
          <input type='text' 
          onInput={event=>setemail(event.target.value)}
          className='rounded-xl pl-2 dark:text-black'/>
          </div>
          <div className='mt-4' style={{height:"3.5vh"}}>
          <h1 className='mr-3'>class id :</h1>          
          <input type='text' 
          onInput={event=>setclass_id(event.target.value)}
          placeholder="ke class mana post ini ingin di upload"
          className='rounded-xl pl-2 w-full dark:text-black'/>
          </div>
        
          </div>
          {/* deskripsi jadwal*/}

          <div className='md:mt-7 mt-8'>
          <h1 className='mr-3 font-extrabold '>message :</h1> 
          <textarea placeholder='masukan deskripsi' className='w-full rounded-xl p-2 dark:text-black' style={{height:"10vh"}}
          onInput={event=>setmessage(event.target.value)}
          >
          </textarea>  
         
      
            </div>
            
          
           </div>           
      </div>
      <div className='w-full flex justify-center pl-3 pr-3' >
      <button 
      type='button'
      className='bg-slate-200 rounded-xl p-4 w-full font-bold'
      style={{backgroundColor:currentColor}}
      onClick={buatpost}
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

export default Addpost