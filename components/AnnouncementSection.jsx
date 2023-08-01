/* eslint-disable react/no-unescaped-entities */
import React from 'react'
// import useSWR from 'swr'

const AnnouncenmentSection = () => {

//   const fetcher = (url, queryParams = '?limit=100') =>
//   fetch(`${url}${queryParams}`).then((res) => res.json())
//   const { data } = useSWR('/api/announcements', fetcher)

// const newsletter = data?.find(a => a.type === 'newsletter')
// const ceo = data?.find(a => a.type === 'ceo')

// console.log(newsletter, ceo)
  return (
    <div className="col-span-3 mt-6">
    <div className="">
      <div className="container flex gap-4">
        <div className="relative w-full max-w-sm p-6 border rounded-lg shadow border-aptppurple bg-aptppurple dark:bg-gray-800 dark:border-gray-700 shadow-aptppurple">
        <a href={`#`}>
          <h5 className="mb-2 text-4xl tracking-tight text-white drop-shadow-lg w-60 dark:text-white font-universSubheading">
            Hot Off the Press!
          </h5>
        </a>
        <span className="absolute top-[10px] right-[10px] text-center bg-blue-100 text-blue-800 text-xs font-medium px-[2.5px] py-[0.5rem] rounded-md dark:bg-blue-dark dark:text-blue-light mb-[1rem] uppercase font-universBody">Announcement</span>

        <div className="mb-12 font-sans font-normal text-white drop-shadow-lg dark:text-gray-400">
          <p>Intranet Launch Coming Soon!</p>
        </div>
        <a
          href={`/news`}
          className="absolute bottom-[20px] mt-4 left-0 right-0 inline-flex items-center justify-center w-48 mx-auto px-3 py-2 text-sm font-medium text-center text-white bg-aptpblue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-aptpblue dark:focus:ring-blue-800 font"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
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
        </a>
      </div>
      <div className="container flex gap-4">
        <div className="relative w-full max-w-sm p-6 border rounded-lg shadow border-aptpgreen bg-gradient-to-bl bg-aptpgreen shadow-aptpgreen dark:bg-gray-800 dark:border-gray-700">
        <a href={`#`}>
          <h5 className="mb-2 text-4xl tracking-tight text-white drop-shadow-lg w-60 dark:text-white font-universSubheading">
            Latest CEO Communication
          </h5>
        </a>
        <span className="absolute top-[10px] right-[10px] text-center bg-blue-100 text-blue-800 text-xs font-medium px-[2.5px] py-[0.5rem] rounded-md dark:bg-blue-dark dark:text-blue-light mb-[1rem] uppercase">CEO</span>

        <div className="mb-12 font-normal text-white drop-shadow-lg dark:text-gray-400">
          <p>Dear Alliance Partners, Welcome back from the 4th of July  holiday. I hope everyone was able to enjoy the holiday with friends and family creating memories. Recently I celebrated my 5th work anniversary with Alliance Partners...</p>
        </div>
        <a
          href={`/news`}
          className="absolute bottom-[20px] mt-4 left-0 right-0 inline-flex items-center justify-center w-48 mx-auto px-3 py-2 text-sm font-medium text-center text-white bg-aptpblue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-aptpblue  dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
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
        </a>
      </div>
      <div className="container flex gap-4">
        <div className="relative w-full max-w-sm p-6 border rounded-lg shadow border-aptpred bg-aptpred dark:bg-gray-800 dark:border-gray-700 shadow-aptpred">
        <a href={`#`}>
          <h5 className="mb-2 text-4xl tracking-tight text-white drop-shadow-lg w-60 dark:text-white font-universSubheading">
            Aligning Our Alliances
          </h5>
        </a>
        <span className="absolute top-[10px] right-[10px] text-center bg-blue-100 text-blue-800 text-xs font-medium px-[2.5px] py-[0.5rem] rounded-md dark:bg-blue-dark dark:text-blue-light mb-[1rem] uppercase">Newsletter</span>

        <div className="mb-12 font-normal text-white dark:text-gray-400 drop-shadow-lg">
          <p>In the latest episode of the Agile & Me podcast, Richard sits down with Amy Lafka, speaker and author of "People First: A Proven Method for an Exceptional Healthcare Practice", to...</p>
        </div>
        <a
          href={`/news`}
          className="absolute bottom-[20px] mt-4 left-0 right-0 inline-flex items-center justify-center w-48 mx-auto px-3 py-2 text-sm font-medium text-center text-white bg-aptpblue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-aptpblue dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
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
        </a>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  )
}

export default AnnouncenmentSection
