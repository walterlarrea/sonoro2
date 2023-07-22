'use client';
import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [typeScreen, setTypeScreen] = useState(0);

  return (
    <>
      <nav className="fixed top-0 right-0 bg-gray-800 p-4">
      <ul className="space-y-2 text-white">
     
        <li>
          <a href="#music" className="text-blue-300 hover:text-blue-100">Volver</a>
        </li> 
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
      <div className="bg-gray-900 flex flex-col items-center justify-center h-screen">
        <h1 className="mb-8 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-300 from-blue-600">Son</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-300 ">oro</span>
          <span className="text-white underline underline-offset-3 decoration-8 decoration-indigo-400 dark:decoration-blue-600">Team</span>
        </h1>

        {typeScreen === 0 ? <RegisterForm setTypeScreen={setTypeScreen} /> : <LoginForm setTypeScreen={setTypeScreen} />}

      </div>
    </>
  );
};

export default Login;