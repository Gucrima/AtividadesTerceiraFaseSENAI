import React from 'react'
import './Demo1.css'

function Demo1() {
    function alertarUsuario(){
        alert('Você é muito curioso 🧐')
    }

  return (
    <div className='conteiner-demo1'>
      Demo Do Rafael
      <button onClick={alertarUsuario}>Clique aqui</button>
      <button onClick={() => {alert('executei um arrow Function')}}>Arrow Function</button>
    </div>
  )
}

export default Demo1
