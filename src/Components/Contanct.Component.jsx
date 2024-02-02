import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

const ContactComponent = () => {
  return (
    <div className="mb-20">
      <div>
        <div className="flex justify-center my-20 text-3xl">
          <p className="border-b-8 border-b-blue-600 rounded-xl">Contact</p>
        </div>
        <div className="flex flex-row justify-center gap-16">
          <a
            href="https://www.linkedin.com/in/carlos-daniel-herrera-calero-5b13b8256/"
            className="transform hover:scale-150 transition-transform"
          >
            <FaLinkedin size={52} />
          </a>
          <a
            href="https://www.instagram.com/future_front_carl13/"
            className="transform hover:scale-150 transition-transform"
          >
            <FaInstagram size={52} />
          </a>
          <a
            href="https://github.com/carlosherrer"
            className="transform hover:scale-150 transition-transform"
          >
            <DiGithubBadge size={52} />
          </a>
          <a
            href="https://wa.link/d8djo6"
            className="transform hover:scale-150 transition-transform"
          >
            <FaWhatsapp size={52} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
