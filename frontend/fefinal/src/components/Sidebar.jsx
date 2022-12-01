import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import { SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Avatar } from './Styles';

import {links} from '../data/dummy';
import {linksis} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

import Logo from './../assets/favicon.png';

import { motion } from 'framer-motion';

const Sidebar = () => {

  const {activeMenu,setActiveMenu,screenSize,currentColor,akunRole} = useStateContext();
  const activeLink = 'flex items.center gap-5 pl-4 pt-2 pb-2 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items.center gap-5 pl-4 pt-2 pb-2 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900){

    }

  }
  var koko = null; 
  {akunRole === 'admin' ? koko=links : koko=linksis};
  return (
    <motion.div className='ml-3 h-screen md:overflow-hidden overflow-auto 
    md:hover:overflow-hidden pb-10 '
    animate={{ y:0 }} initial={{y:-200}} exit={{y:-200}}      
    >
      {activeMenu && (<>
      <div className='flex justify-between items-center'>
        <Link to='/home' onClick={handleCloseSideBar} 
        className='items-center gap-3 ml-3 mt-4 flex container text-xl 
        font-extrabold -tracking-tight dark:text-white text-slate-900 '>
          <img src={Logo} style={{width:"5vh"}}/>
          <span className='pt-2'>Telkom-U</span>
        </Link>
        <TooltipComponent content='Menu' position='BottomCenter'>
          <motion.button type='button' onClick={() => 
           setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          className='text-xl rounded-full p-3 dark:text-white  mt-4 block'
          whileHover={{
            scale:1.1
          }}
          >
            <MdOutlineCancel />
          </motion.button>
        </TooltipComponent>
      </div>

      <motion.div className='mt-10 ' 
      
      >
          {koko.map((item) => (
            <motion.div 
            
            >              
              <p className='text-gray-400 m3 mt-4 uppercase'>
              {item.title}
              </p>
              {item.links.map((link) => (
                <motion.div
                whileHover={{
                  scale:1.1
                }}
                >
                <NavLink to={`/${link.name}`}
                key={link.name}
                onClick={handleCloseSideBar}


                style={({isActive}) => ({backgroundColor: isActive ? currentColor : ''})}
                

                className={({isActive}) => (isActive ? activeLink : normalLink)
                }
                >
                  {link.icon}
                  <span className='capitalize'>
                    {link.name}
                  </span>
                </NavLink>
                </motion.div>

              ))}
            </motion.div>
          ))}
      </motion.div>

      </>)}
      </motion.div>
  )
}

export default Sidebar