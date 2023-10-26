import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
function ModalRequest(props) {
  const [text, setText] = useState("");
  const maxCharacters = 200;
  const [request, setRequest] = useState({
    id_puesto:  props.id,
    curriculum: ""
  });
  const handleChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= maxCharacters) {
      setText(inputText)
      setRequest({
        id_puesto: props.id,
        curriculum: inputText,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     if(!text || !props.id){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Llena todos los campos!'
          })
    }else{
        console.log(request);
        axios.post("http://localhost:3001/api/v1//jobs/apply/7", request);
    }
}

  return (
    <div>
      <div
        className="modal fade"
        id={`mimodal_${props.id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                ¿Por qué soy el indicado para este puesto?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <label htmlFor="mensaje">Tu información debe ser clara:</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  cols="40"
                  onChange={handleChange}
                ></textarea>
                <p>Caracteres restantes: {maxCharacters - text.length}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalRequest;
