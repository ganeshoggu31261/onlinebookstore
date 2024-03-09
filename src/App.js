import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar' 
import Sucess from'./Components/Sucess'
import {BrowserRouter} from 'react-router-dom'

function App() {
  
    <BrowserRouter>
      <Navbar/>
      <Sucess/>
    </BrowserRouter>
   
  

  const current_theme=localStorage.getItem('current_theme');
  const [theme, setTheme]=useState(current_theme? current_theme :'light');


  useEffect(()=>{
    localStorage.setItem('current_theme',theme);
  },[theme])
     

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
  
}

  export default App






