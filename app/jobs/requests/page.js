'use client';
import React, { useState, useEffect } from "react";
import JobCard from "@/components/JobCard";
import zumayaLogo from "@/public/assets/zumaya-img.png";
import "@/app/globals.css";
import axios from "axios";
export default function Requests() {

    const [requests, setRequests] = useState([]);
    useEffect(() => {
        getRequests();
      }, []);

    const getRequests = async () => {
        const response = await axios.get("http://localhost:3001/api/v1/jobs/workers/requests",{withCredentials: true})
         setRequests(response.data.data);
    }


    const totalCards = 5; // Total de tarjetas
    const cardsPerGroup = 12; // Cantidad de tarjetas por grupo
    const [currentGroup, setCurrentGroup] = useState(1);
    const previousGroup = currentGroup - 1;
    const nextGroup = currentGroup + 1;
    const startCard = (currentGroup - 1) * cardsPerGroup;
    const endCard = currentGroup * cardsPerGroup;

    const cardsToShow = requests.map((request, index) => {
        if (index >= startCard && index < endCard) {
            return (
                <JobCard
                    key={index}
                    sinceDate="Hace 2 días"
                    vacant={request.puesto}
                    salary={request.salario}
                    company={request.empresa}
                    location={request.ubicacion}
                    requests={request.status}
                    image={request.img_empresa}
                    type="requests"
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
            <h1 className="page-title">Mis solicitudes</h1>
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
        </div>
    );
}
