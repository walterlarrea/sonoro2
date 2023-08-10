import React from "react";
import { useTranslation } from "next-i18next";
export default function LoginForm({ setTypeScreen }) {
  const {t} = useTranslation();
	return (

<>
<form className="space-y-4 md:space-y-6" action="#">
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium  dark:text-white">
          {t('login.email')}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium  dark:text-white">
        {t('login.password')}
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="remember" className="text-gray-500 ">
            {t('login.rem')}
            </label>
          </div>
        </div>
        <a href="#" className="ml-2 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
        {t('login.recoveryPassword')}
        </a>
      </div>
      <button
        type="submit"


        className="w-full text-white bg-blue-300 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 rounded shadow"
      >
        {t('login.enterButton')}
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
      {t('login.haveAccountAnswer')}{' '}
        <a onClick={() => setTypeScreen(0)} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
        {t('login.registerEnter')}
        </a>
      </p>
    </form>
</>
)
}