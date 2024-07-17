import { Outlet } from "@remix-run/react";
import { Toaster } from "react-hot-toast";

import type { LinksFunction } from '@remix-run/node'
import gridCommStyles from 'ag-grid-community/styles/ag-grid.css?url' // Mandatory CSS required by the grid
import themeStyles from 'ag-grid-community/styles/ag-theme-quartz.css?url'
import customAgStyles from '~/styles/custom-grid-styles.css?url'
import aggrid from '~/styles/aggrid.css?url'
import tailwindStyles from '~/styles/tailwind.css?url'
import { Header } from "~/components/header-net";
import { Providers } from "~/components/providers";
import {
  TableCellsIcon,
  ArrowTrendingUpIcon,
  PresentationChartBarIcon,
  ChartBarIcon,
  CpuChipIcon,
} from '@heroicons/react/20/solid'

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
    name: 'Configuration',
    to: '/network/config',
    icon: ChartBarIcon,
    current: true,
  },
  {
    name: 'Segmentation',
    to: '/network/segment',
    icon: TableCellsIcon,
    current: false,
  },
  {
    name: 'Service',
    to: '/network/service',
    icon: CpuChipIcon,
    current: false,
  },
  {
    name: 'Cost',
    to: '/network/cost',
    icon: ArrowTrendingUpIcon,
    current: false,
  },
  {
    name: 'Capital',
    to: '/network/capital',
    icon: PresentationChartBarIcon,
    current: false,
  },
  {
    name: 'Network Simulation',
    to: '/network/netsim',
    icon: PresentationChartBarIcon,
    current: false,
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
