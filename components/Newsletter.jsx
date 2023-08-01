import React from 'react'

const Newsletter = (content) => {
  console.log('content', content)
  return (
    <div className='mb-6'>
          <h2 className='mb-6 text-4xl font-extrabold dark:text-white'>Latest Newsletter</h2>
      <div dangerouslySetInnerHTML={{ __html: content.content}}></div>
    </div>
  )
}

export default Newsletter
