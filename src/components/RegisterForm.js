import React from "react";
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function RegisterForm({ setTypeScreen }) {
  const { t } = useTranslation();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    rpassword: "",
    phone: ""
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(t('register.nameRequired')),
    email: Yup.string().email(t('register.emailInvalid')).required(t('register.emailRequired')),
    password: Yup.string().min(6, t('register.passwordMinLength')).required(t('register.passwordRequired')),
    //rpassword: Yup.string().oneOf([Yup.ref('password'), null], t('register.passwordMatch')).required(t('register.rpasswordRequired')),
    phone: Yup.string().required(t('register.phoneRequired'))
  });

  const handleSubmit = async (values) => {
    try {
      const response = await fetch('http://localhost:3333/create/users/', {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        console.log("Usuario registrado exitosamente.");
      } else {
        console.error("Error al registrar el usuario.");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
              {t('register.name')}
            </label>
            <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" name="name" type="text" placeholder="Jane" />
            <ErrorMessage className="text-red-500 text-xs italic" name="name" component="div" />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
              {t('register.email')}
            </label>
            <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" name="email" type="email" placeholder="nombre@example.com" />
            <ErrorMessage className="text-red-500 text-xs italic" name="email" component="div" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
              {t('register.password')}
            </label>
            <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" name="password" type="password" placeholder="******************" />
            <ErrorMessage className="text-red-500 text-xs italic" name="password" component="div" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="rpassword">
              {t('register.password-repeat')}
            </label>
            <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="rpassword" name="rpassword" type="password" placeholder="******************" />
            <ErrorMessage className="text-red-500 text-xs italic" name="rpassword" component="div" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
              {t('register.phone')}
            </label>
            <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" name="phone" type="tel" placeholder="094 653 821" />
            <ErrorMessage className="text-red-500 text-xs italic" name="phone" component="div" />
          </div>
        </div>
        <button type='submit' className="px-4 py-2 mt-4 text-white bg-blue-300 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 rounded shadow">
          {t('register.registerButton')}
        </button>
      </Form>
    </Formik>
  );
}
