import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

const TypewriterText = ({
  text,
  delay = 0,
  speed = 50,
  className = '',
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    let timeout: ReturnType<typeof setInterval>;

    const startTyping = () => {
      timeout = setInterval(() => {
        if (currentIndex < text.length) {
          currentText += text[currentIndex];
          setDisplayedText(currentText);
          currentIndex++;
        } else {
          clearInterval(timeout);
        }
      }, speed);
    };

    const initialDelay = setTimeout(startTyping, delay);

    return () => {
      clearInterval(timeout);
      clearTimeout(initialDelay);
    };
  }, [text, delay, speed]);

  return <span className={className}>{displayedText}</span>;
};

export default TypewriterText;