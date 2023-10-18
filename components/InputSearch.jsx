import "./styles.css";
import Img from "next/image";
import imagen from "@/public/assets/lupa.png";
function InputSearch() {
  return (
    <div className="inputSearch__container">
      <input className="input-search" placeholder="BUSCAR" />
      <Img src={imagen} alt="lupa" width={20} height={20} className="input-icon"/>
    </div>
  );
}

export default InputSearch;
