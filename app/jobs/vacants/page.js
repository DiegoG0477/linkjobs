import React from "react";
import JobCard from "@/components/JobCard";
import zumayaLogo from "@/public/assets/zumaya-img.png";

export default function VacantsPage() {
  return (
    <>
      <h1 className="page-title">Mis Vacantes</h1>

      <JobCard 
        sinceDate="Hace 2 días"
        vacant="Repartidor"
        salary="14,000"
        company="Zumaya"
        location="Tuxtla Gutiérrez, Chiapas"
        requests="9876"
        image={zumayaLogo}
        type="vacant"
      />
      <JobCard/>
      <JobCard/>
    </>
  );
}
