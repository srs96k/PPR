import React from 'react'
import "./App.css"
import Nav from './Components/Nav/Nav'
import Home from "./Components/Home/Home"
import Login from './Components/Login/Login' 
import Signup from './Components/Signup/Signup'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'



function App() {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default App