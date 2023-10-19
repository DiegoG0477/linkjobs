import React from 'react'
import Img from "next/image";
import ImgHome from "@/public/assets/busqueda_trabajo_asesoramiento.webp"
import ImgVacant from "@/public/assets/istockphoto-1070456274-170667a.jpg"
import "./home.css"
import ButtonSearch from "@/components/ButtonSearch";

function HomePage() {
  return (
      <div>
          <div className="mensaje_home">
            <p className="mensaje">Encuentra miles de vacantes para los mejores trabajos</p>
            <Img src={ImgHome} alt="imgane-home" className="imagen_home"></Img>
          </div>
          <div>
              <p className="mensaje_dos">Las mejores empresas están aquí</p>
          </div>
          <div className="contain_empresas">
              <Img src={ImgVacant} alt="imgane-vacant" className="imagen_vacant"></Img>
          </div>

          <div>
              <p className="mensaje_tres">¿Tienes una empresa?</p>
              <p className="mensaje_tres">Publica tu vacanate con nosotros</p>
              <div className="contain_cuadrito">
                  <p className="mensaje_dos">Encuentra al mejor empleado para tu empresa</p>
                  <div className="contain_button">
                      <ButtonSearch/>
                  </div>
              </div>
          </div>

      </div>
  )
}

export default HomePage