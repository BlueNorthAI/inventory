import { Outlet } from "@remix-run/react";
import { Toaster } from "react-hot-toast";

import type { LinksFunction } from '@remix-run/node'
import gridCommStyles from 'ag-grid-community/styles/ag-grid.css?url' // Mandatory CSS required by the grid
import themeStyles from 'ag-grid-community/styles/ag-theme-quartz.css?url'
import customAgStyles from '~/styles/custom-grid-styles.css?url'
import aggrid from '~/styles/aggrid.css?url'
import tailwindStyles from '~/styles/tailwind.css?url'
import { Header } from "~/components/header-cap";
import { Providers } from "~/components/providers";

import {
  CubeIcon,
  GearIcon,
  PieChartIcon,
  MixIcon,
  BarChartIcon,
  ExclamationTriangleIcon,
  LoopIcon,
} from '@radix-ui/react-icons'

import SidebarDemo from '~/components/snop/SidebarDemo'
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
  { rel: 'stylesheet', href: gridCommStyles },
  { rel: 'stylesheet', href: themeStyles },
  { rel: 'stylesheet', href: customAgStyles },
  { rel: 'stylesheet', href: aggrid },
]
const menus = [
  {
    id: 1,
    name: 'Master Data',
    to: '/capacity/master',
    icon: CubeIcon,
    current: false,
  },
  {
    id: 4,
    name: 'Capacity Optimizer',
    to: '/capacity/scenarioanalysis',
    icon: BarChartIcon,
    current: false,
  },
  {
    id: 5,
    name: 'Scenario Planning',
    to: '/capacity/scenarioplan',
    icon: MixIcon,
    current: true,
  },
  {
    id: 6,
    name: 'Optimizer',
    to: '/capacity/optimize',
    icon: PieChartIcon,
    current: true,
  },
  {
    id: 7,
    name: 'Scenario Planning',
    to: '/capacity/scenario',
    icon: GearIcon,
    current: true,
  },
]


export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster />
      <Providers
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        <div className="flex h-screen">
          <SidebarDemo sidebarMenu={menus} />
          <div className="flex flex-1 flex-col overflow-y-auto bg-slate-50">
            <Outlet />
          </div>
        </div>
      </Providers>
    </div>
  )
}
