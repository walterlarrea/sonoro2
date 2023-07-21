
import React from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import SongCard from './components/songCard';
const Home = () => {


  return (
<div className='max-h-screen overflow-hidden flex flex-col'>
            <Header />
            <div className='flex-grow overflow-y-auto mx-4'>
              <div className='flex h-full'>
                <Sidebar />
                <div className='flex-grow'>
{/* Comienza componente index */}

                <div className="grid grid-cols-5 grid-rows-5 gap-5">
      <div className="m-0">
      <SongCard/>
      </div>
      {/* Resto de los componentes MusiCard */}
     <SongCard/>
     <SongCard/>
     <SongCard/>
     <SongCard/>
     <SongCard/>
    </div>

{/* Termina componente index  */}
                </div>
              </div>
            </div>
          </div>
   
  );
};


export default Home;
