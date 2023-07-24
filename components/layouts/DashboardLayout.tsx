import React from 'react'
// import Announcements from '@/components/Announcenments'
import Sidebar from '@/components/Sidebar'
import SocialFeed from '@/components/SocialFeed'
import { useRouter } from 'next/router'

export const DashboardLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const router = useRouter()

  console.log(router.pathname)

  if (router.pathname === '/') {
    return (
      <div className='container mx-auto'>
        <div className="container grid grid-cols-4 gap-6 pt-4 mx-auto">
        {/* <Announcements /> */}
        <Sidebar />
        <div className="col-span-3 mt-6">
        {children}

        </div>

        </div>
      </div>
    )
  } else if (router.pathname === '/jobs') {
    return (
      <div className="container mx-auto">
        <div className="container grid grid-cols-4 gap-6 pt-4 mx-auto">
          <div className="col-span-3">
            {children}
          </div>
          <div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="/9118cb1ec3424cfc850d837bbe263684">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Staff Referral Bonus
    </h5>
  </a>
  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    Lorem ipsum dolor sit amet.
  </p>
  <a
    href="/9118cb1ec3424cfc850d837bbe263684"
    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

        <Sidebar />
          </div>
        </div>
      </div>
    )
  } else if (router.pathname === '/connect') {
    return (
      <div className="container mx-auto">
        <div className="container grid grid-cols-4 gap-6 pt-4 mx-auto">
        <div className="col-span-3">
          {children}

        </div>
        <SocialFeed />
        </div>
      </div>
    )
  } else {
    return (
      <div className='container mx-auto'>
        {children}
      </div>
    )
  }
}
