'use client';
import React from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import {GiHamburgerMenu} from "react-icons/gi"
import {SiThesoundsresource} from 'react-icons/si'
import {BsSearch} from 'react-icons/bs'
import {LiaMicrophoneSolid} from "react-icons/lia"
import {MdLibraryMusic} from "react-icons/md"
import {FcDataConfiguration} from "react-icons/fc"
import {BsBell} from "react-icons/bs"
import {AiOutlineCloseCircle} from "react-icons/ai"
import Link from 'next/link';



function Header() {
  return (
    <>
    <div className='flex justify-between items-center px-6 h-14 bg-[#090931] opacity-95 sticky top-0 -z-50'>
      <div className='flex gap-8 items-center text-2x1'>
        <div className='ml-0'>
          <GiHamburgerMenu/>
        </div>
         <Link href="/">
          <div className='flex gap-1 items-center justify-center'>
            <SiThesoundsresource width={62} height={62} alt='Sonoro icon' className='justify-center content-center text-3x1'/>
            <span className='text-xl font-medium'>Sonoro</span>
            </div>
            </Link>
      </div>
      <div className='flex items-center justify-center gap-5'>
        <form action=''>
          <div className='flex bg-zinc-900 items-center h-9 px-4 pr-0 rounded'>
          <div className='flex gap-4 items-center pr-5'>
            <label for="search-floating" >
              <BsSearch className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'/>
            </label>
            <input id='search-floating' type='text' className='w-96 bg-zinc-900 focus:outline-none border-none h-9' />
            <AiOutlineCloseCircle className='text-xl cursor-pointer'/>
            </div>
            <button className='h-10 w-16 flex items-center justify-center  bg-zinc-800 rounded'>
            <BsSearch className='text-xl'/>
            </button>
             </div>
        </form>
        <div className='text-xl p-3 bg-zinc-900 rounded-full'>
          <LiaMicrophoneSolid className=''/>
        </div> 
      </div>
      <div className='flex gap-5 items-center text-xl'>
      <MdLibraryMusic/>
      <FcDataConfiguration/>
      <div className='relative'>
      <BsBell/>
       <span className='absolute bottom-2 left-2 text-xs bg-red-300 rounded-full px-1'>
       +9
       </span>
       </div>
       <Image className='w-9 h-9 rounded-full'></Image>
      </div>
    </div>


    </>
     
  );
}

export default Header;
