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
            {selectedExperience === "Gambusinas" && <p>Texto de Gambusinas</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesComponent;
