import React from 'react'
import "./styles.css"
function Button(props) {
  return (
    <button className='button_login'>{props.text}</button>
  )
}

export default Button