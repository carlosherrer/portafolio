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
        <p className="transform hover:scale-150 transition-transform">Home</p>
        <p className="transform hover:scale-150 transition-transform">Habilidades</p>
        <p className="transform hover:scale-150 transition-transform">Projects</p>
        <p className="transform hover:scale-150 transition-transform">Experiences</p>
        <p className="transform hover:scale-150 transition-transform">Contact</p>
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
