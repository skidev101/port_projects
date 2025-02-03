import React from 'react'
import './App.css'

import LoginHeader from './Components/LoginHeader/LoginHeader'
import SocialBtn from './Components/SocialBtn/SocialBtn'
import Divider from './Components/Divider/Divider'
import Inputfield from './Components/Inputfield/Inputfield'
import Forgot from './Components/Forgot/Forgot'
import LoginBtn from './Components/LoginBtn/LoginBtn'
import NewUser from './Components/NewUser/NewUser'

const App = () => {
  return (
      <div className="container">
          <LoginHeader />
          
          <SocialBtn />
          <Divider />
        
        
        <form action="#" className="login-form">
          <Inputfield icon="fa fa-envelope"
          type="email"
          placeholder="Enter your email"/>
          
         <Inputfield icon="fa fa-lock" 
          type="password"
          placeholder="Enter your password"/>
          
          <Forgot />
          
          <LoginBtn />
        </form>
        
        <NewUser />
        
      </div>
    )
}


export default App

