import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const UI_THEME_OPTIONS = [
  { key: 'auto', label: 'Auto' },
  { key: 'aurora', label: 'Aurora' },
  { key: 'noir', label: 'Noir' },
  { key: 'sunset', label: 'Sunset' },
]

export default function HeaderMenuControls({
  darkMode,
  setDarkMode,
  uiTheme,
  setUiTheme,
  uiThemeMode,
  setUiThemeMode,
  locale = 'kr',
  krHref = '/',
  enHref = '/en',
}) {
  const menuRef = useRef(null)
  const [openMenu, setOpenMenu] = useState('')

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleThemeSelect = (themeKey) => {
    if (themeKey === 'auto') {
      setUiThemeMode('auto')
    } else {
      setUiThemeMode('manual')
      setUiTheme(themeKey)
    }
    setOpenMenu('')
  }

  const darkModeLabel = locale === 'en'
    ? (darkMode ? 'Light Mode' : 'Dark Mode')
    : (darkMode ? '라이트 모드' : '다크 모드')

  return (
    <div ref={menuRef} className="relative flex items-center gap-2">
      <div className="relative">
        <button
          type="button"
          className="ours-icon-btn"
          aria-label={locale === 'en' ? 'Language' : '언어 선택'}
          onClick={() => setOpenMenu(openMenu === 'lang' ? '' : 'lang')}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10" />
          </svg>
        </button>
        {openMenu === 'lang' && (
          <div className="ours-menu left-0 w-24">
            <Link
              href={krHref}
              className={`ours-menu-item ${locale === 'kr' ? 'active' : ''}`}
              onClick={() => setOpenMenu('')}
            >
              KR
            </Link>
            <Link
              href={enHref}
              className={`ours-menu-item ${locale === 'en' ? 'active' : ''}`}
              onClick={() => setOpenMenu('')}
            >
              EN
            </Link>
          </div>
        )}
      </div>

      <div className="relative">
        <button
          type="button"
          className="ours-icon-btn"
          aria-label={locale === 'en' ? 'Theme' : '테마 선택'}
          onClick={() => setOpenMenu(openMenu === 'theme' ? '' : 'theme')}
        >
          {darkMode ? (
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-4 h-4 ours-muted" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
        {openMenu === 'theme' && (
          <div className="ours-menu right-0 w-40">
            {UI_THEME_OPTIONS.map((theme) => (
              <button
                key={theme.key}
                type="button"
                onClick={() => handleThemeSelect(theme.key)}
                className={`ours-menu-item ${theme.key === 'auto'
                  ? uiThemeMode === 'auto' ? 'active' : ''
                  : uiThemeMode === 'manual' && uiTheme === theme.key ? 'active' : ''}`}
              >
                {theme.label}
              </button>
            ))}
            <button
              type="button"
              className="ours-menu-item"
              onClick={() => {
                setDarkMode(!darkMode)
                setOpenMenu('')
              }}
            >
              {darkModeLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
