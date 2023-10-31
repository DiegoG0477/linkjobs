'use client';
import Link from "next/link";
import ButtonSearch from "./ButtonSearch";
import InputSearch from "./InputSearch";
import "./styles.css";
import Img from "next/image";
import imagen from "@/public/assets/casa.png";
import axios from "axios";

function Nav() {
  const handleLogout = async (e) => {
    // e.preventDefault();
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.get(`http://localhost:3001/api/v1/auth/logout`);
      console.log(response);
      router.push('/jobs');
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="nav__container">
      <div className="img_nav">
        <Link href="/jobs">
          <Img src={imagen} width={60} height={60} alt="home" />
        </Link>
      </div>
      <div>
        <InputSearch />
      </div>
      <ButtonSearch text="Buscar empleo" />
      <Link href="/jobs/requests" className="decoration">
        <p className="under">Mis solicitudes de empleo</p>
      </Link>
      <Link href="/jobs/vacants" className="decoration">
        <p className="under">Mis vacantes publicadas</p>
      </Link>
      <Link href="/jobs/publicarvacante" className="decoration">
        <p className="under">Publicar vacante</p>
      </Link>

      <button className="logout-box" onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
}

export default Nav;
