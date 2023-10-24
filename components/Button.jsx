import React from 'react'
import "./styles.css"
function Button(props) {
  return (
    <button className='button_login' onClick={props.loginFunction} >{props.text}</button>
  )
}

export default Button