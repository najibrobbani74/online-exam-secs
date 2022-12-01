import { useState,useEffect } from "react";
import Pro from './../data/avatar.jpg'
import Pro2 from './../data/avatar2.jpg'
import Pro3 from './../data/avatar3.png'
import Pro4 from './../data/avatar4.jpg'
import Pro5 from './../data/avatar5.jpeg'
import Pro6 from './../data/avatar6.jfif'
import Pro7 from './../data/avatar7.jpg'
import Pro8 from './../data/avatar8.jpg'

import pordos from '../data/avatartdosen.png'

import {FaArrowRight,FaArrowLeft} from 'react-icons/fa'
import { motion } from "framer-motion";
import { Postname } from "../components/Styles";
import { useStateContext } from "../contexts/ContextProvider";
import axios from '../auth/UserActions'
import { setTime } from "@syncfusion/ej2-react-schedule";
import Cookies from 'universal-cookie';




const Dashboard =  () => {
   
    const{currentColor ,setujianSoal,setUjian,akunNama,akunRole,akunClass,tokenref,uid,setpengguna} = useStateContext();
    console.log(akunClass)


    const [posisi, setposisi] = useState(0);
    const [klikp, setklikp] = useState(0);
    const [postemail,setpostemail] = useState([]);
    const [posttext,setposttext] = useState([]);
   
    const [ulangan, setUlangan] = useState([]);
    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);
    const [soal, setsoal] = useState([])

    
   

    
    useEffect(() => {
        getData();
        getUlangan();
        getUser();
        
    }, []);


    const getData = async() => {
        const response = await axios.get('/post/class/'+akunClass);

        

        setData(response.data);
        console.log(response.data)
    }

    const getUlangan = async() => {
        const response = await axios.get('/forms/'+akunClass,
        {headers:{
            Authorization: `Bearer ${tokenref}`
        }
    });

        

        setUlangan(response.data);
        console.log(response.data[2].questions)
        console.log(ulangan)
    }

    const getUser = async() => {
        const response = await axios.get('/users/'+uid,
        {headers:{
            Authorization: `Bearer ${tokenref}`
        }
    });

        

        setUser(response.data);
        setpengguna(response.data[0].name);
        console.log(response.data);
        
       
    }

    

    
    
    const read = async () => {
        try {
            axios.get('/post').then(response => {

                
                for (let index = 0; index < response.data.length; ++index) { 
                
                    
                    
                    if(response.data[index].id_class === akunClass){

                        postemail[index] = response.data[index].email;
                        posttext[index] = response.data[index].message;
                    }
                    
                
   
                }                
                
                
            });

        } catch (error) {
            console.log(error.response)
        }
    }

    console.log(user)
    console.log(soal)
    console.log(data);
    console.log(postemail);
    console.log(ulangan);
    
    //console.log()
    
    return (
        
        <div className="mt-10" >

            
      <div className="flex lg:flex-nowrap justify-center p-5 w-full">
        <button onClick={() => {
            if(klikp < ulangan.length - 1){
            setposisi(posisi - 455);
            setklikp(klikp + 1);
        }
        }}
        
        ><FaArrowLeft className="dark:text-white"/></button>
        
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
        h-64 rounded-xl w-30 lg:w-90  pt-9 m-3 bg-hero-pattern 
        bg-no-repeat bg-cover bg-center overflow-hidden flex"
        
        style={{width:"120vh",maxWidth:"120vh",height:"50vh"}}>
                <div style={{paddingLeft:"1vh"}} className='flex'>
               
                {
                    ulangan.map((item,index) => (
                        <motion.div  
                whileHover={{y:-6}}
                whileInView={{y:0,opacity:1}}
                animate={{x:posisi,opacity:0}}
                
                
                
                className="bg-slate-50 h-44 rounded-xl
                 w-30 lg:w-60 p-6 m-3 ml-12 dark:bg-black"
                 style={{width:"50vh",minHeight:"30vh"}}
                 >
                    
                    <div className="flex">
                    <img src={pordos} alt='' className='rounded-full w-20 h-20 '/>                                        
                    <div className="w-13 h-14 inline-block pl-2">
                    <div>
                    <h1 className="text-black-450 text-40 font-extrabold float-left" style={{
                        fontSize:"4vh",color:currentColor
                    }}>{item.name}</h1>                                        
                    </div>
                    <h1 className="text-black-450 text-40 font-extrabold float-left"
                    style={{color:currentColor}}
                    >{item.id_class}</h1>                    
                    </div>
                    </div>
                    <div className="w-full flex mt-8">                    
                    <h1 className="font-bold" style={{fontSize:"3vh",color:currentColor}}>start time :</h1>
                    <h1 className="" style={{fontSize:"3vh",marginLeft:"1vh",color:currentColor}}>{item.start_time}</h1>
                    </div>
                    <div className="w-full flex">                    
                    <h1 className="font-bold" style={{fontSize:"3vh",color:currentColor}}>duration :</h1>
                    <h1 className="" style={{fontSize:"3vh",marginLeft:"1vh",color:currentColor}}>{item.duration}</h1>
                    </div>
                    <motion.div className="h-20 pt-5" whileTap={{scale:0.9}}>                    
                    <button className="w-full h-10 rounded-xl" 
                    style={{backgroundColor:currentColor}}
                     onClick={() =>  {setUjian(item.id);
                     console.log(ulangan[index].questions)}}>Start</button>
                    </motion.div>
                    
                </motion.div>
                    ))        
                }
                
                
                </div>
        
                </div>
                <button onClick={() => {
                    if(klikp > 0){
            setposisi(posisi + 455);
            setklikp(klikp - 1);
        }
        }}
        ><FaArrowRight className="dark:text-white"/></button>
                
        </div>
        <div className="flex lg:flex-nowrap justify-center p-15 w-full">
        
        <div className="bg-white dark:text-black dark:bg-secondary-dark-bg 
         rounded-xl w-full lg:w-90  p-9 pt-0 m-3 bg-no-repeat bg-cover bg-center "        
        >
                {/* {
                    ulangan[2].questions.map((item,index) => (
                            <p>{item.index}</p>
                    ))
                } */}

                {
                    data.map((item,index) => (
                        <div style={{paddingLeft:"8vh",paddingRight:"8vh",minHeight:"35vh"}} 
                className=''>
                    {/* di sini post an */}
                    <div className="bg-slate-50 rounded-2xl dark:bg-black" 
                    style={{minHeight:"40vh",marginTop:"5%",
                    padding:"3vh"
                }}>
                        
                        <div className="flex ">
                    {/* disini foto profile */}    
                    <img src={pordos} alt='' className='w-10 h-10 rounded-full'/>
                    {/* disini title */}
                    <Postname size={25} style={{fontWeight:"bolder"}} 
                    className='dark:text-white ml-1'>{item.email}</Postname>
                    </div>
                    {/* disini text dari guru */}                
                    <p className="font-semibold dark:text-white" style={{marginTop:"2vh"}}>
                    {item.message}
                    </p>
                    </div>
                    {/* di sini akhir post an */}
                   
                </div>
                    ))        
                }




                </div>
                
        </div>
        
        </div>
      
        
        
    );
}

export default Dashboard;