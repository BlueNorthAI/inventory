import {
  AdjustmentsHorizontalIcon,
  Squares2X2Icon
} from "@heroicons/react/20/solid";
import { useState } from "react";

import { ThemeToggle } from "~/components/theme-toggle";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import {
  CubeIcon,
  GearIcon,
  PieChartIcon,
  MixIcon,
  BarChartIcon,
  EnvelopeOpenIcon,
  ExclamationTriangleIcon,
  LoopIcon,
} from "@radix-ui/react-icons";
import { Outlet, NavLink, Link } from "@remix-run/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface NavigationItem {
  icon: any;
  name: string;
  current: boolean;
  children?: NavigationItem[];
  href?: string; // Optional href property
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
    name: 'Scenario Planning',
    to: '/snop/optimize',
    icon: MixIcon,
    current: true,
  },
  {
    id: 4,
    name: 'Exceptions',
    to: '/snop/incidents',
    icon: ExclamationTriangleIcon,
    current: false,
  },
  {
    id: 5,
    name: 'Truck',
    to: '/snop/truck',
    icon: BarChartIcon,
    current: false,
  },
  {
    id: 6,
    name: 'Report',
    to: '/snop/dashboard/overview',
    icon: PieChartIcon,
    current: false,
  },
  {
    id: 7,
    name: 'Email',
    to: '/snop/email',
    icon: EnvelopeOpenIcon,
    current: false,
  },
]
const navigation: NavigationItem[] = [
  {
    name: "Team",
    current: false,
    icon: AdjustmentsHorizontalIcon,
    children: [
      {
        name: "Overview",
        href: "#",
        current: false,
        icon: AdjustmentsHorizontalIcon,
      },
      {
        name: "Members",
        href: "#",
        current: false,
        icon: AdjustmentsHorizontalIcon,
      },
      {
        name: "Calendar",
        href: "#",
        current: false,
        icon: AdjustmentsHorizontalIcon,
      },
      {
        name: "Settings",
        href: "#",
        current: false,
        icon: AdjustmentsHorizontalIcon,
      },
    ],
  },
  {
    name: "Projects",
    current: false,
    icon: AdjustmentsHorizontalIcon,
    children: [
      {
        name: "Overview",
        href: "#",
        current: false,
        icon: AdjustmentsHorizontalIcon,
      },
      {
        name: "Members",
        href: "#",
        current: false,
        icon: AdjustmentsHorizontalIcon,
      },
      {
        name: "Calendar",
        href: "#",
        current: false,
        icon: AdjustmentsHorizontalIcon,
      },
      {
        name: "Settings",
        href: "#",
        current: false,
        icon: AdjustmentsHorizontalIcon,
      },
    ],
  },
  {
    name: "Calendar",
    current: false,
    icon: AdjustmentsHorizontalIcon,
    children: [
      {
        name: "Overview",
        href: "#",
        current: false,
        icon: AdjustmentsHorizontalIcon,
      },
      {
        name: "Members",
        href: "#",
        current: false,
        icon: AdjustmentsHorizontalIcon,
      },
      {
        name: "Calendar",
        href: "#",
        current: false,
        icon: AdjustmentsHorizontalIcon,
      },
      {
        name: "Settings",
        href: "#",
        current: false,
        icon: AdjustmentsHorizontalIcon,
      },
    ],
  },
  {
    name: "Documents",
    current: false,
    icon: AdjustmentsHorizontalIcon,
    children: [
      {
        name: "Overview",
        href: "#",
        current: false,
        icon: AdjustmentsHorizontalIcon,
      },
      {
        name: "Members",
        href: "#",
        current: false,
        icon: AdjustmentsHorizontalIcon,
      },
      {
        name: "Calendar",
        href: "#",
        current: false,
        icon: AdjustmentsHorizontalIcon,
      },
      {
        name: "Settings",
        href: "#",
        current: false,
        icon: AdjustmentsHorizontalIcon,
      },
    ],
  },
  {
    name: "Reports",
    current: false,
    icon: AdjustmentsHorizontalIcon,
    children: [
      {
        name: "Overview",
        href: "#",
        current: false,
        icon: AdjustmentsHorizontalIcon,
      },
      {
        name: "Members",
        href: "#",
        current: false,
        icon: AdjustmentsHorizontalIcon,
      },
      {
        name: "Calendar",
        href: "#",
        current: false,
        icon: AdjustmentsHorizontalIcon,
      },
      {
        name: "Settings",
        href: "#",
        current: false,
        icon: AdjustmentsHorizontalIcon,
      },
    ],
  },
];

export function SidebarList({ userId }: SidebarListProps) {
 
  return (
    <div className="flex-1 overflow-auto">
      <div className="flex flex-col overflow-y-auto">
        <div className="flex-1 mt-4">
          <nav aria-label="Sidebar" className="flex items-center">
            <div className="static  w-full space-y-2 px-2">
              {menus.map((item, index) => (
              
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
  )
}
