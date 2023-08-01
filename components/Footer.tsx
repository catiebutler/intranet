import * as React from 'react'
export const Footer = () => {


  return (
<footer className="p-4 shadow bg-aptpblue dark:bg-gray-900">
  <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
    <div className="flex items-center">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24">
      <path
        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    </svg>

    </div>

    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-white sm:text-center dark:text-gray-400">
      © 2023{" "}
      <a href="https://allianceptp.com/" className="font-medium text-white underline hover:underline dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue">
        Alliance Physical Therapy Partners
      </a>
      . All Rights Reserved.
    </span>
  </div>
</footer>

  )
}

export default Footer
