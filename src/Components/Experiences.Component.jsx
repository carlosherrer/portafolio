import React, { useState } from "react";

const ExperiencesComponent = () => {
  const [selectedExperience, setSelectedExperience] = useState("Devdatep");

  const handleExperienceClick = (experience) => {
    setSelectedExperience(experience);
  };

  return (
    <div className="mb-20 mt-52">
      <div>
        <div className="flex justify-center my-20 text-3xl">
          <p className="border-b-8 border-b-blue-600 rounded-xl">Experiences</p>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <div className="flex flex-col text-right gap-20">
            <div>
              <p
                onClick={() => handleExperienceClick("Devdatep")}
                className={
                  selectedExperience === "Devdatep" 
                    ? "selected-experience" 
                    : ""}
                  class="cursor-pointer text-2xl font-bold">
                Devdatep Consulting
              </p>
            </div>
            <div>
              <p
                onClick={() => handleExperienceClick("Pachas")}
                className={
                  selectedExperience === "Pachas" 
                    ? "selected-experience" 
                    : ""}
                  class="cursor-pointer">
                Pachas Parrillas
              </p>
            </div>
            <div>
              <p
                onClick={() => handleExperienceClick("Gambusinas")}
                className={
                  selectedExperience === "Gambusinas"
                    ? "selected-experience"
                    : ""}
                  class="cursor-pointer">
                Las Gambusinas
              </p>
            </div>
          </div>
          <div className="text-left flex flex-col gap-12">
            {selectedExperience === "Devdatep" && <p>Texto de Devdatep</p>}
            {selectedExperience === "Pachas" && <p>Texto de Pachas</p>}
            {selectedExperience === "Gambusinas" && 
              <p>
                <p>
                <h1 className="text-2xl font-bold">Desarrollador Full Stack</h1>
                <h3 className="mt-6 grid gap-4 text-lg">
                  <p>Lideré el diseño, desarrollo y implementación de una aplicación integral de gestión de pedidos, específicamente diseñada para optimizar las operaciones en entornos de cocina y servicios de restaurante.</p>
                  <p>Desarrollo de la aplicación con tecnologias tales como React, React Native, TailwindCSS, ExpressJS, MongoDBAtlas y Figma</p>
                  <p>Optimización del desarrollo usando la metodología SCRUM</p>
                </h3>
                </p>
                <p>
                <h1 className="mt-10 text-2xl font-bold">Asistente de Mesero</h1>
                <h3 className="mt-6 grid gap-4 text-lg">
                  <p>Atención al cliente, toma de pedidos y servicio de alimentos y bebidas.</p>
                  <p>Preparación y disposición de mesas antes y después del servicio.</p>
                  <p>Mantenimiento de la limpieza y orden en el área de trabajo.</p>
                  <p>Colaboración con el equipo para garantizar una experiencia satisfactoria para el cliente</p>
                </h3>
              </p>
              </p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesComponent;
