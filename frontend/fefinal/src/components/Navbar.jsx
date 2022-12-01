import React,{useEffect} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {FiShoppingCart} from 'react-icons/fi';
import { BsChatLeft} from 'react-icons/bs';
import {RiNotification3Line} from 'react-icons/ri'
import {MdKeyboardArrowDown} from 'react-icons/md';
import pordos from '../data/avatartdosen.png'
import porfos from '../data/avatarstudent.jpg'

import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Avatar from './../data/avatar.jpg';

import {Cart,Chat,Notification,UserProfile} from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc}
    style={{color }} 
    className='relative text-xl rounded-full p-3 '
    >
    <span style={{background:dotColor}} 
    className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
      {icon}
    
    </button> 
    </TooltipComponent>
)

const Navbar = () => {
  const {activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,
  screenSize,setscreenSize,currentColor,akunNama,setloggg,akunRole
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setscreenSize(window.innerWidth); 
    window.addEventListener('resize',handleResize);
    
    handleResize();

    return () => window.removeEventListener ('resize',handleResize)
  },[]);

  useEffect(() => {
    if(screenSize <= 900)
    { 
      setActiveMenu(false);
    }
    else{
      setActiveMenu(true);
    }
  },[screenSize]);


  return (

    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'> 

    <NavButton title='Menu' customFunc={() => 
      setActiveMenu((prevActiveMenu) =>!prevActiveMenu      
      )}
      color={currentColor} icon={<AiOutlineMenu/>}
      />     
      <div className='flex'>

      <NavButton title='Chat' 
      dotColor={currentColor}
      customFunc={() => handleClick('chat')}
      color={currentColor} 
      icon={<BsChatLeft/>}
      />

      <NavButton title='Notifications' 
      dotColor={currentColor}
      //customFunc={() => handleClick('notification')}
      color={currentColor}
      icon={<RiNotification3Line/>}
      />

      <TooltipComponent
      content='Profile'
      position='ButtomCenter'
      >
        <div className='flex item-center gap-2 
        cursor-pointer p-1 hover:bg-light-gray rounded-lg'
        onClick={() => {setloggg(true)}}
        >
          <img src={akunRole === 'admin' ?pordos:porfos} className='rounded-full w-8 h-8'/>
          <p>
            <span className='text-14' style={{color:currentColor}}>hi,</span>{''}
            <span className='font-bold ml-1 text-14' style={{color:currentColor}}>{akunNama}</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
        </div>
        
      </TooltipComponent>
      {isClicked.chat && <Chat />}
      {isClicked.notification && <Notification />}
      {isClicked.userProfile && <UserProfile />}
      </div>
      </div>
  )
}

export default Navbar