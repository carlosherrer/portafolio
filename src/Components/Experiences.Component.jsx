import React from "react";

const ExperiencesComponent = () => {
  return (
    <div className="mb-20 mt-52">
      <div>
        <div className="flex justify-center my-20 text-3xl">
          <p className="border-b-8 border-b-blue-600 rounded-xl">Experiences</p>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <div className="flex flex-col text-right gap-20">
            <p>Devdatep Consulting</p>
            <p>Pachas Parrillas</p>
            <p>Las Gambusinas</p>
          </div>
          <div className="text-left flex flex-col gap-12">
            <p>texto de Devdatep</p>
            <p>texto de pachas</p>
            <p>texto de gambusinas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesComponent;
