import React from 'react'
import Calendar from '../components/Calendar'

const connect = () => {
  return (
    <div className="container">
            <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Stay Connected</h1>
      <Calendar />
      <h1 className='mt-4 mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>ATPQI Advocacy</h1>
    </div>
  )
}

export default connect
