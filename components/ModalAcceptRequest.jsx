"use client";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2'
function ModalAcceptRequest(props) {
    const [workers,setWorkers] = useState([])
    const puesto = props.id;
    const router = useRouter();
    useEffect(() => {
        getEmpleados();
      }, []);
    const getEmpleados = async () =>{
        try{
          const response = await axios.get(`http://localhost:3001/api/v1/jobs/requests/${puesto}`, {withCredentials: true});
           setWorkers(response.data.data);
        }catch(error){
          console.log(error);
        }
    }
    const acceptWorker = async (status,id_aplicante) =>{
      const request ={
        id_puesto: puesto,
        id_aplicante: id_aplicante,
        status: status
      }
      await axios.patch("http://localhost:3001/api/v1/jobs",request, {withCredentials: true})
     
     if(status == "Aceptado"){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Empleado Aceptado',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Empleado Rechazado',
        showConfirmButton: false,
        timer: 1500
      })
    }
    router.refresh();
  } 
  return (
      <div
        className="modal fade"
        id={`mimodal2_${props.id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Aceptar Empleados
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
              <div className="modal-body">
                    <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Curriculum</th>
                        <th scope="col">Status</th>
                        <th scope="col">Accion</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        workers.map((worker,index) => (
                            <tr key={index}>
                              <th scope="row">{worker.id_aplicante}</th>
                              <td>{worker.curriculum}</td>
                              <td>{worker.status}</td>
                              <td>
                                <button className="btn btn-success" onClick={()=>{
                                  acceptWorker("Aceptado",worker.id_aplicante)
                                }} data-bs-dismiss="modal"
                                aria-label="Close">Aceptar</button>
                                <button className="btn btn-danger" onClick={()=>{
                                  acceptWorker("Rechazado",worker.id_aplicante)
                                }} data-bs-dismiss="modal"
                                aria-label="Close">Rechazar</button>
                              </td> 
                            </tr>
                        ))
                      }
                    </tbody>
                  </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
              </div>
          </div>
        </div>
      </div>
  )
}

export default ModalAcceptRequest