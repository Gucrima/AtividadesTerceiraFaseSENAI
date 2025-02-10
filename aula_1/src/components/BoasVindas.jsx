import React from 'react'


// function BoasVindas(props) {

function BoasVindas({nome, mensagem}) {
  return (
    <div className='conteiner-BoasVindas'>
      Olá { nome }!
      { mensagem }
       {/* <button onClick={() => console.log(nome, mensagem)} > log </button> */}
    </div>
  )
}

export default BoasVindas
  