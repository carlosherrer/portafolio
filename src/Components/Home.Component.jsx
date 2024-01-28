import React from "react";
import Codingbg from "../assets/codingbg.png";

const HomeComponent = () => {
  return (
    <div className="grid grid-cols-2 mt-32 mb-20">
      <div className="mt-24 text-end">
        <p className="text-4xl mb-6">👨‍💻💁 ¡Hola!, soy</p>
        <p className="font-bold text-5xl mb-6">Carlos 😎</p>
        <p className="text-green-500 text-4xl">
          &lt;&gt;Desarrollador Web&lt;/&gt;
        </p>
      </div>
      <div className="flex justify-center">
        <img src={Codingbg} alt="codingbg" />
      </div>
    </div>
  );
};

export default HomeComponent;
