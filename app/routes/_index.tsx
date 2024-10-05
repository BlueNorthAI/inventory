import { LinksFunction } from '@remix-run/node'

import { Layout } from '../components/blue/Layout'
import { Hero } from '~/components/blue/Hero'
import layoutStylesheetUrl from '../styles/layout.css?url'
import tailwindStylesheetUrl from '../styles/tailwind.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStylesheetUrl },
  { rel: 'stylesheet', href: layoutStylesheetUrl },
]
export default function Home() {
  return (
    <div className="h-full bg-white dark:bg-slate-900">
      {/* <Hero/> */}
      <Layout />
    </div>
  )
}
