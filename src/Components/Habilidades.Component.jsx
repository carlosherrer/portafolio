import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
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
  const [toggle, setToggle] = useState(true);

  const props = useSpring({
    opacity: toggle ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 3000 }, // Ajusta la duración según tus preferencias
    onRest: () => setToggle(!toggle), // Cambia el estado después de que la animación se complete
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle(true);
    }, 5000);

    return () => clearInterval(interval);
  }, [toggle]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center my-20 text-3xl">
        <p className="border-b-8 border-b-blue-600 rounded-xl">Habilidades</p>
      </div>
      <animated.div style={props} className="grid grid-rows-4 grid-flow-col gap-20 justify-center">
        <animated.div className="flex gap-2">
          <DiReact className="text-4xl" />
          <p className="mt-1">React</p>
        </animated.div>
        <animated.div className="flex gap-2">
          <TbBrandReactNative className="text-4xl" />
          <p className="mt-1">React Native</p>
        </animated.div>
        <animated.div className="flex gap-2">
          <DiJsBadge className="text-3xl" />
          <p className="mt-1">JavaScript</p>
        </animated.div>
        <animated.div className="flex gap-2">
          <DiAngularSimple className="text-3xl" />
          <p className="mt-0.5">Angular</p>
        </animated.div>
        <animated.div className="flex gap-2">
          <DiCss3Full className="text-3xl" />
          <p>CSS</p>
        </animated.div>
        <animated.div className="flex gap-2">
          <SiTailwindcss className="text-3xl" />
          <p className="mt-0.5">Tailwind</p>
        </animated.div>
        <animated.div className="flex mt-2 gap-2">
          <DiJava className="text-3xl" />
          <p>Java</p>
        </animated.div>
        <animated.div className="flex gap-2">
          <img src={Codingbg} alt="icon c#" className="w-8" />
          <p className="mt-1">C#</p>
        </animated.div>
        <animated.div className="flex gap-2">
          <DiNodejsSmall className="text-3xl" />
          <p className="mt-0.5">NodeJs</p>
        </animated.div>
        <animated.div className="flex gap-1">
          <DiMsqlServer className="text-3xl" />
          <p className="mt-0.5">SQLServer</p>
        </animated.div>
        <animated.div className="flex gap-1">
          <DiMongodb className="text-3xl" />
          <p className="mt-0.5">MongoDB</p>
        </animated.div>
        <animated.div className="flex gap-2">
          <DiGithubBadge className="text-3xl" />
          <p className="mt-0.5">GitHub</p>
        </animated.div>
      </animated.div>
    </div>
  );
};

export default HabilidadesComponent;
