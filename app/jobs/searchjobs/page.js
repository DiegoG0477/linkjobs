'use client';
import React, { useState, useEffect } from "react";
import JobCard from "@/components/JobCard";
import zumayaLogo from "@/public/assets/zumaya-img.png";
import "@/app/globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa el archivo JavaScript de Bootstrap (asegúrate de que sea bootstrap.bundle.min.js para que incluya Popper.js)
import axios from "axios";
export default function SearchPage() {
    const [vacantGeneral, setVacantGeneral] = useState([]);
    useEffect(() => {
        loadVacantGeneral();
    },[]);
    const loadVacantGeneral = async () => {
        const response = await axios.get("http://localhost:3001/api/v1/jobs");
        setVacantGeneral(response.data.data);
        console.log(response.data.data)
    }
    const totalCards = 5; // Total de tarjetas
    const cardsPerGroup = 12; // Cantidad de tarjetas por grupo
    const [currentGroup, setCurrentGroup] = useState(1);
    const previousGroup = currentGroup - 1;
    const nextGroup = currentGroup + 1;
    const startCard = (currentGroup - 1) * cardsPerGroup;
    const endCard = currentGroup * cardsPerGroup;
    const [text, setText] = useState("");
    const maxCharacters = 200;

    const handleChange = (e) => {
        const inputText = e.target.value;
        if (inputText.length <= maxCharacters) {
            setText(inputText);
        }
    };


    const cardsToShow = vacantGeneral.map((vacant, index) => {
        if (index >= startCard && index < endCard) {
            return (
                <JobCard
                    key={index}
                    sinceDate="Hace 2 días"
                    vacant={vacant.puesto}
                    salary={vacant.salario}
                    company={vacant.empresa}
                    location={vacant.ubicacion}
                    requests="9876"
                    description={vacant.descripcion}
                    image={vacant.img_empresa}
                    type="generic"
                />
                
            );
        }
        return null;
    });

    const handleNextGroup = () => {
        if (currentGroup < Math.ceil(totalCards / cardsPerGroup)) {
            setCurrentGroup(currentGroup + 1);
        }
    };

    const handlePreviousGroup = () => {
        if (currentGroup > 1) {
            setCurrentGroup(currentGroup - 1);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentGroup]);

    return (
        <div>
            <h1 className="page-title">Resultados de la busqueda</h1>
            <div className="contain_search"  >
                {cardsToShow}
                
            </div>
            <div className="contain_navigate">
                <button className="button_navigate" onClick={handlePreviousGroup} disabled={currentGroup === 1}>
                    Anterior
                </button>
                <div className="page-counter">
                    <span className={previousGroup > 0 ? 'page-number' : ''}>{previousGroup > 0 ? previousGroup : ''}</span>
                    <span className={`page-number current-page`}>{currentGroup}</span>
                    <span className={nextGroup <= Math.ceil(totalCards / cardsPerGroup) ? 'page-number' : ''}>{nextGroup <= Math.ceil(totalCards / cardsPerGroup) ? nextGroup : ''}</span>
                </div>
                <button className="button_navigate" onClick={handleNextGroup} disabled={currentGroup === Math.ceil(totalCards / cardsPerGroup)}>
                    Siguiente
                </button>
            </div>


            

            <div className="modal fade " id="mimodal" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">¿Por que soy el indicado para este puesto?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <label htmlFor="mensaje">tu informacion debe ser clara </label>
                                <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    rows="5"
                                    cols="40"
                                    value={text}
                                    onChange={handleChange}
                                ></textarea>
                                <p>Caracteres restantes: {maxCharacters - text.length}</p>
                            </div>                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
