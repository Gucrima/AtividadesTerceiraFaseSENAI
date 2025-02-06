import React from 'react'
import { useState } from 'react'
import './Demo1.css'

function Demo1() {
    const [estado, setEstado] = useState(0); // define um estado inicial de 0
    function aumentaNumero(){ // função que aumenta o estado em 1 a cada clique
        setEstado(estado + 1)
    }

    let cornometro = 0; // variável que armazena o nnúmero de cliques

    
    function contadorDoRafa(){ // função que aumenta o cornometro em 1 a cada clique
        cornometro = cornometro + 1;
        console.log(cornometro)
    }

    function alertarUsuario(){ // função que alerta o usuário
        alert('Você é muito curioso 🧐')
    }

  return (
    <div className='conteiner-demo1'>
      Demo Do Rafael
      <button onClick={alertarUsuario}>Clique aqui</button>
      <button onClick={() => {alert('executei um arrow Function')}}>Arrow Function</button>

    <div>
      cornometro: {cornometro}
      <button onClick={contadorDoRafa}>+</button>
    </div>
    <div>
    {/* exibe o estado atualizados */}
        estado: {estado} 
    {/* aciona a função aumentaNumero ao clicar no botão  */}
        <button onClick={aumentaNumero}>+</button>
    </div>
    </div>
  )
}

export default Demo1
