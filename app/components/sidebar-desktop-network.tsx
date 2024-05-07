import {
  CubeIcon,
  GearIcon,
  PieChartIcon,
  MixIcon,
  BarChartIcon,
  ExclamationTriangleIcon,
  LoopIcon,
} from '@radix-ui/react-icons'
import { NavLink } from '@remix-run/react'
import { Separator } from './ui/separator'
import * as React from 'react'

import { useSidebar } from '~/lib/hooks/use-sidebar'
import { cn } from '~/lib/utils'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const menus = [
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
]

const senariomenus = [
  {
    id: 4,
    name: 'Capacity Optimizer',
    to: '/snop/scenarioanalysis',
    icon: BarChartIcon,
    current: false,
  },
  {
    id: 5,
    name: 'Scenario Planning',
    to: '/snop/scenarioplan',
    icon: MixIcon,
    current: true,
  },
  {
    id: 6,
    name: 'Optimizer',
    to: '/snop/optimize',
    icon: PieChartIcon,
    current: true,
  },
  {
    id: 7,
    name: 'Scenario Planning',
    to: '/snop/scenario',
    icon: GearIcon,
    current: true,
  },
  {
    id: 8,
    name: 'Inventory Optimizer',
    to: '/snop/inventoryopt',
    icon: GearIcon,
    current: true,
  },
  // {
  //   id: 6,
  //   name: 'Truck',
  //   to: '/snop/truck',
  //   icon: BarChartIcon,
  //   current: false,
  // },
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
              <div className="static  w-full space-y-2 px-2 ">
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
                    <item.icon className="h-6 w-6" aria-hidden="true" />

                    <h2 className="absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-sky-50 px-0 py-0 font-semibold text-sky-500 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300 ">
                      {item?.name}
                    </h2>
                  </NavLink>
                ))}
                <Separator className="my-4" />
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
                    <item.icon className="h-6 w-6" aria-hidden="true" />

                    <h2 className="absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-sky-50 px-0 py-0 font-semibold text-sky-500 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300 ">
                      {item?.name}
                    </h2>
                  </NavLink>
                ))}
              </div>
            </nav>
          </div>
          {/* <div className="">
              <Link to="/snop/appbar">
                <div
                  className={classNames(
                    "text-blue-100 hover:bg-blue-800 hover:text-white",
                    "group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium",
                  )}
                >
                  <div className="">
                    <Squares2X2Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2
                    className={`whitespace-pre duration-500 ${!open && "translate-x-28 overflow-hidden opacity-0"
                      }`}
                  >
                    Appbar
                  </h2>
                  <h2
                    className={`${open && "hidden"
                      } absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-blue-800 px-0 py-0 font-semibold text-blue-100 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `}
                  >
                    User Profile
                  </h2>
                </div>
              </Link>
            </div> */}
        </div>
      </div>
    </Sidebar>
  )
}
