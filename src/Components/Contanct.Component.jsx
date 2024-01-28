import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

const ContanctComponent = () => {
  return (
    <div className="mb-20">
      <div>
        <div className="flex justify-center my-20 text-3xl">
          <p className="border-b-8 border-b-blue-600 rounded-xl">Contact</p>
        </div>
        <div className="flex flex-row justify-center gap-16">
          <FaLinkedin size={52} />
          <FaInstagram size={52} />
          <DiGithubBadge size={52} />
        </div>
      </div>
    </div>
  );
};

export default ContanctComponent;
