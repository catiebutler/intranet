import * as React from 'react'
import { useState } from 'react'

import * as types from 'notion-types'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import cs from 'classnames'
import { useNotionContext } from 'react-notion-x'
import Search from '@/components/Search'

import { useDarkMode } from '@/lib/use-dark-mode'
import Logout from '@/components/Logout'

import styles from './styles.module.css'

const ToggleThemeButton = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  const onToggleTheme = React.useCallback(() => {
    toggleDarkMode()

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
     // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
      } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
      }

  // if NOT set via local storage previously
  } else {
      if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
      } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
      }
  }
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
}> = () => {
  const [searchResults, setSearchResults] = useState([])
  const { components, mapPageUrl } = useNotionContext()

  // if (navigationStyle === 'default') {
  //   return <Header block={block} />
  // }

  return (
    <>
<header className={"flex flex-col mb-4 "}>
  <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900 dark:border-gray-800 order-1 border-b">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start flex-shrink-0">
        <a href="/" className="flex mr-6">
          <img src="/aptp-logo.png" className="h-16 mr-3" alt="Alliance PTP Logo" />
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
          <Search setSearchResults={setSearchResults} />
          {searchResults.length > 0 && (
  <div className="absolute right-0 z-10 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg top-16">
    <ul className="divide-y divide-gray-200">
      {searchResults.map((result) => (
        <li key={result.id}>
          <a href={mapPageUrl(result.id)} className="block px-4 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100">
            <h2 className="text-base font-medium text-gray-900">{result.title}</h2>
            <p className="mt-1 text-sm leading-tight text-gray-500">{result.description}</p>
          </a>
        </li>
      ))}
    </ul>
  </div>
)}
    <Logout />
    <ToggleThemeButton />

      </div>
    </div>
  </nav>

</header>
  {/* <Breadcrumbs block={block} rootOnly={false} /> */}
</>
  )
}
