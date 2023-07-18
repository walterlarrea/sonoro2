'use client';

import React from "react";
import MusiCard from "./components/MusiCard";





function Home() {
  return (


  <div className=" grid grid-cols-5 grid-rows-5 gap-1">
    <div className="m-0">
    <MusiCard/>
    </div>
    <div className="m-0"><MusiCard/></div>
    <div className="m-0"><MusiCard/></div>
    <div className="m-0"><MusiCard/></div>
    <div className="col-start-4 row-start-2 m-0"><MusiCard/></div>
    <div className="col-start-3 row-start-2 m-0"><MusiCard/></div>
    <div className="col-start-2 row-start-2 m-0"><MusiCard/></div>
    <div className="col-start-1 row-start-2 m-0"><MusiCard/></div>
    <div className="col-start-1 row-start-3 m-0"><MusiCard/></div>
    <div className="col-start-2 row-start-3 m-0"><MusiCard/></div>
    <div className="col-start-3 row-start-3 m-0"><MusiCard/></div>
    <div className="col-start-4 row-start-3 m-0"><MusiCard/></div>
    <div className="col-start-4 row-start-4 m-0 "><MusiCard/></div>
    <div className="col-start-2 row-start-4 m-0"><MusiCard/></div>
    <div className="col-start-1 row-start-4 m-0"><MusiCard/></div>
    <div className="col-start-1 row-start-5 m-0"><MusiCard/></div>
    <div className="col-start-2 row-start-5 m-0 "><MusiCard/></div>
    <div className="col-start-3 row-start-5 m-0"><MusiCard/></div>
    <div className="col-start-3 row-start-4 m-0"><MusiCard/></div>
    <div className="col-start-4 row-start-5 m-0"><MusiCard/></div>
    <div className="col-start-5 row-start-1 m-0"><MusiCard/></div>
    <div className="col-start-5 row-start-2 m-0"><MusiCard/></div>
    <div className="col-start-5 row-start-3 m-0"><MusiCard/></div>
    <div className="col-start-5 row-start-4 m-0"><MusiCard/></div>

    
    
   </div>
  );
}

export default Home;
