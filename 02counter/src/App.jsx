import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [ginti, nayiGinti] = useState(5);

  // let ginti = 5;

  const Badhao = () => {
    // ginti = ginti + 1;

    if(ginti < 20) {
      nayiGinti(ginti + 1);
    }
  }

  const ghatao = () => {
    if(ginti > 0) {
      nayiGinti(ginti - 1);
    }
  }
  

  return (
    <>
      <h1>Londo Ki Bethak!!!</h1>
      <h2>Ginti: {ginti}</h2>

      <button onClick={Badhao}>Add value {ginti}</button>
      <br />
      <br />
      <button onClick={ghatao}>remove value {ginti}</button>
      <p>footer: {ginti}</p>


    </>
  )
}

export default App
