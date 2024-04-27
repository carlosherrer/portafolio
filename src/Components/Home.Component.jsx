import Codingbg from "../assets/codingbg.png";
import React, { useEffect, useState, useCallback } from 'react';

const HomeComponent = () => {
  const [displayText, setDisplayText] = useState(['', '', '']);

  const startTypingAnimation = useCallback(() => {
    const typingSpeed = 90;
    const text = ['👨‍💻💁 ¡Hola!, soy', 'Carlos 😎', '<> Desarrollador Web </>'];
    const displayLines = text.map(() => ({ displayContent: '' }));

    const timeouts = [];

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

    timeouts.push(
      setTimeout(() => {
        setDisplayText(['', '', '', '', '', '']); // Reiniciar el texto después de un intervalo
        startTypingAnimation(); // Iniciar la animación nuevamente
      }, typingSpeed * text.reduce((acc, line) => acc + line.length, 0) + 1000) // Intervalo de 1 segundo después de completar la animación
    );

    return timeouts;
  }, []); // Asegúrate de incluir todas las dependencias necesarias en este array

  useEffect(() => {
    const animationTimeouts = startTypingAnimation();

    return () => {
      animationTimeouts.forEach(clearTimeout);
    };
  }, [startTypingAnimation]);

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
