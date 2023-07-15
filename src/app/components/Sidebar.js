'use client';
import React from "react";
import {
  MdHomeFilled,
  MdLibraryMusic,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";

// Resto del código del componente Sidebar

	export default function Sidebar(){
	 const mainLinks = [
	{
	 icon: <MdHomeFilled className="text-xl" />,
	 name: "Home",
	},
	{
	 icon: <FaRegCompass className="text-xl" />,
	 name: "Explore",
	},
	];


const helpLinks = [
	
	{
		icon: <MdLibraryMusic className="text-xl" />,
		name: "Biblioteca",
	  },
	  {
	   icon: <MdHistory className="text-xl" />,
	   name: "Favoritos",
	  },
];


 return  (
	<div className="w-2/12 ■bg-[bg-[#212121] pr-5 overflow-auto pb-8 sidebar">
	 <ul className="flex flex-col border-b-2 border-gray-700">
	 {mainLinks.map(({ icon, name})=> {
		return (
		 <li
		    key={name}
		    className={`pl-6 py-3 hover:bg-zinc-600 ${
	 		name === "Home" ? "bg-slate-600" : ""
	}`}
	>
	  <a href="#" className="flex items-center gap-5">
	   {icon}
	 <span className="text-sm tracking-wider">{name}</span>
	 </a>
	</li>
	);
	})}
 </ul>


<ul className="flex flex-col border-b-2 border-gray-700">
 {helpLinks.map(({ icon, name})=> {
		return (
		 <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 `}> 
		   <a href="#" className="flex items-center gap-5">
			{icon} 
			<span className="text-sm tracking-wider">{name}</span>
 </a>
	</li>
	);
	})}
 </ul>

{/*BIBLIOTECA DESPLAZAMIENTO START*/}


{/*BIBLIOTECA DESPLAZAMIENTO END*/}
    </div>
  );
}
	

	 
	