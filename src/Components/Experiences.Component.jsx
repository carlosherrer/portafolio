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
                  class="cursor-pointer">
                <p className="text-xl cursor-pointer transform hover:scale-105 transition-transform">Devdatep Consulting</p>
              </p>
            </div>
            <div>
              <p
                onClick={() => handleExperienceClick("Pachas")}
                className={
                  selectedExperience === "Pachas" 
                    ? "selected-experience" 
                    : ""}
                  >
                <p className="text-xl cursor-pointer transform hover:scale-105 transition-transform">Pachas Parrillas</p>
              </p>
            </div>
            <div>
              <p
                onClick={() => handleExperienceClick("Gambusinas")}
                className={
                  selectedExperience === "Gambusinas"
                    ? "selected-experience"
                    : ""}
                >
                <p className="text-xl cursor-pointer transform hover:scale-105 transition-transform">Las Gambusinas</p>
              </p>
            </div>
          </div>
          <div className="text-left flex flex-col gap-12">
            {selectedExperience === "Devdatep" && 
            <p>
              <p>
                <h1 className="text-lg font-bold">Co-Lider Departamento Front-End</h1>
                <ul className="mt-6 grid gap-4 text-base list-disc pl-10">
                  <li>Responsable de la gestión de proyectos.</li>
                  <li>Desarrollo de proyectos de gran escala.</li>
                  <li>Fomento de la integridad dentro del área.</li>
                  <li>Asesoramiento en diversas áreas.</li>
                  <li>Generación de informes detallados para respaldar la toma de decisiones estratégicas.</li>
                </ul>
              </p>
            </p>}
            {selectedExperience === "Pachas" && 
            <p>
              <p>
                <h1 className="text-lg font-bold">Administración y Gestión</h1>
                <ul className="mt-6 grid gap-4 text-base list-disc pl-10">
                  <li>Responsable de la administración y gestión integral del restaurante, incluyendo la supervisión de empleados y la gestión de insumos.</li>
                  <li>Encargado de llevar a cabo tareas de contabilidad, como el registro y análisis de cuentas, así como la gestión de pagos de impuestos.</li>
                  <li>Coordinación de actividades de mantenimiento y atención al cliente para garantizar un servicio de calidad.</li>
                </ul>
              </p>
            </p>}
            {selectedExperience === "Gambusinas" && 
              <p>
                <p>
                <h1 className="text-lg font-bold">Desarrollador Full Stack</h1>
                <ul className="mt-6 grid gap-4 text-base list-disc pl-10">
                  <li>Lideré el diseño, desarrollo y implementación de una aplicación integral de gestión de pedidos, específicamente diseñada para optimizar las operaciones en entornos de cocina y servicios de restaurante.</li>
                  <li>Desarrollo de la aplicación con tecnologias tales como React, React Native, TailwindCSS, ExpressJS, MongoDBAtlas y Figma.</li>
                  <li>Optimización del desarrollo usando la metodología SCRUM.</li>
                </ul>
                </p>
                <p>
                <h1 className="mt-10 text-lg font-bold">Asistente de Mesero</h1>
                <ul className="mt-6 grid gap-4 text-base list-disc pl-10">
                  <li>Atención al cliente, toma de pedidos y servicio de alimentos y bebidas.</li>
                  <li>Preparación y disposición de mesas antes y después del servicio.</li>
                  <li>Mantenimiento de la limpieza y orden en el área de trabajo.</li>
                  <li>Colaboración con el equipo para garantizar una experiencia satisfactoria para el cliente</li>
                </ul>
              </p>
              </p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesComponent;
