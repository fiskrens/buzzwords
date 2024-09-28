import { useState } from 'react'
import logo from './assets/logo.png'
import WordList from "./WordList"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const words = [{title: 'Title1','description': 'asd'}]

  
  // setWords(currentWords => {
  //   return [...todos]
  // })
  
  return (
    <>
      <header>
        <img id="logo" src={logo} />
      </header>
      <WordList />
    </>
  )
}

export default App
