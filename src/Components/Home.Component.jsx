import Codingbg from "../assets/codingbg.png";
import React, { useEffect, useState } from 'react';

const HomeComponent = () => {
  const [displayText, setDisplayText] = useState(['', '', '']);

  useEffect(() => {
    const typingSpeed = 90;
    const timeouts = [];

    const text = ['👨‍💻💁 ¡Hola!, soy', 'Carlos 😎', '<>Desarrollador Web</>'];

    const displayLines = text.map((line) => ({ content: line, displayContent: '' }));

    text.forEach((line, lineIndex) => {
      [...line].forEach((char, charIndex) => {
        timeouts.push(
          setTimeout(() => {
            displayLines[lineIndex].displayContent += char;
            setDisplayText([...displayLines.map((l) => l.displayContent)]);
          }, typingSpeed * (lineIndex + charIndex))
        );
      });
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="grid grid-cols-2 mt-32 mb-20">
      <div className="mt-24 text-end grid">
        <p className="text-4xl -mb-6" dangerouslySetInnerHTML={{ __html: displayText[0] }}></p>
        <p className="font-bold text-5xl -mb-6" dangerouslySetInnerHTML={{ __html: displayText[1] }}></p>
        <p className="text-green-500 text-4xl" dangerouslySetInnerHTML={{ __html: displayText[2] }}></p>
      </div>
      <div className="flex justify-center">
        <img src={Codingbg} alt="codingbg" />
      </div>
    </div>
  );
};

export default HomeComponent;
