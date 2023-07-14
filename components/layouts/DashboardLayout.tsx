import React from 'react'
import Announcements from '@/components/Announcenments'
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
        <Announcements />
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
        <Sidebar />
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
