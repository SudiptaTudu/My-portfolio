import React, { useState, useEffect } from 'react';

const TypewriterLetter = ({ letter, delay }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return <span className={visible ? 'visible' : 'hidden'}>{letter}</span>;
};

const TypewriterText = ({ text, letterDelay }) => {
  const letters = text.split('');

  return (
    <div>
      {letters.map((letter, index) => (
        <TypewriterLetter key={index} letter={letter} delay={index * letterDelay} />
      ))}
    </div>
  );
};

export default TypewriterText;
