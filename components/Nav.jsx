import Link from "next/link";
import ButtonSearch from "./ButtonSearch";
import InputSearch from "./InputSearch";
import "./styles.css";
import Img from "next/image"
import imagen from "@/public/assets/casa.png"

function Nav() {
  return (
    <div className="nav__container">
      <div className="img_nav">
      <Link href="/jobs">
        <Img src={imagen} width={60} height={60} alt="home"/>
      </Link>
      </div>
      <div>
        <InputSearch />
      </div>
      <ButtonSearch text="Buscar empleo"/>
      <Link href="/jobs/requests" className="decoration">
      <p className="under">Mis solicitudes de empleo</p>
      </Link>
      <Link href="/jobs/vacants" className="decoration">
      <p className="under">Mis vacantes publicadas</p>
      </Link>
      <Link href="/jobs/publicarvacante" className="decoration">
      <p className="under">Publicar vacante</p>
      </Link>
    </div>
  );
}

export default Nav;
