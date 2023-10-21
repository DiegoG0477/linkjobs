import ButtonSearch from "./ButtonSearch";
import InputSearch from "./InputSearch";
import "./styles.css";
function Nav() {
  return (
    <div className="nav__container">
      <div>
        <InputSearch />
      </div>
      <ButtonSearch text="Buscar empleo"/>
    </div>
  );
}

export default Nav;
