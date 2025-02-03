import React from 'react'
import './SocialBtn.css'
import googleImg from '../../assets/google.png'
import appleImg from '../../assets/apple.png'

const SocialBtn = () => {
  return(
      <div className="social-btns">
            <button className="btn">
              <img 
              src={googleImg} 
              alt=""
              className="btn"
              />
              Google
            </button>
            <button className="btn">
              <img 
              src={appleImg} 
              alt=""
              className="icon"
              />
              Apple
            </button>
          </div>
    )
}

export default SocialBtn