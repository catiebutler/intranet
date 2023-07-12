import * as React from 'react'
export const Footer = () => {


  return (
<footer className="m-4 bg-white rounded-lg shadow dark:bg-gray-900">
  <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
  <div className="flex content-center justify-around mt-4 mb-4">
  <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><a href='https://alliancephysicaltherapypartners.tfaforms.net/331'>Report a Compliance Concern</a></button>

  <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"><a href='https://alliancephysicaltherapypartners.tfaforms.net/354'>Patient Incident Report</a></button>

</div>
    <div className="sm:flex sm:items-center sm:justify-between">
        <img
          src="https://notion-image.aptp-account.workers.dev/file.notion.so/f/s/d8e1d7fe-73cd-41c3-9fb6-6bff21ceabe4/APTQI_Logo.svg?id=be11a3d9-8bac-4864-8dc9-7a62248340a6&table=block&spaceId=2443bf74-e5e7-4322-affd-43349a347480&expirationTimestamp=1689292800000&signature=HAYIQIZchZI9HF0EC1y4DYDt1DlEfQXAXAPJaTknTuQ"
          className="h-20 mr-12"
          alt="Flowbite Logo"
        />

      <p className='mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400'>Alliance Physical Therapy Partners is a proud member of the Alliance for Physical Therapy Quality and Innovation. <a className="font-medium text-blue-600 underline hover:underline dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700" href='https://www.aptqi.com/take-action/'>Take action alongside us.</a></p>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2023{" "}
      <a href="https://allianceptp.com/" className="font-medium text-blue-600 underline hover:underline dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700">
        Alliance Physical Therapy Partners
      </a>
      . All Rights Reserved.
    </span>
  </div>
</footer>

  )
}

export default Footer
