import React from "react";
import JobCard from "@/components/JobCard";

export default function VacantsPage() {
  return (
    <>
      <h1 className="page-title">Mis Vacantes</h1>

      <JobCard/>
      <JobCard/>
      <JobCard/>
    </>
  );
}
