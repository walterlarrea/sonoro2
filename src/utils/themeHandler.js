// On page load or when changing themes, best to add inline in `head` to avoid FOUC
export const initTheme = () => {
  if (localStorage.sonoro_theme === 'dark' || (!('sonoro_theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export const changeTheme = (selectedTheme) => {
  if (selectedTheme === 'system') {
    localStorage.removeItem('sonoro_theme')
  } else {
    localStorage.sonoro_theme = String(selectedTheme)
  }
  initTheme()
}

// export const setDarkTheme = () => {
//   localStorage.sonoro_theme = 'dark'
//   initTheme()
// }

// export const useSystemPreference = () => {
//   initTheme()
// }