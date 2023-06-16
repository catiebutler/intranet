import * as React from 'react'

import * as types from 'notion-types'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import cs from 'classnames'
import { Breadcrumbs, Header, Search, useNotionContext } from 'react-notion-x'

import { isSearchEnabled, navigationLinks, navigationStyle } from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

const ToggleThemeButton = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  const onToggleTheme = React.useCallback(() => {
    toggleDarkMode()
  }, [toggleDarkMode])

  return (
    <div
      className={cs('breadcrumb', 'button', !hasMounted && styles.hidden)}
      onClick={onToggleTheme}
    >
      {hasMounted && isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
    </div>
  )
}

export const NotionPageHeader: React.FC<{
  block: types.CollectionViewPageBlock | types.PageBlock
}> = ({ block }) => {
  const { components, mapPageUrl } = useNotionContext()

  if (navigationStyle === 'default') {
    return <Header block={block} />
  }

  return (
<header className="flex flex-col">
  <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900 dark:border-gray-800 order-1 border-b">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start flex-shrink-0">
        <a href="/" className="flex mr-6">
          <img src="/aptp-logo.png" className="h-8 mr-3" alt="Alliance PTP Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Alliance PTP</span> */}
        </a>
      </div>
      <ul className="flex-col justify-center hidden w-full mt-0 text-sm font-medium text-gray-500 md:flex-row dark:text-gray-400 md:flex">
        <li className="block border-b dark:border-gray-700 md:inline md:border-b-0">
          <a href="#" className="block px-4 py-3 rounded-lg hover:text-gray-900 dark:hover:text-white">Personal Home</a>
        </li>
        <li className="block border-b dark:border-gray-700 md:inline md:border-b-0">
          <a href="#" className="block px-4 py-3 rounded-lg hover:text-gray-900 dark:hover:text-white">Team Home</a>
        </li>
      </ul>
      <div className="flex items-center justify-between flex-shrink-0 ml-4 lg:order-2">


        <button type="button" id="toggleMobileMenuButton" data-collapse-toggle="toggleMobileMenu" className="items-center p-2 text-gray-500 rounded-lg md:ml-2 md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
          <span className="sr-only">Open menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
        </button>
      </div>
    </div>
  </nav>
  <nav id="toggleMobileMenu" className="order-3 hidden bg-white border-b border-gray-200 shadow-sm dark:bg-gray-900 md:block dark:border-gray-800 md:order-2">
    <div className="px-4 py-3 lg:px-6">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <ul className="flex flex-col order-2 w-full mt-0 text-sm font-medium border border-gray-200 rounded-lg bg-gray-50 md:flex-row md:order-1 md:bg-white dark:bg-gray-800 dark:border-gray-700 dark:md:bg-gray-900 md:rounded-none md:border-0">
          <li>
            <a href="#" className="block px-4 py-3 text-gray-500 rounded-lg dark:text-gray-400 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-3 text-gray-500 rounded-lg dark:text-gray-400 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700">Sales</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-3 text-gray-500 rounded-lg dark:text-gray-400 hover:text-gray-900 dark:hover:text-white dark:hover:bg-gray-800 hover:bg-gray-50 dark:hover-bg-gray-800 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700">Documents</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-3 text-gray-500 rounded-lg dark:text-gray-400 hover:text-gray-900 dark:hover:text-white dark:hover:bg-gray-800 hover:bg-gray-50 dark:hover-bg-gray-800 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700">Pathways</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-3 text-gray-500 rounded-lg dark:text-gray-400 hover:text-gray-900 dark:hover:text-white dark:hover:bg-gray-800 hover:bg-gray-50 dark:hover-bg-gray-800 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700">Departments</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-3 text-gray-500 rounded-lg dark:text-gray-400 hover:text-gray-900 dark:hover:text-white dark:hover:bg-gray-800 hover:bg-gray-50 dark:hover-bg-gray-800 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700">Brands</a>
          </li>
        </ul>
        <form className="flex items-center order-1 w-full mb-4 md:ml-4 md:max-w-sm md:order-2 md:mb-0">
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
            </div>
            <input type="search" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Find anything" required />
          </div>
          <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-primary-700 rounded-lg border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
        <div className='notion-nav-header'>
        <Breadcrumbs block={block} rootOnly={true} />

        <div className='notion-nav-header-rhs breadcrumbs'>
          {navigationLinks
            ?.map((link, index) => {
              if (!link.pageId && !link.url) {
                return null
              }

              if (link.pageId) {
                return (
                  <components.PageLink
                    href={mapPageUrl(link.pageId)}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    {link.title}
                  </components.PageLink>
                )
              } else {
                return (
                  <components.Link
                    href={link.url}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    {link.title}
                  </components.Link>
                )
              }
            })
            .filter(Boolean)}

          <ToggleThemeButton />

          {isSearchEnabled && <Search block={block} title={null} />}
        </div>
      </div>
      </div>
    </div>
  </nav>
</header>
  )
}
