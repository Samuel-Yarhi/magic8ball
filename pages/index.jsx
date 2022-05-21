import Head from 'next/head'
import { useState } from 'react'

const yesAnswers = [
  'Sí',
  'Definitivamente',
  'Me temo que sí',
  'Obvis',
  'Eso que ni qué',
  '*Chiflido confirmante',
  '10-4 pareja'
]

const noAnswers = [
  'No',
  'No manches chuy',
  'Amigue date cuenta',
  'Nelson Mandela',
  '...Nah'
]
function Home() {
  const [result, setResult] = useState('sin respuesta');
  const getAnswer = () => {
    const isYes = Math.floor(Math.random() * 2) == 1;
    let answer;
    if (isYes) {
      answer = yesAnswers[Math.floor(Math.random() * yesAnswers.length)]
    } else {
      answer = noAnswers[Math.floor(Math.random() * noAnswers.length)]
    }
    console.log(answer)
    setResult(answer)
  }
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Koulen&family=Lobster&display=swap" rel="stylesheet" />
        <title>Bola 8</title>
        <meta name="description" content="App para predecir el futuro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='items-center p-12 gap-4 flex flex-col items-start bg-red-900 h-screen text-white'>
        <h1 className='text-5xl font-bold'> Conoce tu futuro</h1>
        <p>Descubre las respuestas a las preguntas que mas te inquietan. Averigua que tiene el destino preparado para ti. ¿Te has portado bien? O... ¿Le tienes miedo al karma?</p>
        <div className='flex gap-4'>
          <input className='border rounded-lg outline-none p-2 text-black' name='Pregunta' type='text' />
          <button onClick={getAnswer} className='bg-stone-900 text-white px-6 py-2 rounded-lg'>Respuesta</button>

        </div>

        <span>{result && result}</span>
        <div className='flex gap-4'>
          <a className='underline' target='_blank' href='https://github.com/Samuel-Yarhi'>Creador</a>
        </div>


      </main>
    </div>
  )
}


export default Home;