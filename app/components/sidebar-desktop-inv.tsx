import * as React from 'react'
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
import { NavLink } from '@remix-run/react'
import { Separator } from './ui/separator'
import { useSidebar } from '~/lib/hooks/use-sidebar'
import { cn } from '~/lib/utils'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const menus = [
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

  {
    id: 10,
    name: 'Input Data',
    to: '/inventory/input',
    icon: CameraIcon,
    current: false,
  },
  {
    id: 11,
    name: 'Scenario Planning',
    to: '/inventory/scenario',
    icon: CameraIcon,
    current: false,
  },

  {
    id: 12,
    name: 'Optimization',
    to: '/inventory/optimize',
    icon: Component1Icon,
    current: false,
  },
  {
    id: 12,
    name: 'Optimization',
    to: '/inventory/optimize2',
    icon: Component1Icon,
    current: false,
  },
  {
    id: 12,
    name: 'Optimization',
    to: '/inventory/country',
    icon: Component1Icon,
    current: false,
  },

]

export interface SidebarProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

export function Sidebar({ className, children }: SidebarProps) {
  const { isSidebarOpen, isLoading } = useSidebar()

  return (
    <div
      data-state={isSidebarOpen && !isLoading ? 'open' : 'closed'}
      className={cn(className, 'h-full flex-col bg-slate-50 dark:bg-zinc-950 ')}
    >
      {children}
    </div>
  )
}

export function SidebarDesktop() {
  return (
    <Sidebar className="peer absolute inset-y-0 z-30 -translate-x-full border-r duration-300 ease-in-out data-[state=open]:translate-x-0 flex ">
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col overflow-y-auto">
          <div className="flex-1 mt-4">
            <nav aria-label="Sidebar" className="flex items-center">
              <div className="static w-full space-y-2 px-2">
                {senariomenus.map((item) => (
                  <NavLink
                    to={item.to}
                    key={item.id}
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? 'bg-sky-100 text-sky-500 border border-sky-500'
                          : 'text-slate-700 hover:bg-sky-50 hover:text-sky-500',
                        'group flex w-full flex-col items-center rounded-md p-3 text-sm font-medium'
                      )
                    }
                  >
                    <item.icon className="h-4 w-4" aria-hidden="true" />

                    <h2 className="absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-sky-50 px-0 py-0 font-semibold text-sky-500 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300 ">
                      {item?.name}
                    </h2>
                  </NavLink>
                ))}
                <Separator className="my-4" />
                {menus.map((item) => (
                  <NavLink
                    to={item.to}
                    key={item.id}
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? 'bg-sky-100 text-sky-500 border border-sky-500'
                          : 'text-slate-700 hover:bg-sky-50 hover:text-sky-500',
                        'group flex w-full flex-col items-center rounded-md p-3 text-sm font-medium'
                      )
                    }
                  >
                    <item.icon className="h-4 w-4" aria-hidden="true" />

                    <h2 className="absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-sky-50 px-0 py-0 font-semibold text-sky-500 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300 ">
                      {item?.name}
                    </h2>
                  </NavLink>
                ))}
              </div>
            </nav>
          </div>
     
        </div>
      </div>
    </Sidebar>
  )
}
