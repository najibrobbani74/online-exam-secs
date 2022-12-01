import{ React,useState,useEffect} from 'react'
import { useStateContext } from "../contexts/ContextProvider";
import {AnimatePresence, motion}from 'framer-motion'
import axios from '../auth/UserActions'
import pordos from '../data/avatartdosen.png'
import { Postname } from "../components/Styles";
import {AiFillDelete} from 'react-icons/ai'

const Post = () => {
    const {currentColor,setKelas,formNama,setpostadd,tokenref, addchange,setchange,setkelasu,kelasu,postu,setpostu} = useStateContext();

    


    useEffect(() => {
      getPost();
  }, []);

  const getPost = async() => {
    const response = await axios.get('/post',
    {headers:{
        Authorization: `Bearer ${tokenref}`
    }
});

    

    setpostu(response.data);
    console.log(postu)
}

const deletePost = async(a) => {
  const response = await axios.delete('/post/'+a,
  {headers:{
      Authorization: `Bearer ${tokenref}`
  }
});

  
  getPost();
  
  console.log(response)
}
    
  return (
    <div className="mt-20" >
      <motion.button className='ml-3 font-extrabold dark:text-white'
      style={{backgroundColor:currentColor,
        borderRadius:"1vh",padding:"2vh",
      }}
      animate={{ y:0 }} initial={{y:-350}} exit={{y:-350}}  
      onClick={() => setpostadd(true)}
      >
            add post
          </motion.button>
        <div className="flex lg:flex-nowrap justify-center p-15 w-full">

          
        
         <motion.div className="bg-white dark:text-black dark:bg-secondary-dark-bg 
         rounded-xl w-full lg:w-90  md:p-9 p-1 pt-0 m-3 bg-no-repeat bg-cover bg-center overflow-x-hidden overflow-y-auto"
         style={{minHeight:"50vh"}}  
         animate={{ y:0 }} initial={{y:-1700}} exit={{y:-1700}}      
         
          >            
       
              <AnimatePresence>
              {
                      postu.map((item,index) => (
                        <motion.div style={{paddingLeft:"8vh",paddingRight:"8vh",minHeight:"35vh"}} 
                        animate={{ x:[1700,0] }} initial={{x: 1700}} exit={{x:1700}}  

                          whileHover={{
                            scale:1.01
                          }}
                        >
                            {/* di sini post an */}
                            <div className="bg-slate-50 rounded-2xl dark:bg-black" 
                            style={{minHeight:"40vh",marginTop:"5%",
                            padding:"3vh"
                        }}>
                                
                                <div  className='flex'>
                            {/* disini foto profile */}    
                            <div className="flex w-full">
                            <img src={pordos} alt='' className='w-10 h-10 rounded-full'/>
                            {/* disini title */}
                            <Postname size={25} style={{fontWeight:"bolder"}} 
                            className='dark:text-white ml-1'>{item.email}</Postname>
                            </div>

                            <motion.button className='float-right dark:text-white rounded-xl p-2'
                            onClick={()=> deletePost(item.id)}
                            style={{backgroundColor:currentColor}}
                            whileHover={{
                              scale:1.1
                            }}
                            >
                              <AiFillDelete  className='w-7 h-7 rounded-xl' />
                            </motion.button>
                            </div>
                            {/* disini text dari guru */}                
                            <p className="font-semibold dark:text-white" style={{marginTop:"2vh"}}>
                            {item.message}
                            </p>
                            </div>
                            {/* di sini akhir post an */}
                           
                        </motion.div>
                      ))      
                }
                </AnimatePresence>


              

          
        </motion.div>
                
        </div>
    </div>
  )
}

export default Post