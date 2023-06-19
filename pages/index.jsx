import * as React from 'react'
import { useState } from 'react'

import { NotionPage } from '@/components/NotionPage'
import Search from '@/components/Search'
import { domain } from '@/lib/config'
import { resolveNotionPage } from '@/lib/resolve-notion-page'

export function avoidRateLimit(delay = 10000) {
  if (!process.env.IS_BUILD) {
    return
  }

  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

export const getStaticProps = async () => {
  await avoidRateLimit()
  try {
    const props = await resolveNotionPage(domain)

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default function NotionDomainPage(props) {
  const [searchResults, setSearchResults] = useState([])

  return (
    <>
      <Search setSearchResults={setSearchResults} />
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              <h2>{result.title}</h2>
              <p>{result.description}</p>
            </li>
          ))}
        </ul>
      )}      <NotionPage {...props} />
    </>
  )
}
