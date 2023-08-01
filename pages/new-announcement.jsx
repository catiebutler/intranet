import AnnouncementForm from '../components/AnnoucementForm'
import React from 'react'

export default function Home() {
  return (
    <div>
      <main className="max-w-4xl p-8 mx-auto my-8 bg-white border-b shadow-md sm:rounded-lg dark:bg-gray-800/95 dark:border-gray-700">
        <h1 className="mb-4 text-2xl text-red-800">New Announcement</h1>
        <AnnouncementForm />
      </main>
    </div>
  )
}
