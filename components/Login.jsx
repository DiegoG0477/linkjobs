import React from 'react'
import "./styles.css"
import InputLabel from './InputLabel'
import Button from './Button'
import Img from "next/image"
import login from "@/public/assets/login.png"
function FormularioLogin() {
  return (
    <div className='formulario'>
            <div className='centrar'>
            <Img src={login} alt='usuario' className='img-login'/>
            </div>   
        <form className='formLogin'>
            <InputLabel label="Correo electronico" type="email" name="email" holder="Email"/>
            <InputLabel label="Contraseña" type="password" name="password" holder="Password"/>
            <div className='centrar'>
                <Button text="INICIAR SESION"/>
            </div>
        </form>
    </div>
  )
}

export default FormularioLogin