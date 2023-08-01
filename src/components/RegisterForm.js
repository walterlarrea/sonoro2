
import React from "react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';


export default function RegisterForm({ setTypeScreen }) {

  const [registerFormData ,setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""  
  })

  const {t} = useTranslation();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setRegisterFormData({ ...registerFormData, [id]: value });
  };
  

 const handleSubmit = async (e) => {
  e.preventDefault();


  try{

  const response = await fetch('http://localhost:3333/create/users/', {
    method:'POST',
    headers: {"Content-type":"application/json"},
    body: JSON.stringify(registerFormData)
  });

  if (response.ok) {
    console.log("Usuario registrado exitosamente.");
  } else {
    console.error("Error al registrar el usuario.");
  }
} catch (error) {
  console.error("Error al realizar la solicitud:", error);
}


 }


 	return (



<>

<form className="max-w-lg" onSubmit={handleSubmit}>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
        {t('register.name')}
      </label>
      <input className="appearance-none block w-full
       bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-nonefocus:bg-white" id="name" value={registerFormData.name} onChange={handleChange} type="text" placeholder="Jane" />
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
      {t('register.email')}
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" value={registerFormData.email} onChange={handleChange} type="email" placeholder="nombre@example.com" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
      {t('register.password')}
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" value={registerFormData.password} onChange={handleChange} type="password" placeholder="******************" />
      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="rpassword">
      {t('register.password-repeat')}
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="rpassword" type="password" placeholder="******************" />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
      {t('register.phone')}
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" value={registerFormData.phone} onChange={handleChange} type="tel" placeholder="094 653 821" />
    </div>
  </div>

 
  <button  type='submit' className="px-4 py-2 mt-4 text-white bg-blue-300 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 rounded shadow">
{t('register.registerButton')}
    </button>

</form>



    <a onClick={() => setTypeScreen(1)} class="mt-6 underline hover:text-blue-600">{t('register.haveUser')}</a>
   

</>
)
}