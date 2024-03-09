import React from 'react'
import './Navbar.css'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'
import Signin from './Signin.js'
import Signup from './Signup.js'
import Contact from './Contact.js'



const Navbar = ({theme, setTheme}) => {


  const toggle_mode =()=>{
    theme ==='light' ? setTheme('dark') : setTheme('light');
  }
  
  return (
    <div>

    <div className='navbar'>
      
      <img src={theme === 'light'? "logo-black.png" : "logo-white.png"} alt="" className='logo'/>

      <ul >
        
        <li><Link to="/home">Home</Link></li> 
        <li><Link to="/about">About</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      
      </ul>
      
      
      

       <div className='search-box'>
        <input type="text" placeholder='search'/>
        <img src={theme ==='light' ?"search-w.png" :"search-b.png"} alt=""/>
       </div>
       <img onClick={()=>{toggle_mode()}} src={theme ==='light' ?"night.png":"day.png"} alt="" className='toggle-icon'/>
   
  
    </div>

    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/signin' element={<Signin/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/contact' element={<Contact/>}/>
    </Routes>

    </div>
  
    
    
  )
}
export default Navbar


