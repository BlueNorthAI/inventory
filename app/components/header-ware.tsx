import clsx from 'clsx'
import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { NavLink,Link } from '@remix-run/react'
import { NavigationMenuLink } from "~/components/ui/navigation-menu";
import { cn } from "~/lib/utils";
import { FaMapLocationDot, FaPeopleGroup } from 'react-icons/fa6'
import {
  FaChartLine,
  FaTruck,
  FaShip,
  FaDatabase,
  FaWarehouse,
  FaLock,
} from 'react-icons/fa'
import { GrTree } from 'react-icons/gr'
import { MdInventory } from 'react-icons/md'
import { SidebarToggle } from "./sidebar-toggle-inv";

const dropdown = [
  {
    icon: FaMapLocationDot,
    name: 'Network Optimizer',
    to: '/network/config',
    iconForeground: 'text-green-700',
    iconBackground: 'bg-green-100',
    description:
      'Analyze demand forecasts and trends to optimize your supply chain and inventory levels.',
  },
  {
    icon: MdInventory,
    name: 'Inventory Optimizer',
    to: '/inventory/dashboard',
    iconForeground: 'text-rose-500',
    iconBackground: 'bg-rose-100',
    description:
      'Monitor your supply chain operations, including supplier performance and material availability.',
  },
  {
    icon: FaChartLine,
    name: 'Sales & Operation Planning',
    to: '/snop/master',
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-100',
    description:
      'Get a comprehensive overview of your dashboard metrics and performance indicators.',
  },
  {
    icon: FaTruck,
    name: 'Transport Cleansheet',
    to: '/trans/config',
    iconForeground: 'text-yellow-600',
    iconBackground: 'bg-yellow-100',
    description:
      'Manage your inventory levels efficiently to meet demand without overstocking.',
  },
  {
    icon: FaPeopleGroup,
    name: 'Risk Optimizer',
    to: '/risk/analysis',
    iconForeground: 'text-orange-700',
    iconBackground: 'bg-orange-100',
    description:
      "Review the balance sheet for a snapshot of the company's financial health at a specific point in time.",
  },
  {
    icon: FaLock,
    name: 'Saftey Stock Optimizer',
    to: '/ss/dc',
    iconForeground: 'text-lime-700',
    iconBackground: 'bg-lime-100',
    description:
      "Review the balance sheet for a snapshot of the company's financial health at a specific point in time.",
  },
  // {
  //   icon: FaShip,
  //   name: 'Transshipment Optimizer',
  //   to: '/snop/dashboard/spend',
  //   iconForeground: 'text-gray-700',
  //   iconBackground: 'bg-gray-300',
  //   description:
  //     "Track and analyze your company's spending to identify cost-saving opportunities.",
  // },
  {
    icon: FaDatabase,
    name: 'Capacity Analytics',
    to: '/capacity/master',
    iconForeground: 'text-blue-700',
    iconBackground: 'bg-blue-100',
    description:
      'Gain insights into financial performance, including revenue, expenses, and profitability.',
  },
  {
    icon: GrTree,
    name: 'Product Flow Analyzer',
    to: '/product/sim',
    iconForeground: 'text-sky-600',
    iconBackground: 'bg-sky-100',
    description:
      'Evaluate the effectiveness of sales and marketing campaigns and strategies.',
  },
  {
    icon: FaWarehouse,
    name: 'Warehouse Optimizer',
    to: '/warhousing/dc',
    iconForeground: 'text-violet-700',
    iconBackground: 'bg-violet-100',
    description:
      'Plan and monitor marketing campaigns to enhance brand visibility and lead generation.',
  },
]
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
  // eslint-disable-next-line react/prop-types
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors  hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const navigation = [
  { name: 'Network', to: '/network/config', current: true },
  { name: 'Track & Trace', to: '/track/order', current: false },
  { name: 'Events', to: '/events/demand', current: false },
  { name: 'Planning', to: '/planning/demand', current: false },
  { name: 'Execution', to: '/execution/store', current: false },
]
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      prefetch="intent"
      className={({ isActive }) =>
        clsx(
          'rounded-md px-2 py-2 text-sm font-semibold uppercase',
          isActive
            ? 'py-2 bg-sky-500 text-white  bg-opacity-75 border border-sky-500'
            : 'text-white hover:bg-blue-900 hover:bg-opacity-75'
        )
      }
      aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
    >
      {children}
    </NavLink>
  )
}

// function UserOrLogin() {
//   // const user = useUser();
//   // const user = "shrikanth@bluenorthai.com"
//   return (
//     <>
//       <div className="flex items-center ">
//         {/* <IconSeparator className="size-6 text-muted-foreground/50" /> */}
//         {/* <UserMenu /> */}
      
//       </div>
//     </>
//   );
// }

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-12  shrink-0 bg-[#272e62]">
      <div className="flex items-center text-white text-lg ">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <SidebarToggle />
        </React.Suspense>
        <div className="ml-10 text-2xl font-semibold text-white">
        Warehouse Optimizer
        </div>
      </div>

      <nav className="">
        <div className="w-full">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              {/* <div className=" flex items-baseline space-x-4 ">
                {navigation.map((item) => (
                  <NavItem to={item.to} key={item.name}>
                    {item.name}
                  </NavItem>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </nav>

      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex items-center justify-end ">
            <img
              className="cursor-poniter  h-12 w-15"
              src="/assets/lowes.png"
              width={80}
              height={70}
              alt="logo"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 mr-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="grid grid-cols-3 w-[700px] gap-2 p-4 ">
              {dropdown.map((item) => (
                <Menu.Item key={item.name}>
                  <Link to={item.to} className="">
                    <div className="rounded-lg hover:bg-gradient-to-t hover:from-indigo-400 hover:via-cyan-400 hover:to-sky-500  p-0.5">
                      <div className=" flex items-center w-full justify-between hover:bg-sky-50 rounded-lg text-2xl text-blue-900 font-bold">
                        <div className="flex items-center p-4 ">
                          <span
                            className={classNames(
                              item.iconBackground,
                              item.iconForeground,
                              'inline-flex rounded-lg p-2'
                            )}
                          >
                            <item.icon
                              className="h-8 w-8 flex-none rounded-lg"
                              aria-hidden="true"
                            />
                          </span>
                          <div className="ml-4 text-lg font-semibold text-gray-900">
                            {item.name}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 
                      <div className="px-6 py-4">
                        <p className="text-base text-gray-500">
                          {item.description}
                        </p>
                      </div> */}
                  </Link>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </header>
  )
}
