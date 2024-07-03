import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fruit from './Fruit'
import FruitsCounter from './FruitsCounter'

function App() {
  const [fruits] = useState([
    {fruitName:'Apple',id:1},
    {fruitName:'Apple',id:2},
    {fruitName:'plum',id:3},

  ])


  return (
    <div>
      <h1>Where shold the state go</h1>
      <Fruit fruits ={fruits}/>
      <FruitsCounter fruits ={fruits}/>
    </div>
  )
}

export default App
