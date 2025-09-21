import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Home'
function App() {

  return (
    <>
   <div className='bg-amber-300'>react app setup for todo</div>
  <Header/>
    <Home/>
  <Footer/>
    </>
  )
}

export default App
