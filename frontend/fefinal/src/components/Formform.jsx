import {React,useState} from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import cancel from '../assets/cancel.svg'
import { motion ,AnimatePresence} from 'framer-motion';



const Formform = () => {
    const {currentColor,setForm,formNama,formId,formDesc} = useStateContext();
    console.log(formId)

    const [form_name, setnama] = useState()
    const [description, setdesk] = useState()
    const [start_time, setstart] = useState()
    const [duration, setduration] = useState()
    const [questions, setquestion] = useState()


  return (
    <motion.div     
    className='bg-half-transparent 
    w-screen h-screen fixed nav-item top-0 right-0 p-0 md:p-10 '
    
    >
    
  
      
      <motion.div className='w-full h-full dark:text-gray-200  
      bg-white dark:bg-main-dark-bg rounded-xl overflow-auto'
      animate={{ x:0 }} initial={{x:1700}} exit={{x:1700}}  transition={{duration:1.0}}
      >
        <div  onClick={() => {setForm(null)}}>
        <img src={cancel}  className='w-5 h-5 absolute md:top-8 md:left-8' />
        </div>
       <form> 
      {/* awal edit form*/}
      <div className='p-3' style={{width:"100%",minHeight:"25vh"}}>
        <div className=' bg-slate-200 w-full h-full rounded-xl font-bold p-4 dark:bg-black'>
            {/* nama form id class*/}
        <div className='flex'>
          <div className='md:flex' style={{height:"3.5vh",width:"75%"}}>
          <h1 className='mr-3'>nama form :</h1>          
          <input type='text' placeholder={formNama} className='rounded-xl pl-2'
          onInput={event=>setnama(event.target.value)}
          />
          </div>
          <div className='text-center '>
          <h1>id form :</h1><h1>{formId}</h1>
          </div>
          </div>
          {/* deskripsi jadwal*/}

          <div className='mt-3'>
          <h1 className='mr-3 font-extrabold '>Deskripsi :</h1> 
          <textarea placeholder='masukan deskripsi' className='w-full rounded-xl p-2' style={{height:"10vh"}}
          onInput={event=>setdesk(event.target.value)}
          >
          </textarea>  
          <label>jadwal :</label> 
          <input 
          className='w-full rounded-xl p-2'
          type='datetime-local'
          onInput={event=>setstart(event.target.value)}
          />
            </div>
            
          {/* durasi */}     
          <div className='mt-2'>     
          <label>durasi :</label>
          <div className='w-full rounded-xl p-2 bg-white md:flex justify-center'>          
            <div className='flex ml-3 md:ml-0'>
          <input 
          name='durasi'
          type='radio'
          value='5'  
          onChange={event => setduration(event.target.value)}      
        
          />
          <label className='ml-2'>5 menit</label>    
          </div>

          <div className='flex ml-3'>
          <input 
          name='durasi'
          type='radio'
          value='10'    
          onChange={event => setduration(event.target.value)}      
          />
          <label className='ml-2'>10 menit</label>    
          </div>

          <div className='flex ml-3'>
          <input 
          name='durasi'
          type='radio'
          value='15'   
          onChange={event => setduration(event.target.value)}      
       
          />
          <label className='ml-2'>15 menit</label>    
          </div>

          <div className='flex ml-3'>
          <input 
          name='durasi'
          type='radio'
          value='20'   
          onChange={event => setduration(event.target.value)}      
       
          />
          <label className='ml-2'>20 menit</label>    
          </div>

          <div className='flex ml-3'>
          <input 
          name='durasi'
          type='radio'
          value='25'     
          onChange={event => setduration(event.target.value)}      
     
          />
          <label className='ml-2'>25 menit</label>    
          </div>

          <div className='flex ml-3'>
          <input 
          name='durasi'
          type='radio'
          value='30'    
          onChange={event => setduration(event.target.value)}      
      
          />
          <label className='ml-2'>30 menit</label>    
          </div>

          <div className='flex ml-3'>
          <input 
          name='durasi'
          type='radio'
          value='35'    
          onChange={event => setduration(event.target.value)}      
      
          />
          <label className='ml-2'>35 menit</label>    
          </div>

          <div className='flex ml-3'>
          <input 
          name='durasi'
          type='radio'
          value='40'     
          onChange={event => setduration(event.target.value)}      
     
          />
          <label className='ml-2'>40 menit</label>    
          </div>

          <div className='flex ml-3'>
          <input 
          name='durasi'
          type='radio'
          value='45'   
          onChange={event => setduration(event.target.value)}      
       
          />
          <label className='ml-2'>45 menit</label>    
          </div>

          <div className='flex ml-3'>
          <input 
          name='durasi'
          type='radio'
          value='50'    
          onChange={event => setduration(event.target.value)}      
      
          />
          <label className='ml-2'>50 menit</label>    
          </div>

          <div className='flex ml-3'>
          <input 
          name='durasi'
          type='radio'
          value='55'        
          onChange={event => setduration(event.target.value)}      
  
          />
          <label className='ml-2'>55 menit</label>    
          </div>

          <div className='flex ml-3'>
          <input 
          name='durasi'
          type='radio'
          value='60'   
          onChange={event => setduration(event.target.value)}      
       
          />
          <label className='ml-2'>60 menit</label>    
          </div>
          

          </div>
          </div>
          {/* durasi */}

         

          {/* pembuatan soal */}
          {/* generate soal */}
          <div >
            <label className='w-full'>masukan file soal :</label>
            <div className='bg-white rounded-xl p-2'>
            <input 
            type='file'
            className='w-full rounded-xl p-2'
            />
            <button className='w-full rounded-xl p-2' style={{backgroundColor:currentColor}}> generate </button>
            </div>

            </div>
            {/* validasi soal */}
            <div className='mt-2'>
            <label className='w-full'>validasi soal</label>            
                <textarea className='w-full rounded-xl h-20 p-2'
                onInput={event=>setquestion(event.target.value)}
                ></textarea>            
            </div>
            {/* pembuatan soal */}
           </div>           
      </div>
      <div className='w-full flex justify-center pl-3 pr-3' >
      <button 
      
      className='bg-slate-200 rounded-xl p-4 w-full font-bold'
      style={{backgroundColor:currentColor}}
      > 
      save
      </button>
      </div>
      </form>
      {/* akhir edit form*/}
      
     
      {/*awal result*/}
      <div className='p-4 mt-2'>
        <p className='font-extrabold ml-5'>result dari siswa :</p>
      <div className='bg-slate-200 h-56 md:h-96  p-2 rounded-xl overflow-auto'>
        {/* daftar result siswa*/}

        <div className="flex bg-slate-50 rounded-2xl dark:bg-black w-full mb-1" 
                    style={{height:"10vh",
                    padding:"3vh"
                }}>

                <p className='dark:text-white font-extrabold' style={{width:"80%"}}>joko anwar</p>
                
                <button className='dark:text-white 
                 pb-5 p-1 rounded-xl w-20 font-extrabold' style={{backgroundColor: currentColor}}
                
                >lihat</button>                 
                
        </div>

        <div className="flex bg-slate-50 rounded-2xl dark:bg-black w-full mb-1" 
                    style={{height:"10vh",
                    padding:"3vh"
                }}>

                <p className='dark:text-white font-extrabold' style={{width:"80%"}}>jokowi dodo</p>
                
                <button className='dark:text-white font-extrabold 
                 pb-5 p-1 rounded-xl w-20' style={{backgroundColor: currentColor}}
                
                >lihat</button>                 
                
        </div>

        <div className="flex bg-slate-50 rounded-2xl dark:bg-black w-full mb-1" 
                    style={{height:"10vh",
                    padding:"3vh"
                }}>

                <p className='dark:text-white font-extrabold' style={{width:"80%"}}>leon s kennedy</p>
                
                <button className='dark:text-white font-extrabold
                 pb-5 p-1 rounded-xl w-20' style={{backgroundColor: currentColor}}
                
                >lihat</button>                 
                
        </div>

        <div className="flex bg-slate-50 rounded-2xl dark:bg-black w-full mb-1" 
                    style={{height:"10vh",
                    padding:"3vh"
                }}>

                <p className='dark:text-white font-extrabold' style={{width:"80%"}}>saitama</p>
                
                <button className='dark:text-white font-extrabold
                 pb-5 p-1 rounded-xl w-20' style={{backgroundColor: currentColor}}
                
                >lihat</button>                 
                
        </div>

        <div className="flex bg-slate-50 rounded-2xl dark:bg-black w-full mb-1" 
                    style={{height:"10vh",
                    padding:"3vh"
                }}>

                <p className='dark:text-white font-extrabold' style={{width:"80%"}}>mario ozawa</p>
                
                <button className='dark:text-white font-extrabold
                 pb-5 p-1 rounded-xl w-20' style={{backgroundColor: currentColor}}
                
                >lihat</button>                 
                
        </div>

        {/*akhir daftar result siswa */}
      </div>
      </div>
       {/*akhir result */}
                  
      </motion.div>
      
    </motion.div>
  )
}

export default Formform