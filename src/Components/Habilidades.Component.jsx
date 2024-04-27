import React from 'react';
import {
  DiReact,
  DiJsBadge,
  DiCss3Full,
  DiAngularSimple,
  DiJava,
  DiNodejsSmall,
  DiMsqlServer,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import Codingbg from "../assets/csharp.svg";

const HabilidadesComponent = () => {

  return (
    <div className="flex flex-col">
      <div className="flex justify-center my-20 text-3xl">
        <p className="border-b-8 border-b-blue-600 rounded-xl">Habilidades</p>
      </div>
      <div className="grid grid-rows-4 grid-flow-col gap-20 justify-center">
        <div className="flex gap-2 transform hover:scale-150 transition-transform">
          <DiReact className="text-4xl" />
          <p className="mt-1">React</p>
        </div>
        <div className="flex gap-2 transform hover:scale-150 transition-transform">
          <TbBrandReactNative className="text-4xl" />
          <p className="mt-1">React Native</p>
        </div>
        <div className="flex gap-2 transform hover:scale-150 transition-transform">
          <DiJsBadge className="text-3xl" />
          <p className="mt-1">JavaScript</p>
        </div>
        <div className="flex gap-2 transform hover:scale-150 transition-transform">
          <DiAngularSimple className="text-3xl" />
          <p className="mt-0.5">Angular</p>
        </div>
        <div className="flex gap-2 transform hover:scale-150 transition-transform">
          <DiCss3Full className="text-3xl" />
          <p>CSS</p>
        </div>
        <div className="flex gap-2 transform hover:scale-150 transition-transform">
          <SiTailwindcss className="text-3xl" />
          <p className="mt-0.5">Tailwind</p>
        </div>
        <div className="flex mt-2 gap-2 transform hover:scale-150 transition-transform">
          <DiJava className="text-3xl" />
          <p>Java</p>
        </div>
        <div className="flex gap-2 transform hover:scale-150 transition-transform">
          <img src={Codingbg} alt="icon c#" className="w-8" />
          <p className="mt-1">C#</p>
        </div>
        <div className="flex gap-2 transform hover:scale-150 transition-transform">
          <DiNodejsSmall className="text-3xl" />
          <p className="mt-0.5">NodeJs</p>
        </div>
        <div className="flex gap-1 transform hover:scale-150 transition-transform">
          <DiMsqlServer className="text-3xl" />
          <p className="mt-0.5">SQLServer</p>
        </div>
        <div className="flex gap-1 transform hover:scale-150 transition-transform">
          <DiMongodb className="text-3xl" />
          <p className="mt-0.5">MongoDB</p>
        </div>
        <div className="flex gap-2 transform hover:scale-150 transition-transform">
          <DiGithubBadge className="text-3xl" />
          <p className="mt-0.5">GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default HabilidadesComponent;
