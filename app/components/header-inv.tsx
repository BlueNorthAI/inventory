import { Link } from "@remix-run/react";
import React from "react";
import { SidebarList } from "~/components/sidebar-list-inv";
import { Button } from "~/components/ui/button";
import {
  IconNextChat,
  IconSeparator,
  IconGitHub,
  IconVercel,
} from "~/components/ui/icons";
import { NavigationMenuLink } from "~/components/ui/navigation-menu";
import { cn } from "~/lib/utils";
import { useUser } from "~/utils";

// import { SidebarMobile } from "./sidebar-mobile";
import { SidebarToggle } from "./sidebar-toggle-inv";

const navigation = [
  { name: 'NETWORK', to: 'overview', current: true },
  { name: 'DC', to: 'demand', current: false },
  { name: 'ORDER MANAGEMENT', to: 'supply', current: false },
  { name: 'SKU', to: 'inventory', current: false },
  { name: 'SUPPLY MANAGEMENT', to: 'spend', current: false },
  { name: 'CARRIER', to: 'finance', current: false },
  { name: 'EQUIPMENT', to: 'sales', current: false },
  { name: 'LABOR', to: 'campaign', current: false },
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
      <div className="flex items-center justify-end ">
        <div className="flex items-center justify-end ">
          <Link
            to="/events/demand"
            className="text-white font-semibold  p-1 flex items-center  "
          >
            <img
              className="cursor-poniter  h-12 w-15"
              src="/assets/lowes.png"
              width={80}
              height={70}
              alt="logo"
            />
            {/* <IconGitHub /> */}
          </Link>
        </div>
      </div>
    </header>
  )
}
