'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, logout } from '@/services/spotifyService';
import { useTranslation } from 'react-i18next';
import LoadingEqualizer from '@/components/Loader/LoadingEqualizer';
// import { checkUserSession } from '@/utils/liveSession';
import i18n from 'i18next';
import { getStore, setStore } from '@/services/localStore';
import { changeTheme } from '@/utils/themeHandler';

const Profile = () => {

  const { t } = useTranslation();
  const router = useRouter();
  const [profile, setProfile] = useState(null)
  const storedLanguage = getStore('sonoro_language')
  const storedTheme = getStore('sonoro_theme')

  const logoutButtonClassNames = useRef(`
    rounded-full 
    mt-8 
    px-6
    py-4 
    text-md 
    font-semibold 
    text-zinc-900 
    bg-zinc-200 
    border-solid 
    border-2 
    border-zinc-900 
    hover:border-zinc-200 
    transition 
    duration-200 
    hover:bg-zinc-900 
    hover:text-zinc-200 
    uppercase`)

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await getCurrentUser();
      const userProfile = response.data

      if (userProfile?.status && userProfile.status === 401) {
        router.push('/spotify-auth')
        return;
      }
      setProfile(userProfile);
    }
    getUserProfile();
  }, [])

  if (!profile) {
    return (
      <LoadingEqualizer />
    )
  }

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value

    i18n.changeLanguage(selectedLanguage).then((t) => setStore('sonoro_language', selectedLanguage))
  }

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value

    changeTheme(selectedTheme)
  }

  const handleLogout = () => {
    logout();
    window.location = '/'
    // router.push('/')
  }

  return (
    <div className='m-4'>
      <h2 className='text-[2em] mt-5'>{t('profile.title')}</h2>

      <div className="bg-white max-w-full shadow overflow-hidden sm:rounded-lg">
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                {t('profile.name')}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {profile.display_name || '-'}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                {t('profile.email')}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {profile.email || '-'}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                {t('profile.phone')}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {profile.phone || '-'}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                {t('profile.about')}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {profile.about || '-'}
              </dd>
            </div>
            {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                {t('profile.language')}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <select onChange={handleLanguageChange} defaultValue={storedLanguage || 'es'}>
                  <option value='es' >Español</option>
                  <option value='en' >Inglés</option>
                </select>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                {t('profile.theme')}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <select onChange={handleThemeChange} defaultValue={storedTheme || 'system'}>
                  <option value='light' >{t('profile.light')}</option>
                  <option value='dark' >{t('profile.dark')}</option>
                  <option value='system' >{t('profile.system')}</option>
                </select>
              </dd>
            </div> */}
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                {t('profile.licence')}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {profile.product || '-'}
              </dd>
            </div>

          </dl>
        </div>
      </div>

      {/* <div className=''></div> */}
      <button
        onClick={handleLogout}
        className={logoutButtonClassNames.current}>
        {t('profile.logout')}
      </button>

      <button
        className={logoutButtonClassNames.current}>
        {t('profile.edit')}
      </button>
      {/* <button
        className={logoutButtonClassNames.current}>
        Premium
      </button> */}

    </div>
  )
};

export default Profile;