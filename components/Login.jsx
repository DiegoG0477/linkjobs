'use client'
import React from 'react'
import "./styles.css"
import InputLabel from './InputLabel'
import Button from './Button'
import Img from "next/image"
import login from "@/public/assets/login.png"
import { useState } from 'react'
import Axios from "axios";
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function FormularioLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      Axios.defaults.withCredentials = true;
      const response = await Axios.get(`http://localhost:3001/api/v1/auth/login/${email}/${password}`);
      console.log(response);
      router.push('/jobs');
    }
    catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className='formulario'>
            <div className='centrar'>
            <Img src={login} alt='usuario' className='img-login'/>
            </div>   
        <form className='formLogin'>
            <InputLabel label="Correo electronico" type="email" name="email" holder="Email" metodo={setEmail}/>
            <InputLabel label="Contraseña" type="password" name="password" holder="Password" metodo={setPassword}/>
            <Link style={{textDecoration:"none", textAlign:"center", color:"white"}} href="/register"><p style={{width:"40vw"}}>¿No tienes cuenta? Registrate</p></Link>
            <div className='centrar'>
              <Button text="INICIAR SESION" loginFunction={handleLogin}/>
            </div>
        </form>
    </div>
  )
}

export default FormularioLogin