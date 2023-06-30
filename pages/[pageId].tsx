import * as React from 'react'
import { GetStaticProps } from 'next'

import { NotionPage } from '@/components/NotionPage'
import { domain, isDev } from '@/lib/config'
// import { getSiteMap } from '@/lib/get-site-map'
import { resolveNotionPage } from '@/lib/resolve-notion-page'
import { PageProps, Params } from '@/lib/types'

export function avoidRateLimit(delay = 10000) {
  if (!process.env.IS_BUILD) {
    return
  }

  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context
) => {
  await avoidRateLimit()
  const rawPageId = context.params.pageId as string

  try {
    const props = await resolveNotionPage(domain, rawPageId)

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, rawPageId, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export async function getStaticPaths() {
  await avoidRateLimit()
  if (isDev) {
    return {
      paths: [],
      fallback: true
    }
  }

  // const siteMap = await getSiteMap()

  const staticPaths = {
    // paths: Object.keys(siteMap.canonicalPageMap).map((pageId) => ({
    //   params: {
    //     pageId
    //   }
    // })),
    paths: [],
    fallback: 'blocking'
  }

  console.log(staticPaths.paths)
  return staticPaths
}

export default function NotionDomainDynamicPage(props) {
  return <NotionPage {...props} />
}
