import React from 'react'
import useSWR from 'swr'



const Ceo = () => {
  const fetcher = (url, queryParams = '?limit=100') =>
  fetch(`${url}${queryParams}`).then((res) => res.json())
  const { data } = useSWR('/api/announcements', fetcher)

  const ceo = data?.find(a => a.type === 'ceo')

  if (ceo) {
    return (
    <div className='col-span-1 row-span-2'>
      <h2 className='mb-6 text-4xl font-extrabold dark:text-white'>Latest CEO Update</h2>
      <div key={ceo?.id} className="relative w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {ceo?.title}
    </h5>

  <p className="mb-12 font-normal text-gray-700 dark:text-gray-400">
    <div dangerouslySetInnerHTML={{ __html: ceo?.message}}></div>
  </p>
</div>
    </div>
  )
    } else {
      <div className='col-span-1 row-span-2'>
        <h2 className='mb-6 text-4xl font-extrabold dark:text-white'>Loading...</h2>
      </div>
    }
}

export default Ceo
