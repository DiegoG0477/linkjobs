"use client";
import Img from "next/image";
import { useEffect, useState } from "react";
import "@/app/globals.css"

export default function JobCard(props) {
  const [vacantType, setVacantType] = useState(false);
  const [genericType,setGenericType]= useState(false);
  const [statusColor, setStatusColor] = useState("#083CAE");

  useEffect(() => {
    if (props.type === "vacant") {
      setVacantType(true);
    }else if(props.type === "generic"){
      setGenericType(true);
    }

    if (props.requests == "Aceptado") {
      setStatusColor("#4BC76D");
    } else if (props.requests == "Rechazado") {
      setStatusColor("#C73737");
    }
  });

  return (
    <>
      <div className="job-card">
        <div>
          <p className="job-date">{props.sinceDate}</p>
          <h3 className="job-vacant">{props.vacant}</h3>
          <p>{props.salary}</p>

          <h3 className="job-vacant">{props.company}</h3>
          <p>{props.location}</p>

          <p style={{ marginTop: "5vh" }}>{props.description}</p>
        </div>


        <div>
          {genericType ? (
              <>
                <button className="show-requests-button" data-bs-toggle="modal" data-bs-target="#mimodal"><p>Postularme</p></button>
                <div>
                  <Img src={props.image} width={100} height={100} className="position_logo" alt="" />
                </div>
              </>
          ) : (
              <>
                {vacantType ? (
                    <>
                      <p style={{ fontWeight: "bolder" }}>Solicitudes</p>
                      <div className="requests-number-box">
                        <p>{props.requests}</p>
                      </div>
                    </>
                ) : (
                    <>
                      <p style={{ fontWeight: "bolder" }}>STATUS</p>
                      <div
                          style={{ background: { statusColor } }}
                          className="request-status"
                      >
                        <p className ="request-status-text">{props.requests}</p>
                      </div>
                    </>
                )}
                <div>
                  <Img src={props.image} width={100} height={100} className="company-logo" alt="" />
                </div>

                <button className="show-requests-button">{vacantType ? (<p>Ver Postulados</p>) : (<p>Ver Detalles</p>)}</button>
              </>
          )}
        </div>

      </div>
    </>
  );
}
