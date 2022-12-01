import React from 'react'
import cancel2 from '../assets/cancel2.svg'


const Userprofile = () => {
  return (
    <div style={{position:"absolute",padding:"3vh"}}
    className='dark:bg-secondary-dark-bg bg-slate-200'
    >
      
      <div className=''>log out
      <button>
        <img  src={cancel2}/>
      </button>
      </div>
    </div>
  )
}

export default Userprofile