'use client';
import React from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import {GiHamburgerMenu} from "react-icons/gi"
import {SiThesoundsresource} from 'react-icons/si'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import {TiMicrophone} from "react-icons/ti"
import {MdLibraryMusic} from "react-icons/md"
import {FcDataConfiguration} from "react-icons/fc"
import {BsBell} from "react-icons/bs"
import Link from 'next/link';


function Header() {
  return (
    <>
    <div className='flex justify-between items-center px-14 h-14 bg-[#212121] opacity-95 sticky top-0 -z-50'>
      <div className='flex gap-8 items-center text-2x1'>
        <div>
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
          <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0'>
          <div className='flex gap-4 items-center pr-5'>
            <div>
              <AiOutlineSearch className='text-xl'/>
            </div>
            <input type='text' className='w-96 bg-zinc-900 focus:outline-none border-none'/>
            <AiOutlineClose className='text-xl cursor-pointer'/>
            </div>
            <button className='h-10 w-16 flex items-center justify-center bg-zinc-800'>
            <AiOutlineSearch className='text-xl'/>
            </button>
             </div>
        </form>
        <div className='text-xl p-3 bg-zinc-900 rounded-full'>
          <TiMicrophone className=''/>
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
