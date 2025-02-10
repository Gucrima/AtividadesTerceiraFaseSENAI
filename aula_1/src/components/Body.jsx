import React from 'react'
import './Body.css'
import Demo1 from './Demo1'
import Avisos from './Avisos'
import Demo2 from './Demo2'

function Body() {
  return (
    <div className='conteiner-body'>
      <Demo1 />
      <Demo2 />
      <Avisos />  
    </div>
  )
}

export default Body
