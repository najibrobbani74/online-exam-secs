import {React,useState,useEffect} from 'react';

import { useStateContext } from '../contexts/ContextProvider';
import { AnimatePresence,motion } from "framer-motion";

import cancel from '../assets/cancel.svg'
import cancel2 from '../assets/cancel2.svg'
import {MdOutlineCancel} from 'react-icons/md';

import axios from '../auth/UserActions'
import Addform from './addform';


const Kelasform = () => {
  const {currentColor,setKelas,setForm,kelasNama,kelasDesk,kelasId,addForm,tokenref,addformid,getKelas} = useStateContext();

  const [class_name, setclass_name] = useState()
  const [description, setdescription] = useState()
  const [formu, setformu] = useState([]);

  

  var x = {class_name,description};



  useEffect(() => {
    getForm();
}, []);

const getForm = async() => {
  const response = await axios.get('/forms/'+kelasId,
  {headers:{
      Authorization: `Bearer ${tokenref}`
  }
});

  

  setformu(response.data);
  console.log(response.data)
  console.log(formu)
}

const delForm = async(a) => {
  console.log(a)
  const response = await axios.delete('/forms/'+a,
  {headers:{
      Authorization: `Bearer ${tokenref}`
  }
  
});
console.log(response)
getForm();

}

const updateKelas = async() => {

  if(class_name===''){
    class_name=kelasNama
   }
   if(description===''){
    description = kelasDesk
   }
   
        await axios.put('/classes/'+kelasId,
        x,
    {
      headers:{
        Authorization: `Bearer ${tokenref}`
    }
    }).then((response) => {
    console.log(response.status);
    console.log(response)

                 console.log(response);
                 console.log(response.data);
;

            if(response.statusText === "OK"){                                         
                 console.log('success');
                 getKelas();
                 setKelas(null)
            }
            else{
                console.log("failed");
            }
        }).catch(
            (err) => {
                console.log(err)
               
            })


}



{addformid && getForm()}

  

  return (
    
    <div className='bg-half-transparent 
    w-screen h-screen fixed nav-item top-0 right-0 p-0 md:p-10 '>
      
      <motion.div className='w-full h-full dark:text-gray-200  
      bg-white dark:bg-main-dark-bg rounded-xl'
      animate={{ y:0 }} initial={{y:-700}} exit={{y:-700}}  transition={{duration:0.5}}
      
      >
        
        <motion.button onClick={() => setKelas(null)}
        className='text-xl rounded-full dark:text-white  mt-4 block'
        whileHover={{
          scale:1.1
        }}
        >
        {/* <img src={cancel2} className='w-5 h-5 absolute md:top-8 md:left-8 rounded-xl' 
        style={{backgroundColor:currentColor}}
        /> */}
        <MdOutlineCancel/>
        </motion.button>
       <form> 
      {/* awal edit kelas*/}
      <div className='p-3' style={{width:"100%",minHeight:"25vh"}}>
        <div className=' bg-slate-200 w-full h-full rounded-xl font-bold p-4 dark:bg-black'>
        <div className='flex'>
          <div className='md:flex' style={{height:"3.5vh",width:"70%"}}>
          <h1 className='mr-3'>nama kelas :</h1>          
          <input type='text' placeholder={kelasNama} className='rounded-xl pl-2 dark:bg-secondary-dark-bg'
           onInput={event=>setclass_name(event.target.value)}
          />
          </div>
          <div className='text-center '>
          <h1>invite link :</h1><h1>{kelasId}</h1>
          </div>
          </div>
          <div className='mt-3'>
          <h1 className='mr-3 font-extrabold '>Deskripsi :</h1> 
          <textarea placeholder={kelasDesk} className='w-full rounded-xl p-2 dark:bg-secondary-dark-bg' style={{height:"10vh"}}
          onInput={event=>setdescription(event.target.value)}
          >
          </textarea>         
          </div>
           </div>           
      </div>
      <div className='w-full flex justify-center pl-3 pr-3' >
      <button 
      type='button'
      onClick={updateKelas}
      className='bg-slate-200 rounded-xl p-4 w-full dark:bg-black font-extrabold'
      > 
      submit
      </button>
      </div>
      </form>
      {/* akhir edit kelas*/}
      
     
      {/*awal form*/}
      <div className='p-2'>
        <p className='font-extrabold ml-5'>Form yang telah di upload :</p>
      <div className='bg-slate-200 h-56 md:h-72  pl-2 pr-2 pt-1 rounded-xl overflow-auto dark:bg-secondary-dark-bg
      overflow-x-hidden
      '>
        {/* daftar form */}


        {
                      formu.map((item,index) => (

                        <motion.div className="flex bg-slate-50 rounded-2xl dark:bg-black w-full mb-1 " 
                              style={{height:"10vh",
                              padding:"3vh"
                              
                                }}
                                animate={{ x:[-1700,0] }} initial={{x: -1700}} exit={{x:-1700}}  
                                whileHover={{
                                  scale:1.05
                                }}
                                >

                                <p className='dark:text-white font-extrabold' style={{width:"80%"}}>{item.name}</p>
                                
                                <button className='dark:text-white 
                                pb-5 p-1 rounded-xl w-20 font-extrabold' style={{backgroundColor: currentColor}}
                                onClick={() => {setForm(item.id)}}
                                >edit</button>
                                <button className='dark:text-white 
                                bg-red-600 pb-5 p-1 rounded-xl w-20 ml-2 font-extrabold'
                                onClick={()=> delForm(item.id)}
                                >delete</button>
                                
                        </motion.div>

                      ))      
                }


        {/* daftar form */}
      </div>
      <button 
      onClick={() => {addForm(kelasId)}}
      className='bg-slate-200 rounded-xl p-2 w-52 dark:bg-black mt-3 font-extrabold'
      > 
      add form 
      </button>
      </div>
       {/*akhir form  */}
                  
      </motion.div>
      
    </div>
  )
}

export default Kelasform;