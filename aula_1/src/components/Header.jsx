import React from 'react'
import './Header.css'
import BoasVindas from './BoasVindas'
import { useState } from 'react'

function Header() {

  const [usuario, setUsuario] = useState('')
  const [mensagem, setMensagem] = useState('Seja bem vindo!')

function fazerLogin() {
  var usuario = prompt('Digite seu nome:') 
  setUsuario(usuario)
}


  return (
    <div className='conteiner-header'>
    <p>olá eu sou o header!</p>
    <p className='Links-rafa'>Link1</p>
    <p className='Links-rafa'>Link2</p>
    <p className='Links-rafa'>Link3</p>
    <p className='Links-rafa'>Link4</p>
    
    {/* criação de props e mostrar na tela */}
    {/* { usuario && <BoasVindas nome={usuario} mensagem={mensagem} />}  */}
    { usuario ? <BoasVindas nome={usuario} mensagem={mensagem} /> : <button onClick={fazerLogin}>Login</button> }
    { usuario && <button onClick={() => setUsuario('')}>Logout</button> }
    </div>
  )
}

export default Header