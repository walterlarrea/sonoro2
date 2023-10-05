'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { HomeIcon, HeartIcon, MagnifyingGlassIcon, RadioIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Navbar = ({ column }) => {
  const { t } = useTranslation()
  const currentPathName = usePathname()
  const [selecteditem, setSelectedItem] = useState(undefined)

  useEffect(() => {
    setSelectedItem(currentPathName)
  }, [currentPathName])

  const flexDir = column ?
    'flex-col' // space-y-3'
    : 'flex-row' // space-x-3'

  const linkClassNames = 'py-2 px-4 rounded-lg active:dark:bg-black active:bg-white dark:hover:bg-gray-900 hover:bg-gray-100'

  return (
    <nav
      className={`
        flex 
        ${flexDir} 
        gap-3
      text-[#080808] 
      dark:text-[#e5fdba] 
      dark:bg-[#34392A] 
        p-3
        whitespace-nowrap
        flex-wrap`}>

      <Link
        className={`${linkClassNames} ${selecteditem === '/' && 'dark:bg-black bg-white'}`}
        href='/'>
        <HomeIcon className="h-6 w-6 me-4 inline-block" />
        {t('aside.home')}
      </Link>

      <Link
        className={`${linkClassNames} ${selecteditem === '/search' && 'dark:bg-black bg-white'}`}
        href='/search'>
        <MagnifyingGlassIcon className="h-6 w-6 me-4 inline-block" />
        {t('aside.search')}
      </Link>

      <Link
        className={`${linkClassNames} ${selecteditem === '/radio' && 'dark:bg-black bg-white'}`}
        href='/radio'>
        <RadioIcon className="h-6 w-6 me-4 inline-block" />
        Radio
      </Link>

      <Link
        className={`${linkClassNames} ${selecteditem === '/new-releases' && 'dark:bg-black bg-white'}`}
        href='/new-releases'>
        <HeartIcon className="h-6 w-6 me-4 inline-block" />
        {t('aside.ultimate')}
      </Link>

    </nav>
  )
}

export default Navbar