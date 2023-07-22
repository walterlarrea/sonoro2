import Image from "next/image";
import React from "react";

export default function Header() {
  const headerOpacity = ""; // Ajustar la opacidad del Header según el contexto.

  return (
    <div className={`sticky top-0 z-50 flex flex-row items-center justify-between p-3 ${headerOpacity}`}>
      <div className="hidden flex-row items-center space-x-4 px-5 sm:flex">
        <Image src='/images/icon.png' width={64} height={64} alt="Logo" />
      </div>
      <div className="flex flex-row items-center space-x-4 px-5 sm:hidden">
        {/* Iconos y botones... */}
      </div>
      <div className="flex flex-row items-center space-x-2 px-5">
        <button
          className="rounded-full px-4 py-2 text-sm font-semibold text-gray-200 transition duration-300 hover:bg-white hover:text-black"
        >
          Login
        </button>
      </div>
    </div>
  );
}