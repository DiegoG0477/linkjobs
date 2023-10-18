import React from 'react'
import "./styles.css"
function InputLabel(props) {
  return (
    <div className='inputLabel__container'>
        <div>
        <label className='label-form'>{props.label}</label>
        </div>
        <input className='input-form' type={props.type} name={props.name} placeholder={props.holder}/>
    </div>
  )
}

export default InputLabel