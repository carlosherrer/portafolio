import React from "react";
import HomeComponent from "../Components/Home.Component";
import HabilidadesComponent from "../Components/Habilidades.Component";
import ExperiencesComponent from "../Components/Experiences.Component";
import ProjectsComponent from "../Components/Projects.Component";
import ContanctComponent from "../Components/Contanct.Component";

const Home = () => {
  return (
    <div>
      <div className="w-full bg-transparent flex justify-end gap-10 p-6">
        <p>Home</p>
        <p>Habilidades</p>
        <p>Projects</p>
        <p>Experiences</p>
        <p>Contact</p>
      </div>
      <HomeComponent />
      <HabilidadesComponent />
      <ProjectsComponent />
      <ExperiencesComponent />
      <ContanctComponent/>
    </div>
  );
};

export default Home;
