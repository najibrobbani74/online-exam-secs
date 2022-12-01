import{ React,useState,useEffect} from 'react'
import { useStateContext } from "../contexts/ContextProvider";
import {AnimatePresence, motion}from 'framer-motion'
import axios from '../auth/UserActions'

const Kelas = () => {
    const {currentColor,setKelas,formNama,setkelasAdd,tokenref, addchange,setchange,setkelasu,kelasu} = useStateContext();

    


    useEffect(() => {
      getKelas();
  }, []);

  const getKelas = async() => {
    const response = await axios.get('/classes',
    {headers:{
        Authorization: `Bearer ${tokenref}`
    }
});

    

    setkelasu(response.data);
    console.log(kelasu)
}

const deleteKelas = async(a) => {
  const response = await axios.delete('/classes/'+a,
  {headers:{
      Authorization: `Bearer ${tokenref}`
  }
});

  
  getKelas();
  
  console.log(response)
}
    
  return (
    <div className="mt-20" >
      <motion.button className='ml-3 font-extrabold dark:text-white'
      style={{backgroundColor:currentColor,
        borderRadius:"1vh",padding:"2vh",
      }}
      animate={{ y:0 }} initial={{y:-350}} exit={{y:-350}}  
      onClick={() => setkelasAdd(true)}
      >
            add kelas
          </motion.button>
        <div className="flex lg:flex-nowrap justify-center p-15 w-full">

          
        
         <motion.div className="bg-white dark:text-black dark:bg-secondary-dark-bg 
         rounded-xl w-full lg:w-90  md:p-9 p-1 pt-0 m-3 bg-no-repeat bg-cover bg-center overflow-x-hidden"
         style={{minHeight:"50vh"}}  
         animate={{ y:0 }} initial={{y:-1700}} exit={{y:-1700}}      
         
          >            
       
              <AnimatePresence>
              {
                      kelasu.map((item,index) => (
                        <motion.div className="flex bg-slate-50 rounded-2xl dark:bg-black w-full mt-1" 
                          style={{height:"10vh",
                          padding:"3vh"}}

                          animate={{ x:[1700,0] }} initial={{x: 1700}} exit={{x:1700}}  

                          whileHover={{
                            scale:1.05
                          }}
                          >

                      <p className='dark:text-white font-extrabold' style={{width:"80%",color:currentColor}}>{item.name}</p>
                      <p className='dark:text-white font-extrabold' style={{width:"80%",color:currentColor}}>{item.id}</p>
                      
                      <button className='dark:text-white 
                      pb-5 p-1 rounded-xl w-20 font-extrabold' style={{backgroundColor: currentColor}}
                      onClick={() => {setKelas(item.name,item.description,item.id,item.id_forms)}}
                      >edit</button>
                      <button className='dark:text-white 
                      bg-red-600 pb-5 p-1 rounded-xl w-20 ml-2 font-extrabold'
                      onClick={() => {deleteKelas(item.id)}}
                      >delete</button>
                      
              </motion.div>
                      ))      
                }
                </AnimatePresence>


              

          
        </motion.div>
                
        </div>
    </div>
  )
}

export default Kelas