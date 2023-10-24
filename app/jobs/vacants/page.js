'use client';
import React, { useState, useEffect } from "react";
import JobCard from "@/components/JobCard";
import zumayaLogo from "@/public/assets/zumaya-img.png";
import "@/app/globals.css";
import { token } from "@/app/data/token";
import axios from "axios";

export default function Requests() {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        getJobs();
    },[]);

    const getJobs = async () => {
        const response = await axios.get('http://localhost:3001/api/v1/jobs');
        setJobs(response.data.data);
        console.log(jobs)
    }

    const totalCards = 7; // Total de tarjetas
    const cardsPerGroup = 6; // Cantidad de tarjetas por grupo
    const [currentGroup, setCurrentGroup] = useState(1);
    const previousGroup = currentGroup - 1;
    const nextGroup = currentGroup + 1;
    const startCard = (currentGroup - 1) * cardsPerGroup;
    const endCard = currentGroup * cardsPerGroup;

    const cardsToShow = jobs.map((job, index) => {
        if (index >= startCard && index < endCard) {
            return (
                <JobCard
                    key={index}
                    sinceDate="Hace 2 días"
                    vacant={job.puesto}
                    salary={job.salario}
                    company={job.empresa}
                    location={job.ubicacion}
                    requests="9876"
                    image={zumayaLogo}
                    type="vacant"
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
            <h1 className="page-title">Mis vacantes</h1>
            <div className="contain_search2"  >
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
