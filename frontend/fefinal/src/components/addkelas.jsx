import {React,useState} from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import cancel from '../assets/cancel.svg'
import { motion ,AnimatePresence} from 'framer-motion';
import axios from '../auth/UserActions'
import {MdOutlineCancel} from 'react-icons/md';



const Addkelas = () => {
    const {currentColor,setkelasAdd,formNama,tokenref,token,setkelasu,getKelas} = useStateContext();
    const [class_name, setinput] = useState()
    const [description, setdesk] = useState()

    var x = {class_name,description};

    

  console.log(class_name)
  console.log(description)
  console.log(x)

    const submit = (e) => {
      e.preventDefault();
      console.log(e);
    }

   
  const buatkelas = async() => {
      const response = await axios.post('/classes',
      x,
      {headers:{
        Authorization: `Bearer ${tokenref}`
      }
      }
      );
      if(response.statusText === 'Created'){
        setkelasAdd(false)
        console.log('success')
      }else{
        console.log('failed')
      }
      getKelas();

    
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
        <motion.button  onClick={() => {setkelasAdd(false)}} className='text-xl rounded-full dark:text-white  mt-4 block' 
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
        <div className='flex'>
          <div className='md:flex' style={{height:"3.5vh",width:"75%"}}>
          <h1 className='mr-3'>nama kelas :</h1>          
          <input type='text' placeholder={formNama}
          onInput={event=>setinput(event.target.value)}
          className='rounded-xl pl-2 dark:text-black'/>
          </div>
        
          </div>
          {/* deskripsi jadwal*/}

          <div className='md:mt-3 mt-8'>
          <h1 className='mr-3 font-extrabold '>Deskripsi :</h1> 
          <textarea placeholder='masukan deskripsi' className='w-full rounded-xl p-2 dark:text-black' style={{height:"10vh"}}
          onInput={event=>setdesk(event.target.value)}
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

export default Addkelas