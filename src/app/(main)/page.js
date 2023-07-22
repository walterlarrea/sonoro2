'use client'
import React from "react";

import SongCard from '@/components/songCard';
const Home = () => {


  return (

    <div className="grid grid-cols-5 grid-rows-5 gap-5">
      <div className="m-0">
        <SongCard />
      </div>
      {/* Resto de los componentes MusiCard */}
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
    </div>


  );
};


export default Home;
