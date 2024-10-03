import { Outlet } from "@remix-run/react";
import { Toaster } from "react-hot-toast";
import {
  CubeIcon,
  PieChartIcon,
  MixIcon,
  BarChartIcon,
  ExclamationTriangleIcon,
  LoopIcon,
  CameraIcon,
  Component1Icon,
  RocketIcon,
  ViewGridIcon,
} from '@radix-ui/react-icons'
import { Header } from "~/components/header-inv";
import { Providers } from "~/components/providers";
import type { LinksFunction } from '@remix-run/node'
import gridCommStyles from 'ag-grid-community/styles/ag-grid.css?url' // Mandatory CSS required by the grid
import themeStyles from 'ag-grid-community/styles/ag-theme-quartz.css?url'
import customAgStyles from '~/styles/custom-grid-styles.css?url'
import aggrid from '~/styles/aggrid.css?url'
import tailwindStyles from '~/styles/tailwind.css?url'
import SidebarDemo from '~/components/snop/SidebarDemo'

const senariomenus = [
  {
    id: 4,
    name: 'Dashboard',
    to: '/inventory/dashboard',
    icon: CubeIcon,
    current: false,
  },
  {
    id: 5,
    name: 'Events',
    to: '/inventory/meeting',
    icon: ViewGridIcon,
    current: false,
  },
  {
    id: 9,
    name: 'Inventory On Hand',
    to: '/inventory/onhand',
    icon: Component1Icon,
    current: false,
  },
  {
    id: 15,
    name: 'Scenario Analyzer',
    to: '/inventory/scenarioanalysis',
    icon: BarChartIcon,
    current: false,
  },
  {
    id: 6,
    name: 'Root Cause Analysis',
    to: '/inventory/flowchart',
    icon: RocketIcon,
    current: false,
  },
  {
    id: 7,
    name: 'Backlog Analyzer',
    to: '/inventory/back',
    icon: MixIcon,
    current: false,
  },
  {
    id: 8,
    name: 'SKU Service',
    to: '/inventory/skuservice',
    icon: PieChartIcon,
    current: false,
  },

  // {
  //   id: 10,
  //   name: 'Input Data',
  //   to: '/inventory/input',
  //   icon: CameraIcon,
  //   current: false,
  // },
  // {
  //   id: 11,
  //   name: 'Scenario Planning',
  //   to: '/inventory/scenario',
  //   icon: CameraIcon,
  //   current: false,
  // },

  // {
  //   id: 12,
  //   name: 'Optimization',
  //   to: '/inventory/optimize',
  //   icon: Component1Icon,
  //   current: false,
  // },
  // {
  //   id: 12,
  //   name: 'Optimization',
  //   to: '/inventory/optimize2',
  //   icon: Component1Icon,
  //   current: false,
  // },
  // {
  //   id: 12,
  //   name: 'Optimization',
  //   to: '/inventory/country',
  //   icon: Component1Icon,
  //   current: false,
  // },
  {
    id: 1,
    name: 'Inventory Optimizer',
    to: '/inventory/inventoryopt',
    icon: CubeIcon,
    current: true,
  },

  {
    id: 2,
    name: 'Current Inventory',
    to: '/inventory/current',
    icon: LoopIcon,
    current: false,
  },
  {
    id: 3,
    name: 'Recommendation',
    to: '/inventory/recommend',
    icon: ExclamationTriangleIcon,
    current: false,
  },
]
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
  { rel: 'stylesheet', href: gridCommStyles },
  { rel: 'stylesheet', href: themeStyles },
  { rel: 'stylesheet', href: customAgStyles },
  { rel: 'stylesheet', href: aggrid },
]
export default function InventoryIndex() {
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
