import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { motion } from "framer-motion";
import { Formik, Form } from 'formik';
import { TextInput } from './FormLib';
import { useState } from 'react';
import { colors } from './Styles';

import { actionEvents } from '@syncfusion/ej2/spreadsheet';
import { eventClick } from '@syncfusion/ej2-react-schedule';

const Soalujian = () => {
  const { ujianSoal,ujianDurasi,ujianNama,currentColor,activeMenu,setujianSoal,co } = useStateContext();
 

  //array berisi data pilihan ganda
  var jwb =[];
  //
  //array berisi data essay
  var essayjwb =[];
  //

  function getjwb(e,a) {
    
    jwb[e]=a;
    console.log(jwb)
}
function getjwbessay(e,a) {

  essayjwb[e]=a;
  console.log(essayjwb)
}



console.log(ujianSoal)
console.log(co)

  return (
    <div className='bg-half-transparent 
    w-screen h-screen fixed nav-item top-0 right-0 p-0 md:p-10 '>
      <motion.div className='w-full h-full dark:text-gray-200  
      bg-white dark:bg-main-dark-bg  overflow-auto rounded-xl'
      animate={{ y:0 }} initial={{y:-700}} exit={{y:-700}}  transition={{duration:0.5}}
      >
        <div className='p-5 w-full'>
       <p className='font-bold'>Durasi : {ujianDurasi}</p>
      </div>
      {/* deskripsi */}
      <div className='p-3' style={{width:"100%",height:"20vh"}}>
        <div className=' bg-slate-200 w-full h-full rounded-xl font-bold p-5 dark:bg-black'>
          <h1>ujian : {ujianNama}</h1>
          <h1>jumlah soal : {ujianSoal}</h1>
           </div>           
      </div>
      {/* form ulangan */}
      <form>
     
      {/* soal pilgan*/}
      {/* soal 1 */}

      {
                    // ujianSoal.map((item,index) => (
                    //   <div className='p-3' style={{width:"100%",minHeight:"20vh"}}>
                    //   <div className=' bg-slate-200 w-full h-full rounded-xl font-bold p-5 dark:bg-secondary-dark-bg'>            
                    //     <div className='p-5  pl-0'>
                    //     <h1>{item.questions}</h1>                      
                    //     </div>
              
                     
                    //     <motion.div className='flex bg-white justify-start p-1 rounded-xl m-1 dark:bg-black '
                    //     whileHover={
                    //       {scale:1.01}            
                    //     }
                    //     >
                          
                    //     <input className="w-9 h-9 rounded-xl bg-white opacity-1" 
                    //      name='pilgan1' 
                    //     type='radio'
                    //     value='a'
                    //     onChange={event => getjwb(1,event.target.value)}
                    //       />
                    //       <label className='p-1.5'>23</label>
                    //     </motion.div>
              
                    //     <motion.div className='flex bg-white justify-start p-1 rounded-xl m-1 dark:bg-black'
                    //     whileHover={
                    //       {scale:1.01}            
                    //     }
                    //     >
                          
                        
                        
                    //     <input className="w-9 h-9 rounded-xl bg-white opacity-1" 
                    //      name='pilgan1' 
                    //     type='radio'
                    //     value='b'
                    //     onChange={event => getjwb(1,event.target.value)}
                    //       />
                    //       <label className='p-1.5 '>25</label>
                    //     </motion.div>
              
                    //     <motion.div className='flex bg-white justify-start p-1 rounded-xl m-1 dark:bg-black'
                    //     whileHover={
                    //       {scale:1.01}            
                    //     }
                    //     >         
                    //     <input className="w-9 h-9 rounded-xl bg-white opacity-1" 
                    //      name='pilgan1' 
                    //     type='radio'
                    //     value='c'
                    //     onChange={event => getjwb(1,event.target.value)}
                    //       />
                          
                    //       <label className='p-1.5'>26</label>
              
                    //     </motion.div>
              
                    //     <motion.div className='flex bg-white justify-start p-1 rounded-xl m-1 dark:bg-black'
                    //     whileHover={
                    //       {scale:1.01}            
                    //     }
                    //     >
                    //     <input className="w-9 h-9 rounded-xl bg-white opacity-1" 
                    //      name='pilgan1' 
                    //     type='radio'
                    //     value='d'
                    //     onChange={event => getjwb(1,event.target.value)}
                    //       />
              
                    //       <label className='p-1.5'>27</label>
              
                    //     </motion.div>
              
                    //     <motion.div className='flex bg-white justify-start p-1 rounded-xl m-1 dark:bg-black'
                    //     whileHover={
                    //       {scale:1.01}            
                    //     }
                    //     >
                    //     <input className="w-9 h-9 rounded-xl bg-white opacity-1" 
                    //      name='pilgan1' 
                    //     type='radio'
                    //     value='e'
                    //     onChange={event => getjwb(1,event.target.value)}
                    //       />
              
                    //       <label className='p-1.5'>27</label>
              
                    //     </motion.div>
                        
                    //      </div>           
                    // </div>
                   
              
                    // ))        
                }

      <div className='p-3' style={{width:"100%",minHeight:"20vh"}}>
        <div className=' bg-slate-200 w-full h-full rounded-xl font-bold p-5 dark:bg-secondary-dark-bg'>            
          <div className='p-5  pl-0'>
          <h1>1.apa yang lebih lucu dari 24</h1>                      
          </div>

       
          <motion.div className='flex bg-white justify-start p-1 rounded-xl m-1 dark:bg-black '
          whileHover={
            {scale:1.01}            
          }
          >
            
          <input className="w-9 h-9 rounded-xl bg-white opacity-1" 
           name='pilgan1' 
          type='radio'
          value='a'
          onChange={event => getjwb(1,event.target.value)}
            />
            <label className='p-1.5'>23</label>
          </motion.div>

          <motion.div className='flex bg-white justify-start p-1 rounded-xl m-1 dark:bg-black'
          whileHover={
            {scale:1.01}            
          }
          >
            
          
          
          <input className="w-9 h-9 rounded-xl bg-white opacity-1" 
           name='pilgan1' 
          type='radio'
          value='b'
          onChange={event => getjwb(1,event.target.value)}
            />
            <label className='p-1.5 '>25</label>
          </motion.div>

          <motion.div className='flex bg-white justify-start p-1 rounded-xl m-1 dark:bg-black'
          whileHover={
            {scale:1.01}            
          }
          >         
          <input className="w-9 h-9 rounded-xl bg-white opacity-1" 
           name='pilgan1' 
          type='radio'
          value='c'
          onChange={event => getjwb(1,event.target.value)}
            />
            
            <label className='p-1.5'>26</label>

          </motion.div>

          <motion.div className='flex bg-white justify-start p-1 rounded-xl m-1 dark:bg-black'
          whileHover={
            {scale:1.01}            
          }
          >
          <input className="w-9 h-9 rounded-xl bg-white opacity-1" 
           name='pilgan1' 
          type='radio'
          value='d'
          onChange={event => getjwb(1,event.target.value)}
            />

            <label className='p-1.5'>27</label>

          </motion.div>

          <motion.div className='flex bg-white justify-start p-1 rounded-xl m-1 dark:bg-black'
          whileHover={
            {scale:1.01}            
          }
          >
          <input className="w-9 h-9 rounded-xl bg-white opacity-1" 
           name='pilgan1' 
          type='radio'
          value='e'
          onChange={event => getjwb(1,event.target.value)}
            />

            <label className='p-1.5'>27</label>

          </motion.div>
          
           </div>           
      </div>
      {/* soal 2 */}
      <div className='p-3' style={{width:"100%",minHeight:"20vh"}}>
        <div className=' bg-slate-200 w-full h-full rounded-xl font-bold p-5 dark:bg-secondary-dark-bg'>            
          <div className='p-5  pl-0'>
          <h1>2.mana yang lebih dahulu</h1>                      
          </div>
          <motion.div className='flex bg-white justify-start p-1 rounded-xl m-1 dark:bg-black '
          whileHover={
            {scale:1.01}            
          }
          >
            
          <input className="w-9 h-9 rounded-xl bg-white opacity-1" 
           name='pilgan2' 
          type='radio'
          value='a'
          onChange={event => getjwb(2,event.target.value)}
            />
            <label className='p-1.5'>ayam</label>
          </motion.div>

          <motion.div className='flex bg-white justify-start p-1 rounded-xl m-1 dark:bg-black'
          whileHover={
            {scale:1.01}            
          }
          >
            
          
          
          <input className="w-9 h-9 rounded-xl bg-white opacity-1" 
           name='pilgan2' 
          type='radio'
          value='b'
          onChange={event => getjwb(2,event.target.value)}
            />
            <label className='p-1.5 '>telor</label>
          </motion.div>

          <motion.div className='flex bg-white justify-start p-1 rounded-xl m-1 dark:bg-black'
          whileHover={
            {scale:1.01}            
          }
          >         
          <input className="w-9 h-9 rounded-xl bg-white opacity-1" 
           name='pilgan2' 
          type='radio'
          value='c'
          onChange={event => getjwb(2,event.target.value)}
            />
            
            <label className='p-1.5'>kandang</label>

          </motion.div>

          <motion.div className='flex bg-white justify-start p-1 rounded-xl m-1 dark:bg-black'
          whileHover={
            {scale:1.01}            
          }
          >
          <input className="w-9 h-9 rounded-xl bg-white opacity-1" 
           name='pilgan2' 
          type='radio'
          value='d'
          onChange={event => getjwb(2,event.target.value)}
            />

            <label className='p-1.5'>bumi</label>

          </motion.div>
          
           </div>           
      </div>

      {/* soal essay*/}

      {/* soal 1 */}
      <div className='p-3' style={{width:"100%",minHeight:"20vh"}}>
        <div className=' bg-slate-200 w-full h-full rounded-xl font-bold p-5 dark:bg-secondary-dark-bg'>            
          <div className='p-5  pl-0 '>
          <h1>1.berapa banyak atom di bumi ini ?</h1>                      
          </div>
          <motion.div className='flex bg-white justify-start p-1 rounded-xl m-1 dark:bg-black'>
          <input className="w-full h-10 rounded-xl bg-white opacity-1 dark:bg-black"            
          type='text'
          
          //onChange={event => setEssay(event.target.value)}
          onChange={event => getjwbessay(1,event.target.value)}
          

            />
            
          </motion.div>
         
           </div>           
      </div>
       {/* soal 2 */}
       <div className='p-3' style={{width:"100%",minHeight:"20vh"}}>
        <div className=' bg-slate-200 w-full h-full rounded-xl font-bold p-5 dark:bg-secondary-dark-bg'>            
          <div className='p-5  pl-0'>
          <h1>2.rock bottom adalah kota yg ada di serial tv?</h1>                      
          </div>
          <motion.div className='flex bg-white justify-start p-1 rounded-xl m-1 dark:bg-black'>
          <input className="w-full h-10 rounded-xl bg-white opacity-1 dark:bg-black"            
          type='text'
          
          //onChange={event => setEssay(event.target.value)}
          onChange={event => getjwbessay(2,event.target.value)}
          

            />
            
          </motion.div>
         
           </div>           
      </div>
      {/* akhir dari ulangan */}
      <div className='w-full flex justify-center p-10' >
      <button 
      onClick={console.log('pilihan ganda :'+jwb+''+'essay :'+essayjwb)}
      className='bg-slate-200 rounded-xl p-4 w-full dark:bg-black'
      type='submit'

      > 
      submit
      </button>
      </div>
      </form>
        {/* form ulangan */}
      </motion.div>
  
    </div>
  )
}

export default Soalujian;