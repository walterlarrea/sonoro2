import React, { useState, useEffect, useLayoutEffect } from 'react';
import Image from 'next/image';

const TextSizeChange = () => {
  const [textSize, setTextSize] = useState(16); // Tamaño de fuente por defecto

  const handleTextSizeChange = (newSize) => {
    // Limitar el tamaño máximo a 19 y el mínimo a 13
    if (newSize >= 13 && newSize <= 19) {
      setTextSize(newSize);
    }
  };

  useEffect(() => {
    document.documentElement.style.fontSize = `${textSize}px`;
  }, [textSize]);

  useLayoutEffect(() => {
    document.documentElement.style.fontSize = `${textSize}px`;
  }, []);

  return (
    <div className="flex items-center mr-1">
      <Image
        src="/images/aumentarNew.png"
        alt=""
        width={42}
        height={42}
        className="mr-2 cursor-pointer text-white border rounded-full"
        onClick={(e) => {
          e.preventDefault();
          handleTextSizeChange(textSize + 0.5);
        }}
      />
      <Image
        src="/images/disminuirNew.png"
        alt=""
        width={42}
        height={42}
        className="cursor-pointer text-white border rounded-full"
        onClick={(e) => {
          e.preventDefault();
          handleTextSizeChange(textSize - 0.5);
        }}
      />
    </div>
  );
};

export default TextSizeChange;
