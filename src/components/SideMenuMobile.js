'use client'
import { useRouter } from "next/navigation"
import { usePathname } from 'next/navigation';
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

const SideMenuMobile = ({ visible, closeHandler }) => {
  const { t } = useTranslation()
  const currentPathName = usePathname()
  const router = useRouter();

  return (
    <>
      <div
        className={`
        absolute 
        md:hidden
        z-20
        top-0 
        left-0 
        h-full 
        w-[10%]
        bg-black 
        opacity-80
        ${visible ? 'block' : 'hidden'}`}>
      </div>

      <div
        className={`
        absolute 
        flex
        flex-col
        z-20 
        top-0
        right-0
        w-[90%] 
        h-full
        p-3
        md:hidden
        transition-all
        bg-[#e5fdba]
        dark:bg-[#34392A]
        ${visible ? 'block' : 'hidden'}`}>
        <div className="text-end mb-3">
          <button
            className="
            rounded-lg
            px-6
            py-4 
            text-md 
            font-semibold 
            hover:border-zinc-200 
            transition 
            duration-200 
            shadow-neobrutalism 
            uppercase"
            onClick={closeHandler}>{t('aside.close')}</button>
        </div>

        <div className="flex flex-col overflow-auto w-full">
          <button
            className={`
            px-4 
            py-2 
            mt-4 
            mx-3 
            text-left 
            rounded-3xl 
            border-2 
            dark:border-[#e5fdba] 
            border-[#080808] 
            active:dark:bg-black 
            active:bg-white 
            dark:hover:bg-gray-900 
            hover:bg-gray-100
            ${currentPathName === '/profile' && 'dark:bg-black bg-white'}`}
            onClick={() => router.push('/profile')}>
            <UserCircleIcon className="h-6 w-6 me-4 inline-block" />
            {t('aside.profile')}
          </button>

          <Navbar background={'bg-white'} column={true} />
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default SideMenuMobile