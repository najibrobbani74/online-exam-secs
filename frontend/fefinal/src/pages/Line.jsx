import React from 'react';
import {Header,LineChart} from '../components'

const Line = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl'>
         <Header category='App' title='score rate'/>
         <div className='w-full'>
            <LineChart />
         </div>
        Line</div>
  )
}

export default Line