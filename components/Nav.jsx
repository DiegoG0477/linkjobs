import ButtonSearch from "./ButtonSearch";
import InputSearch from "./InputSearch";
import "./styles.css";
import Link from "next/link";
function Nav() {
  return (
    <div className="nav__container">
      <div>
        <InputSearch />
      </div>
      <Link href="/jobs/vacants">
        <ButtonSearch text="Buscar empleo" />
      </Link>

      <div>
        <Link href="/jobs/requests">Mis solicitudes</Link>
        <Link href="/jobs/vacants">Mis vacantes</Link>
      </div>
    </div>
  );
}

export default Nav;
