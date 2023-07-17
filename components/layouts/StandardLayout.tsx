import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
// import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import Footer from '@/components/Footer'

// import * as types from 'notion-types'
// import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
// import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import { useNotionContext } from 'react-notion-x'
import Search from '@/components/Search'

// import { useDarkMode } from '@/lib/use-dark-mode'
// import Logout from '@/components/Logout'
import Dropdown from '@/components/Dropdown'
// import { userAgent } from 'next/server'

// import styles from './styles.module.css'

// const ToggleThemeButton = () => {
//   const [hasMounted, setHasMounted] = React.useState(false)
//   const { isDarkMode, toggleDarkMode } = useDarkMode()

//   React.useEffect(() => {
//     setHasMounted(true)
//   }, [])

//   const onToggleTheme = React.useCallback(() => {
//     toggleDarkMode()

//     if (isDarkMode) {
//       document.documentElement.classList.add('dark');
//     }
//      // if set via local storage previously
//     if (localStorage.getItem('color-theme')) {
//       if (localStorage.getItem('color-theme') === 'light') {
//           document.documentElement.classList.add('dark');
//           localStorage.setItem('color-theme', 'dark');
//       } else {
//           document.documentElement.classList.remove('dark');
//           localStorage.setItem('color-theme', 'light');
//       }

//   // if NOT set via local storage previously
//   } else {
//       if (document.documentElement.classList.contains('dark')) {
//           document.documentElement.classList.remove('dark');
//           localStorage.setItem('color-theme', 'light');
//       } else {
//           document.documentElement.classList.add('dark');
//           localStorage.setItem('color-theme', 'dark');
//       }
//   }
//   }, [toggleDarkMode])

//   return (
//     <div
//       onClick={onToggleTheme}
//     >
//       {hasMounted && isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
//     </div>
//   )
// }

export const StandardLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const { components, mapPageUrl } = useNotionContext()
  console.log(components)
  // const { data: session } = useSession()

  // Reference for click event listener
  const wrapperRef = useRef(null)

  useEffect(() => {
    // Function executed when clicked outside of result container
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSearchResults([])
        setShowResults(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
<header className={"flex flex-col "}>

  <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900 dark:border-gray-800 order-1 border-b">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start flex-shrink-0">
        <a href="/" className="flex mr-6">
          <img src="/aptp-logo.png" className="h-16 mr-3" alt="Alliance PTP Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Alliance PTP</span> */}
        </a>
      </div>
      <Dropdown />

      <div className="flex items-center justify-between flex-shrink-0 ml-4 sm:hidden lg:order-2">


        <button type="button" id="toggleMobileMenuButton" data-collapse-toggle="toggleMobileMenu" className="items-center p-2 text-gray-500 rounded-lg md:ml-2 md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
          <span className="sr-only">Open menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
        </button>
      </div>
    </div>
  </nav>
  <nav id="toggleMobileMenu" className="order-3 hidden bg-white border-b border-gray-200 shadow-sm dark:bg-gray-900 md:block dark:border-gray-800 md:order-2">
    <div ref={wrapperRef} className="px-4 py-3 lg:px-6">
    <div
      id="mega-menu-full-image"
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
    >
      <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
        <li>
          <a
            href="/"
            className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <button
            id="mega-menu-full-cta-image-button"
            data-collapse-toggle="mega-menu-full-image-dropdown"
            className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Our Teams{" "}
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </li>
        <li>
            <a href="/news" className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Company News</a>
          </li>
          <li>
            <a href="/connect" className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Stay Connected</a>
          </li>
          <li>
            <a href="/jobs" className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Open Jobs</a>
          </li>
      </ul>
    </div>
  </div>
  <div
    id="mega-menu-full-image-dropdown"
    className="hidden mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"
  >
    <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
      <ul
        className="hidden mb-4 space-y-4 md:mb-0 md:block"
        aria-labelledby="mega-menu-full-image-button"
      >
        <li>
          <a
            href="#"
            className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
          >
            Front Office
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
          >
            Marketing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
          >
            Clinical Operations
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
          >
            Information Technology
          </a>
        </li>
      </ul>
      <ul className="mb-4 space-y-4 md:mb-0">
        <li>
          <a
            href="#"
            className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
          >
            Human Resources
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
          >
            Continuing Education
          </a>
        </li>

      </ul>
      <a
        href="#"
        className="p-8 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
        style={{ backgroundImage: "url(/docs/images/dashboard-overview.png)" }}
      >
        <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">
          Big callout here.
        </p>
        <button
          type="button"
          className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
        >
          Get started
          <svg
            className="w-3 h-3 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </a>
    </div>

      <div className="flex flex-col items-center justify-between md:flex-row">
          <Search setSearchResults={setSearchResults} />
          {searchResults?.length > 0 && (
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
    {/* <ToggleThemeButton /> */}

      </div>
    </div>
  </nav>

</header>
{showResults && (
        <div ref={wrapperRef} className="absolute right-0 z-[310] w-full max-w-sm bg-white border border-gray-[200] rounded-lg shadow-lg top-full mt-[5px]">
          <ul className="divide-y divide-gray-[200]">
            {searchResults.map((result) => (
              <li key={result.id}>
                ...
              </li>
            ))}
          </ul>
        </div>
      )}

      {children}
      {router.pathname === '/' ? (<Footer />) : ''}
    </>
  )
}
