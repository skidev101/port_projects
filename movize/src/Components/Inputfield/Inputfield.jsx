import React from 'react'
import './Inputfield.css'

const Inputfield = ({ icon, type, placeholder }) => {
  return(
      <div className="inputs">
         <div className="input-wrap">
              <i className={icon}></i>
              <input 
              type={ type }
              placeholder={ placeholder }
              required
              />
        </div>
      </div>
    )
}

export default Inputfield