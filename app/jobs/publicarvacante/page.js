"use client";
import LabelInputPublicVacant from "@/components/LabelInputPublicVacant";
import Img from "next/image";
import imagen from "@/public/assets/pagina.jpg";
import ButtonAddVacant from "@/components/ButtonAddVacant";
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
function PublicarVacantePage() {
  const [file, setFile] = useState(null);
  
  const [job, setJob] = useState({
    puesto: "",
    empresa: "",
    salario: null,
    description: "",
    ubicacion: "",
  });
  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imagen", file);
    formData.append("puesto", job.puesto);
    formData.append("empresa", job.empresa);
    formData.append("salario", job.salario);
    formData.append("description", job.description);
    formData.append("ubicacion", job.ubicacion);
    // formData.append("fechaCreacion", new Date());
    if(!job.puesto || !job.empresa || !job.salario || !job.description || !job.ubicacion || !file){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Llena todos los campos!'
      })
    }else{
      const response = await axios.post("http://localhost:3001/api/v1/jobs", formData);
      console.log(response);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Vacante publicada',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  return (
    <div className="PublicarVacante__container">
      <div className="formVacant">
        <form
          onSubmit={handleSubmit}
        >
          <p className="titles_vacant">¡Hola, NOMBRE!</p>
          <p className="titles_vacant">Comencemos con información basica</p>
          <p className="subtitle_vacant">
            Debe ser clara y específica, para ayudar a las personas a encontrar
            tu publicación.
          </p>
          <LabelInputPublicVacant
            label="Busco una persona para el puesto de"
            name="puesto"
            holder="Soldado"
            set={handleChange}
          />
          <LabelInputPublicVacant
            label="Que tenga experiencia en"
            name="description"
            holder="Disparar"
            set={handleChange}
          />
          <p className="titles_vacant">
            ¿Cuál es el sueldo mensual que ofreces?
          </p>
          <LabelInputPublicVacant
            label="Ofrecemos sueldos mensuales de"
            name="salario"
            holder="$0.00"
            id={1}
            set={handleChange}
          />
          <p className="titles_vacant">Ahora platiquemos sobre tu empresa</p>
          <LabelInputPublicVacant
            label="El nombre comercial de mi empresa es"
            name="empresa"
            holder="Tacos el Tommy"
            set={handleChange}
          />
          <LabelInputPublicVacant
            label="Mi empresa esta ubicada en la ciudad de"
            name="ubicacion"
            holder="suchiapa"
            set={handleChange}
          />
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <div className="button_add">
            <ButtonAddVacant text="PUBLICAR VACANTE" />
          </div>
        </form>
      </div>
      <div className="img_pageweb">
        <Img src={imagen} width={300} height={600} alt="imagenPage" />
      </div>
    </div>
  );
}
export default PublicarVacantePage;
