import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './componets/Nav'
import Promo from './componets/Promo'
import Intro1 from './componets/Intro1'
import Footer from './componets/Footer'
import Intro2 from './componets/Intro2'
import Intro3 from './componets/Intro3'
import Heading from './componets/Heading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Heading name = "Ashish"/>
      <Promo/>
      <Intro1/>
      <Intro2/>
      <Intro3/>
      <Footer/>

    </>
  )
}

export default App
