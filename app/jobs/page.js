import React from 'react'
import Img from "next/image";
import ImgHome from "@/public/assets/busqueda_trabajo_asesoramiento.webp"
import ImgVacant from "@/public/assets/istockphoto-1070456274-170667a.jpg"
import "./home.css"
import ButtonSearch from "@/components/ButtonSearch";
import BBVA from "@/public/assets/bbva.png"
import Chedraui from "@/public/assets/chedraui.svg.png"
import Lala from "@/public/assets/lala.png"
import Nestle from "@/public/assets/nestle.png"
import Sambors from "@/public/assets/sanborns-logo.png"
import Telmex from "@/public/assets/telmex.png"

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
              <div className="contain_logos">
                  <Img src={BBVA} alt="bbva" className="Img_logos"></Img>
                  <Img src={Chedraui} alt="chedraui" className="Img_dif"></Img>
                  <Img src={Lala} alt="lala" className="Img_logos"></Img>
                  <Img src={Nestle} alt="nestle" className="Img_logos"></Img>
                  <Img src={Sambors} alt="sambors" className="Img_dif2"></Img>
                  <Img src={Telmex} alt="telmex" className="Img_dif"></Img>
              </div>
          </div>

          <div className="cocontain">
              <p className="mensaje_tres">¿Tienes una empresa?</p>
              <p className="mensaje_tres">Publica tu vacanate con nosotros</p>
              <div className="contain_cuadrito">
                  <p className="mensaje_cuatro">Encuentra al mejor empleado para tu empresa</p>
                  <div className="contain_button">
                      <ButtonSearch text="Publicar vacante" id={1}/>
                  </div>
              </div>
          </div>

      </div>
  )
}

export default HomePage