import { Outlet } from '@remix-run/react'
import { Toaster } from 'react-hot-toast'

import type { LinksFunction } from '@remix-run/node'
import gridCommStyles from 'ag-grid-community/styles/ag-grid.css?url' // Mandatory CSS required by the grid
import themeStyles from 'ag-grid-community/styles/ag-theme-quartz.css?url'
import customAgStyles from '~/styles/custom-grid-styles.css?url'
import aggrid from '~/styles/aggrid.css?url'
import tailwindStyles from '~/styles/tailwind.css?url'
import { Header } from '~/components/header-net'
import { Providers } from '~/components/providers'
import {
  Bars3Icon,
  UserGroupIcon,
  TableCellsIcon,
  ArrowTrendingUpIcon,
  PresentationChartBarIcon,
  ChartBarIcon,
  Cog8ToothIcon,
  UserCircleIcon,
  CpuChipIcon,
} from '@heroicons/react/20/solid'
import { SidebarDesktop } from '~/components/sidebar-desktop-snop'

import SidebarDemo from '~/components/snop/SidebarDemo'
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
  { rel: 'stylesheet', href: gridCommStyles },
  { rel: 'stylesheet', href: themeStyles },
  { rel: 'stylesheet', href: customAgStyles },
  { rel: 'stylesheet', href: aggrid },
]

const trackmenus = [
  {
    name: 'Order',
    to: '/track/order',
    icon: ChartBarIcon,
    current: true,
  },
  {
    name: 'Product',
    to: '/track/product',
    icon: TableCellsIcon,
    current: false,
  },
  {
    name: 'Customer',
    to: '/track/customer',
    icon: CpuChipIcon,
    current: false,
  },
  {
    name: 'Supplier',
    to: '/track/supplier',
    icon: ArrowTrendingUpIcon,
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
        <div className="flex h-screen ">
          <SidebarDemo sidebarMenu={trackmenus} />
          <div className="flex flex-1 flex-col overflow-y-auto bg-slate-50">
            <Outlet />
          </div>
        </div>
      </Providers>
    </div>
  )
}
