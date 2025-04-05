import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card' 

function App() {
  const [count, setCount] = useState(0)
  let lunObj = {
    name: "raju vikaspur",
    age: 26,
    Occupation: "punchar",
  }
  let lunArr = [1,2,3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
       <Card shameless = "sydney sweeny" evilBoI={lunObj} kaand={lunArr} btnText="Click me" />
       <Card shameless = "Megan Fox" btnText="visit me"/>
        
    </>
  )
}

export default App
