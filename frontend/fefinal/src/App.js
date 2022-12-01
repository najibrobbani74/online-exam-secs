import {React,useEffect,useState} from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {Navbar,Sidebar,ThemeSettings,Soalujian,Kelasform,Formform, Addkelas,Addform,Logout,EditForm,Addpost,Exam} from './components';
import {Calendar,Kanban,ColorPicker,Editor,Dashboard,Matakuliah,Line,Login,Home,Kelas,Register,Registersis,Post} from './pages';
import { motion ,AnimatePresence} from 'framer-motion';

import { useStateContext } from './contexts/ContextProvider';
const App = () => {
  const {activeMenu,themeSettings,
     setThemeSettings,currentColor,currentMode,ujianSoal,formid,formId,
     kelasNama,formNama,akunNama,akunRole,kelasAdd,addformid,loggg,setActiveMenu,postadd} = useStateContext();

     
    console.log(activeMenu)
    console.log(formid)
     


  
  return (
    <BrowserRouter>
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
    
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
          <TooltipComponent content='Settings' position='Top'>
            <button type='button' className='text-3xl p-3 hover:drop-shadow-xl
            hover:bg-light-gray text-white'
            onClick={() => setThemeSettings(true)}
            style={{background:currentColor,
            borderRadius:'50%'
            }}>
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
      <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
        <AnimatePresence>
        <Sidebar />
        </AnimatePresence>
      </div>  
      ): (<div className='w-0 dark:bg-secondary-dark-bg'>
        <>
      <Sidebar />
      </>
      </div>
      )}
      <div className={
        `dark:bg-main-dark-bg bg-main-bg min-h-screen 
        w-full 
        ${activeMenu ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  ' : 
        'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '}`
         }>
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
          <Navbar />
        </div>
      
      <div>

      
      {postadd ?  <Addpost /> : ''}
      
      {kelasAdd ?  <Addkelas /> : ''}
      
      {themeSettings && <ThemeSettings /> }
      <AnimatePresence>      
      {kelasNama && <Kelasform/>}
      </AnimatePresence>

      <AnimatePresence>
      {formid && <Exam />}
      </AnimatePresence>

      <AnimatePresence>
      {addformid && <Addform />}
      </AnimatePresence>

      <AnimatePresence>
      {loggg && <Logout />}
      </AnimatePresence>

      <AnimatePresence>
      
      {formId && <EditForm />}
      
      </AnimatePresence>
      <AnimatePresence>
        <Routes>
          {/* dahboard */}
          <Route path='/registerdosen' element={<Register />}/>
          <Route path='/registersiswa' element={<Registersis />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<Home />}/>


          {
            
        <Route path='/home' element={akunRole === 'admin' ? <Kelas/> : <Dashboard/>}/>  
   
          }


          {/* pages */}
          <Route path='/history' element={<Matakuliah />}/>    
          <Route path='/post' element={<Post />}/>                    
          
          
          {/* Apps */}
          <Route path='/kanban' element={<Kanban />}/>
          <Route path='/editor' element={<Editor />}/>
          <Route path='/calendar' element={<Calendar />}/>
          <Route path='/colorpicker' element={<ColorPicker />}/>

          {/* charts */}
          <Route path='/Line' element={<Line />}/>
          
          
        </Routes>
        </AnimatePresence>
      </div>
      
      </div>
      
      </div>

    </div>
    </BrowserRouter>
  )
}

export default App