'use client'
import { useTranslation } from "react-i18next"
import { getStore, setStore } from '@/services/localStore';
import { changeTheme } from '@/utils/themeHandler';
import i18n from 'i18next';

const SideMenuAcc = ({ handleClose }) => {
  const { t } = useTranslation()
  const storedLanguage = getStore('sonoro_language')
  const storedTheme = getStore('sonoro_theme')

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value

    i18n.changeLanguage(selectedLanguage).then((t) => {
      setStore('sonoro_language', selectedLanguage)
      window.document.documentElement.lang = selectedLanguage ?? 'es'
    })
  }

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value

    changeTheme(selectedTheme)
  }

  return (
    <>
      <div
        className={`
        absolute 
        block
        translate-x-[-50%]
        translate-y-[-50%]
        top-1/2
        left-1/2
        flex
        flex-col
        w-max
        max-w-[90%]
        p-3
        z-30 
        rounded-xl
        transition-all
        bg-[#e5fdba]
        dark:bg-[#34392A]`}>
        <div className="text-end mb-3">
          <button
            className="
                rounded-lg
                px-3
                py-2 
                text-md 
                font-semibold 
                hover:border-zinc-200 
                transition 
                duration-200 
                shadow-neobrutalism 
                uppercase"
            onClick={handleClose}>
            {t('aside.close')}
          </button>
        </div>

        <div className="bg-white px-4 py-5 rounded-t-lg text-gray-900">
          <label htmlFor="lang-select-accs" className="inline-block w-[8rem] font-medium text-gray-500">
            {t('profile.language')}
          </label>
          <select
            id="lang-select-accs"
            onChange={handleLanguageChange}
            defaultValue={storedLanguage || 'es'}>
            <option value='es' >Español</option>
            <option value='en' >Inglés</option>
          </select>
        </div>
        <div className="bg-white px-4 py-5 rounded-b-lg text-gray-900">
          <label htmlFor="theme-select-accs" className="inline-block w-[8rem] font-medium text-gray-500">
            {t('profile.theme')}
          </label>
          <select
            id="theme-select-accs"
            onChange={handleThemeChange}
            defaultValue={storedTheme || 'system'}>
            <option value='light' >{t('profile.light')}</option>
            <option value='dark' >{t('profile.dark')}</option>
            <option value='system' >{t('profile.system')}</option>
          </select>
        </div>

      </div>
      <div
        className={`
          block
          absolute 
          z-20
          top-0 
          left-0 
          h-full 
          w-full
          bg-black 
          opacity-80`}>
      </div>
    </>
  )
}

export default SideMenuAcc