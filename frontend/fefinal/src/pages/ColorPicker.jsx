import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const pen = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;}

const ColorPicker = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category='App' title='ColorPicker'/>
    <div className='text-center'>
      <div id='preview'/>
      <div className='flex justify-center items-center gap-20 flex-wrap'>
      <div>
        <p className='text-2xl font-semibold mt-2 mb-4'> inline palette</p>
        <ColorPickerComponent 
        id='inline-pallete'
        mode='Palette'
        modeSwitcher={false}
        inline
        showButtons={false}
        change={pen}
        />
      </div>
      <div>
        <p className='text-2xl font-semibold mt-2 mb-4'> inline picker</p>
        <ColorPickerComponent 
        id='inline-picker'
        mode='Picker'
        modeSwitcher={false}
        inline
        showButtons={false}
              change={pen}
        />
      </div>
      </div>
    </div>
    </div>
  )
}

export default ColorPicker