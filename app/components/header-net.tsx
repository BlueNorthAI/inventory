import React from "react";
import clsx from 'clsx'
import { NavLink,Link, Outlet, useLoaderData, useMatches } from '@remix-run/react'
import { NavigationMenuLink } from "~/components/ui/navigation-menu";
import { cn } from "~/lib/utils";
import { useUser } from "~/utils";

// import { SidebarMobile } from "./sidebar-mobile";
import { SidebarToggle } from "./sidebar-toggle-inv";


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
  { name: 'Network', to: '/network/overall', current: true },
  { name: 'DC', to: '/network/dc', current: false },
  { name: 'Order Management', to: '/network/order', current: false },
  { name: 'SKU', to: '/network/sku', current: false },
  { name: 'Supply Management', to: '/network/supply', current: false },
  { name: 'Carrier', to: '/network/carrier', current: false },
  { name: 'Equipment', to: '/network/equip', current: false },
  { name: 'Labor', to: '/network/labor', current: false },
  { name: 'Inventory', to: '/network/inventory', current: false },
]
function classNames(...classes) {
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
function UserOrLogin() {
  // const user = useUser();
  // const user = "shrikanth@bluenorthai.com"
  return (
    <>
      
      
    
      <div className="flex items-center ">
        {/* <IconSeparator className="size-6 text-muted-foreground/50" /> */}
        {/* <UserMenu /> */}
      
      </div>
    </>
  );
}
export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-12  shrink-0 bg-[#272e62]">
      <div className="flex items-center text-white text-lg ">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <SidebarToggle />
        </React.Suspense>
      </div>

      <nav className="">
        <div className="w-full">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className=" flex items-baseline space-x-4 ">
                {navigation.map((item) => (
                  <NavItem to={item.to} key={item.name}>
                  {item.name}
                  </NavItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex items-center justify-end ">
        <button className="text-white font-semibold  p-1 flex items-center  ">
          <img
            className="cursor-poniter  h-12 w-15"
            src="/assets/lowes.png"
            width={80}
            height={70}
            alt="logo"
          />
          {/* <IconGitHub /> */}
        </button>
      </div>
    </header>
  )
}
