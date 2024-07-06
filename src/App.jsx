import { useState } from 'react'

import './App.css'
import { HeaderComponent } from './Header/Header'
import { MainComponent } from './Main/Main'
import { FooterComponent } from './Footer/Footer'


function App() {
  
  return (
    <>
    <HeaderComponent/> 
    <MainComponent/>
    
    <FooterComponent/>
    </>
  )
}

export default App
