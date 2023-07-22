
import React from "react";

import RootLayout from './layout';

import SongCard from './components/songCard';
const Home = () => {


  return (
    <RootLayout>

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

    </RootLayout>

  );
};


export default Home;
