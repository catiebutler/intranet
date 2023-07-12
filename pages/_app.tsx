// global styles shared across the entire site
import * as React from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Script from 'next/script'

import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth"

import * as Fathom from 'fathom-client'
// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
import posthog from 'posthog-js'
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-coy.css'
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
import 'styles/global.css'
// this might be better for dark mode
// import 'prismjs/themes/prism-okaidia.css'
// global style overrides for notion
import 'styles/notion.css'
// global style overrides for prism theme (optional)
import 'styles/prism-theme.css'

import { bootstrap } from '@/lib/bootstrap-client'
import {
  fathomConfig,
  fathomId,
  isServer,
  posthogConfig,
  posthogId
} from '@/lib/config'
import { StandardLayout } from '@/components/layouts/StandardLayout'
import { DashboardLayout } from '@/components/layouts/DashboardLayout'


if (!isServer) {
  bootstrap()
}

export default function App({ Component, pageProps: {session, ...pageProps } }: AppProps<{session: Session}>) {
  const router = useRouter()
  useEffect(() => {
    import('flowbite-react')
  }, [])

  React.useEffect(() => {
    function onRouteChangeComplete() {
      if (fathomId) {
        Fathom.trackPageview()
      }

      if (posthogId) {
        posthog.capture('$pageview')
      }
    }

    if (fathomId) {
      Fathom.load(fathomId, fathomConfig)
    }

    if (posthogId) {
      posthog.init(posthogId, posthogConfig)
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router.events])

  return (
    <SessionProvider session={session}>
      <Script
  src="https://unpkg.com/flowbite@1.3.3/dist/flowbite.js"
  strategy="beforeInteractive"
/>
        <StandardLayout>
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        </StandardLayout>
    </SessionProvider>
  )
}
