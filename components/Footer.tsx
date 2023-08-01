import * as React from 'react'
export const Footer = () => {


  return (
<footer className="p-4 shadow bg-aptpblue dark:bg-gray-900">
  <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">

    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-white sm:text-center dark:text-gray-400">
      © 2023{" "}
      <a href="https://allianceptp.com/" className="font-medium underline text-aptpgrey hover:underline dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue">
        Alliance Physical Therapy Partners
      </a>
      . All Rights Reserved.
    </span>
  </div>
</footer>

  )
}

export default Footer
