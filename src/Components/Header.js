import React, { useState } from 'react'
import{Navbar, Toolbar, Tabs,Tab,Typography} from '@mui/material'
import {NavLink} from 'react-router-dom';

const Header = () => {
  const[value ,setValue]=useState()
  return (
    <div>
        <Tabs textColor='inherit' indicatorColor='primary' 
        sx={{ml:'auto'}}value={value}
        onChange={(e,val)=>setValue(val)}>
        
        <Tab LinkComponent={NavLink} to='/Signin' />
          
        </Tabs>
        {/* <Tabs
    sx={{ml:'auto'}}value={value}
    onChange={(e,val)=>setValue(val)}>
      <Tab LinkComponent={NavLink} to='/Signin' label='signin'/>
      </Tabs> */}
      
    </div>

    
    


  )
}

export default Header