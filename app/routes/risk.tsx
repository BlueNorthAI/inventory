import { Outlet } from "@remix-run/react";
import { Toaster } from "react-hot-toast";
import type { LinksFunction } from '@remix-run/node'
import gridCommStyles from 'ag-grid-community/styles/ag-grid.css?url' // Mandatory CSS required by the grid
import themeStyles from 'ag-grid-community/styles/ag-theme-quartz.css?url'
import customAgStyles from '~/styles/custom-grid-styles.css?url'
import aggrid from '~/styles/aggrid.css?url'
import { Header } from "~/components/header-risk";
import { Providers } from "~/components/providers";
import { ChartBarIcon,PresentationChartLineIcon,TableCellsIcon,AdjustmentsHorizontalIcon } from '@heroicons/react/20/solid'
import { GrTree } from 'react-icons/gr'
import { RiBarChartBoxLine } from 'react-icons/ri'
import kendoStylesheetUrl from '~/styles/kendo.css?url'
import SidebarDemo from '~/components/snop/SidebarDemo'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: gridCommStyles },
  { rel: 'stylesheet', href: themeStyles },
  { rel: 'stylesheet', href: customAgStyles },
  { rel: 'stylesheet', href: aggrid },
  { rel: 'stylesheet', href: kendoStylesheetUrl },
]

const menus = [
  {
    name: 'Master Data',
    to: '/risk/analysis',
    icon: ChartBarIcon,
    current: true,
  },
  {
    name: 'Output',
    to: '/risk/output',
    icon: PresentationChartLineIcon,
    current: true,
  },
  {
    name: 'Scenarios',
    to: '/risk/simulation',
    icon: TableCellsIcon,
    current: true,
  },
  {
    name: 'Optimization',
    to: '/risk/optimization',
    icon: AdjustmentsHorizontalIcon,
    current: true,
  },
  {
    name: 'Results',
    to: '/risk/results',
    icon: RiBarChartBoxLine,
    current: true,
  },
  {
    name: 'Visualizer',
    to: '/risk/flowchart',
    icon: GrTree,
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
        <div className="flex h-full">
          <SidebarDemo sidebarMenu={menus} />
          <div className="flex flex-1 flex-col overflow-y-auto bg-slate-50">
            <Outlet />
          </div>
        </div>
      </Providers>
    </div>
  )
}
