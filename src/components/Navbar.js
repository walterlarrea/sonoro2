import Link from "next/link";
import { HomeIcon, HeartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Navbar = ({ background, column, row }) => {
  const bg = background ? background : 'transparent'
  const flexDir = column ?
    'flex-col' // space-y-3'
    : 'flex-row' // space-x-3'

  const linkClassNames = 'ms-3 mt-3'

  return (
    <nav
      className={`
        flex 
        ${flexDir} 
        rounded-md 
        ${bg} 
        bg-opacity-10 
        pe-3
        pb-3
        whitespace-nowrap
        flex-wrap`}>

      <Link
        className={linkClassNames}
        href='/'>
        <HomeIcon className="h-6 w-6 me-4 inline-block" />
        Inicio
      </Link>

      <Link
        className={linkClassNames}
        href='/search'>
        <MagnifyingGlassIcon className="h-6 w-6 me-4 inline-block" />
        Buscar
      </Link>

      <Link
        className={linkClassNames}
        href='/new-releases'>
        <HeartIcon className="h-6 w-6 me-4 inline-block" />
        Últimos lanzamientos
      </Link>

    </nav>
  )
}

export default Navbar