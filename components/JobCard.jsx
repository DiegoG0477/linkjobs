import Img from "next/image";
import zumayaLogo from "@/public/assets/zumaya-img.png";

export default function JobCard(props) {
  return (
    <>
      <div className="job-card">
        <div>
          <p className="job-date">Hace n días</p>
          <h3 className="job-vacant">Puesto promocionado</h3>
          <p>Salario</p>

          <h3 style={{ marginTop: "7vh" }} className="job-vacant">
            Empresa
          </h3>
          <p>Ubicación</p>

          <p style={{ marginTop: "5vh" }}>texto adicional complementario</p>
        </div>

        <div>
          <p style={{ fontWeight: "bolder" }}>Solicitudes</p>
          <div className="requests-number-box">
            <p>12439</p>
          </div>

          <div>
            {" "}
            <Img src={zumayaLogo} alt="" style={{ marginTop: "5vh" }} />
          </div>

          <button style={{ marginTop: "8vh" }} className="show-requests-button">
            Ver Postulados
          </button>
        </div>
      </div>
    </>
  );
}
