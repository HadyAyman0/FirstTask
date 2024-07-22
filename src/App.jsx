import { Button } from '@material-tailwind/react'
import './App.css'
import Header from './components/Header/Header'
import { NavbarSimple } from './components/Navbar/Navbar'
import Second from './components/Second/Second'
import Third from './components/Third/Third'
import Fourth from './components/Fourth/Fourth'
import Fifth from './components/Fifth/Fifth'
import { Slide } from 'react-awesome-reveal'
import Loading from './components/Loading/Loading'
import { useState } from 'react'



function App() {

const [loading , setLoading] = useState(1)
setTimeout(()=>{
  setLoading(null)
},2000)
  return (
    <>

    {loading? <Loading/> :  <section>
    <NavbarSimple />
      <Slide direction='left'>
        <Header />
      </Slide>
      <Slide direction='left'>
        <Second />
      </Slide>
      <Slide direction='up'>
        <Third />
      </Slide>
      <Slide direction='left'>
        <Fourth />
      </Slide>
      <Slide direction='left' >
        <Fifth />
      </Slide>
  
    </section>}



    </>
  )
}

export default App
