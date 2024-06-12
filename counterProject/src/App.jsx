import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [counter, setCounter] = useState(10);
    
   const addValue = () =>{
    if(counter >=20){
      alert("You have reached the maximum value");
      
    }else {
      setCounter(counter + 1);
    }
    
   }

   const removeValue = () => {
    if(counter <= 0){
      alert("Can't access negative values");
      
    }else {
      setCounter(counter - 1);
    }
    
   }
  

  return (
    <>
      <h1>React Ashish ke Sath </h1>
      <h2>Count Value : {counter}</h2>

      <button onClick={addValue}>Add {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove {counter}</button>

    </>
  )
}

export default App
