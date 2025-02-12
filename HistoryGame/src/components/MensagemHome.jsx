import React, { useState } from 'react'
import './MensagemHome.css'

function MensagemHome() {
  
  const emojis = [
    "🛒", "🎁", "❤️", "🔥", "🌟", "🎉", "🍕", "🐱", "🚀", "🌈", 
  "🍦", "🎸", "🐶", "🌍", "🍎", "⚡", "🎈", "🍩", "🐼", "🌺", 
  "🦄", "🍔", "🍟", "🍭", "🍫", "🍿", "🍹", "🍷", "🍺", "🍻", 
  "🥂", "🍼", "🍴", "🍽", "🥄", "🔪", "🏀", "🏈", "⚽", "🎾", 
  "🏐", "🏓", "🏸", "🥊", "🥋", "🎣", "🎮", "🎲", "🎯", "🎳", 
  "🎭", "🎨", "🎤", "🎧", "🎼", "🎹", "🥁", "🎷", "🎺", "🎻", 
  "🪕", "📱", "💻", "🖥", "🖨", "⌨️", "🖱", "🖲", "💽", "💾", 
  "💿", "📀", "📼", "📷", "📸", "📹", "🎥", "📽", "🎞", "📞", 
  "📟", "📠", "📺", "📻", "🎙", "🎚", "🎛", "🧭", "⏱", "⏲", 
  "⏰", "🕰", "⌛", "⏳", "📡", "🔋", "🔌", "💡", "🔦", "🕯", 
  "🧯", "🛢", "💸", "💵", "💴", "💶", "💷", "💰", "💳", "💎"
]
const [emojiRetirado, setEmojiRetirado] = useState('')
const [emojiGuardado, setEmojiGuardado] = useState([])


function rolarDados() {
  
  const numeroRetirado = Math.floor(Math.random() * ( 99 - 0 + 1) - 0)
  setEmojiRetirado(emojis[numeroRetirado])
  emojiGuardado.push(emojis[numeroRetirado])

  for (let i = 0; i < emojiGuardado.length; i++) {
    if (emojiGuardado.length > 9) {
      emojiGuardado.pop()
    }
  }



  console.log(numeroRetirado)

}


  return (
    <div>
        <div className="mensagem">
        <h1>Seja Bem Vindo ao site History Game!</h1>
            <h2>Crie as Histórias Mais aleatórias</h2>
            <h3 className='mensagem1'>Sua História começa como?</h3>
            <div className="botao">
                <p>{emojiGuardado && emojiGuardado}</p>
                <button className='botaoRolarDados' onClick={rolarDados}>Jogar Dado</button>
                <p className='botaoRolarDados'>{ i === 9 && emojiGuardado  }</p>
            </div>
        </div>
        
    </div>
  )
}

export default MensagemHome
