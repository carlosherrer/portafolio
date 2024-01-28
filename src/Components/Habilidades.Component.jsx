import React from "react";
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
      <div class="grid grid-rows-4 grid-flow-col gap-20 justify-center">
        <div className="flex gap-2">
          <DiReact className="text-4xl" />
          <p className="mt-1">React</p>
        </div>
        <div className="flex gap-2">
          <TbBrandReactNative className="text-4xl" />
          <p className="mt-1">React Native</p>
        </div>
        <div className="flex gap-2">
          <DiJsBadge className="text-3xl" />
          <p className="mt-1">JavaScript</p>
        </div>
        <div className="flex gap-2">
          <DiAngularSimple className="text-3xl" />
          <p className="mt-0.5">Angular</p>
        </div>
        <div className="flex gap-2">
          <DiCss3Full className="text-3xl" />
          <p>CSS</p>
        </div>
        <div className="flex gap-2">
          <SiTailwindcss className="text-3xl" />
          <p className="mt-0.5">Tailwind</p>
        </div>
        <div className="flex mt-2 gap-2">
          <DiJava className="text-3xl" />
          <p>Java</p>
        </div>
        <div className="flex gap-2">
          <img src={Codingbg} alt="icon c#" className="w-8" />
          <p className="mt-1">C#</p>
        </div>
        <div className="flex gap-2">
          <DiNodejsSmall className="text-3xl" />
          <p className="mt-0.5">NodeJs</p>
        </div>
        <div className="flex gap-1">
          <DiMsqlServer className="text-3xl" />
          <p className="mt-0.5">SQLServer</p>
        </div>
        <div className="flex gap-1">
          <DiMongodb className="text-3xl" />
          <p className="mt-0.5">MongoDB</p>
        </div>
        <div className="flex gap-2">
          <DiGithubBadge className="text-3xl" />
          <p className="mt-0.5">GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default HabilidadesComponent;
