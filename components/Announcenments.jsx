import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'

const Announcenments = () => {
  const { data: session } = useSession()
  const [selectedTab, setSelectedTab] = useState('All')

  const fetcher = (url, queryParams = '?limit=100') =>
  fetch(`${url}${queryParams}`).then((res) => res.json())
  const { data } = useSWR('/api/announcements', fetcher)

console.log('session', data)

// Filter announcements based on selectedTab
const filteredAnnouncements =
selectedTab === 'All'
  ? data || []
  : (data || []).filter(
      (announcement) => announcement.type === selectedTab
    )
  return (
    <div className='col-span-3 mt-4'>
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul
      className="flex flex-wrap -mb-px text-sm font-medium text-center"
      id="myTab"
      data-tabs-toggle="#myTabContent"
      role="tablist"
    >
      <li className="mr-2" role="presentation">
        <button
          className="inline-block p-4 border-b-2 rounded-t-lg"
          id="profile-tab"
          data-tabs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          All
        </button>
      </li>
      <li className="mr-2" role="presentation">
        <button
          className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          id="dashboard-tab"
          data-tabs-target="#dashboard"
          type="button"
          role="tab"
          aria-controls="dashboard"
          aria-selected="false"
        >
          Newsletter
        </button>
      </li>
      <li className="mr-2" role="presentation">
        <button
          className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          id="settings-tab"
          data-tabs-target="#settings"
          type="button"
          role="tab"
          aria-controls="settings"
          aria-selected="false"
        >
          CEO Update
        </button>
      </li>
      <li role="presentation">
        <button
          className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          id="contacts-tab"
          data-tabs-target="#contacts"
          type="button"
          role="tab"
          aria-controls="contacts"
          aria-selected="false"
        >
          HR Update
        </button>
      </li>
    </ul>
  </div>
      {session?.user?.name === ('Addison Wanlass' || 'Samantha Lewakowski' || 'Richard Leaver' || 'Anthony Placek' || 'Linda Kerrick' || 'Tiffany Warden' || 'Jami Farkas' || 'Benjamin Fedewa' || 'Terry Tyler' || 'Gretchen Walsh') ? (
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><a href='/new-announcement'>New Announcement</a></button>
      ) : ''}
      <div className="container flex gap-4">
      {data?.map(announcement => (
        <div key={announcement.id} className="relative w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href={`/announcements/${announcement.id}`}>
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {announcement.title}
    </h5>
  </a>
  <span className="absolute top-[10px] right-[10px] w-12 text-center bg-blue-100 text-blue-800 text-xs font-medium px-[2.5px] py-[0.5rem] rounded-md dark:bg-blue-dark dark:text-blue-light mb-[1rem] uppercase">{announcement.type}</span>

  <p className="mb-12 font-normal text-gray-700 dark:text-gray-400">
    <div dangerouslySetInnerHTML={{ __html: announcement.message.slice(0, 250)}}></div>
  </p>
  <a
    href={`/announcements/${announcement.id}`}
    className="absolute bottom-[20px] mt-4 left-0 right-0 inline-flex items-center justify-center w-48 mx-auto px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

      ))}
{/* <h2 className='text-xl'>Newsletters</h2>
<Newsletter /> */}
</div>
    </div>
  )
}

export default Announcenments
