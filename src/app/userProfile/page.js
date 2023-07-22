import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
const Profile = () => {
  return (

    <div className='max-h-screen overflow-hidden flex flex-col'>
            <Header />
            <div className='flex-grow overflow-y-auto mx-4'>
              <div className='flex h-full'>
                <Sidebar />
                <div className='flex-grow'>




{/* comienza componente userProfile  */}





    <div className="bg-white max-w-full shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Perfil de usuario:
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Detalles de usuario.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Nombre completo
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Nicolás García
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
             Email
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              nicolasg99dr@gmail.com
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
             Telefono
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              094272390
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Sobre ti:
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Soy programeitor
            </dd>
          </div>
       
        </dl>
      </div>
    </div>


{/* Termina componente userProfile  */}

    </div>
              </div>
            </div>
          </div>
  );
};

export default Profile;
