import React from "react";
import Link from "next/link";
import { HomeIcon, HeartIcon, MagnifyingGlassIcon, RadioIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";


const Navbar = ({ background, column, row }) => {
const {t} = useTranslation();


  const flexDir = column ?
    'flex-col' // space-y-3'
    : 'flex-row' // space-x-3'

  const linkClassNames = 'ms-3 mt-3'

  return (
    <nav
      className={`
        flex 
        ${flexDir} 
        rounded-lg 
        text-zinc-100 
        bg-zinc-900 
        pe-3
        pb-3
        whitespace-nowrap
        flex-wrap`}>

      <Link
        className={linkClassNames}
        href='/'>
        <HomeIcon className="h-6 w-6 me-4 inline-block" />
        {t('aside.home')}
      </Link>

      <Link
        className={linkClassNames}
        href='/search'>
        <MagnifyingGlassIcon className="h-6 w-6 me-4 inline-block" />
        {t('aside.search')}
      </Link>

      <Link
        className={linkClassNames}
        href='/new-releases'>
        <HeartIcon className="h-6 w-6 me-4 inline-block" />
        {t('aside.ultimate')}
      </Link>

      <Link
        className={linkClassNames}
        href='/radio'>
        <RadioIcon className="h-6 w-6 me-4 inline-block" />
        Radio
      </Link>

    </nav>
  )
}

export default Navbar