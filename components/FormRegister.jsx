"use client";
import InputFormRegister from "./InputFormRegister";
import ButtonRegister from "./ButtonRegister";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import { useRouter } from "next/navigation";
function FormRegister() {
  const router = useRouter();
  const [form, setForm] = useState({
    nombre: "",
    apellidoPat: "",
    apellidoMat: "",
    fechaNacimiento: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
if(!form.nombre || !form.apellidoPat  || !form.apellidoMat || !form.fechaNacimiento || !form.email || !form.password || !form.confirmPassword){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Llena todos los campos!'
  })
}else{
  if(form.password != form.confirmPassword || form.password.length!=8){
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Las contraseñas no coinciden o no esta utilizando 8 caracteres!'
    })
  }else{
    await axios.post("http://localhost:3001/api/v1/auth/signUp", form);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Usuario registrado',
      showConfirmButton: false,
      timer: 1500
    })
    router.push("/jobs")
  }
}
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form" >
        <div className="col">
          <InputFormRegister type="text" name="nombre" holder="Nombre(s)" fun={handleChange} />
          <InputFormRegister
            type="text"
            name="apellidoPat"
            holder="Apellido Paterno"
            fun={handleChange}
          />
          <InputFormRegister
            type="text"
            name="apellidoMat"
            holder="Apellido Materno"
            fun={handleChange}
          />
          <InputFormRegister type="date" name="fechaNacimiento" fun={handleChange} />
        </div>
        <div className="col">
          <InputFormRegister type="email" name="email" holder="Email" fun={handleChange} />
          <InputFormRegister
            type="password"
            name="password"
            holder="Password" fun={handleChange}
          />
          <InputFormRegister
            type="password"
            name="confirmPassword"
            holder="Confirmar password" fun={handleChange}
          />
          <ul>
            <li>Debe tener 8 caracteres.</li>
            <li>
              Evita que sea similar a tu nombre, apellidos o correo electronico.
            </li>
          </ul>
        </div>
      </div>
      <p className="terminos">
        Al registrarte aceptas nuestros Terminos y condiciones y Aviso de
        privacidad de EDUPLANET.
      </p>
      <div className="btn_center">
        <ButtonRegister type="submit" text="Aceptar" />
      </div>
    </form>
  );
}

export default FormRegister;
