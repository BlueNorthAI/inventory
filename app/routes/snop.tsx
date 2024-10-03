import { Outlet } from "@remix-run/react";
import { Toaster } from "react-hot-toast";
import {
  CubeIcon,
  GearIcon,
  PieChartIcon,
  MixIcon,
  BarChartIcon,
  ExclamationTriangleIcon,
  LoopIcon,
} from '@radix-ui/react-icons'
import type { LinksFunction } from '@remix-run/node'
import gridCommStyles from 'ag-grid-community/styles/ag-grid.css?url' // Mandatory CSS required by the grid
import themeStyles from 'ag-grid-community/styles/ag-theme-quartz.css?url'
import customAgStyles from '~/styles/custom-grid-styles.css?url'
import aggrid from '~/styles/aggrid.css?url'
import tailwindStyles from '~/styles/tailwind.css?url'
import { Header } from "~/components/header-snop";
import { Providers } from "~/components/providers";
import SidebarDemo from '~/components/snop/SidebarDemo'

const senariomenus = [
  {
    id: 1,
    name: 'Master Data',
    to: '/snop/master',
    icon: CubeIcon,
    current: false,
  },

  {
    id: 2,
    name: 'S&OP Process',
    to: '/snop/process',
    icon: LoopIcon,
    current: false,
  },
  {
    id: 3,
    name: 'Exceptions',
    to: '/snop/incidents',
    icon: ExclamationTriangleIcon,
    current: false,
  },
  // {
  //   id: 4,
  //   name: 'Capacity Optimizer',
  //   to: '/snop/scenarioanalysis',
  //   icon: BarChartIcon,
  //   current: false,
  // },
  {
    id: 5,
    name: 'Scenario Planning',
    to: '/snop/scenarioplan',
    icon: MixIcon,
    current: true,
  },
  {
    id: 6,
    name: 'List of Scenarios',
    to: '/snop/scenario',
    icon: GearIcon,
    current: true,
  },
  {
    id: 7,
    name: 'Optimizer',
    to: '/snop/optimize',
    icon: PieChartIcon,
    current: true,
  },
  {
    id: 8,
    name: 'Results',
    to: '/snop/results',
    icon: GearIcon,
    current: true,
  },
  // {
  //   id: 6,
  //   name: 'Truck',
  //   to: '/snop/input',
  //   icon: BarChartIcon,
  //   current: false,
  // },
]

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
  { rel: 'stylesheet', href: gridCommStyles },
  { rel: 'stylesheet', href: themeStyles },
  { rel: 'stylesheet', href: customAgStyles },
  { rel: 'stylesheet', href: aggrid },
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
        <div className="flex h-full">
          <SidebarDemo sidebarMenu={senariomenus} />
          <div className="flex flex-1 flex-col overflow-y-auto bg-slate-50">
            <Outlet />
          </div>
        </div>
      </Providers>
    </div>
  )
}
