import React from 'react'
import { Link, Outlet } from '@remix-run/react'

import type { LinksFunction } from '@remix-run/node'
import gridCommStyles from 'ag-grid-community/styles/ag-grid.css?url' // Mandatory CSS required by the grid
import themeStyles from 'ag-grid-community/styles/ag-theme-quartz.css?url'
import customAgStyles from '~/styles/custom-grid-styles.css?url'
import aggrid from '~/styles/aggrid.css?url'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '~/components/ui/navigation-menu'
import { cn } from '~/lib/utils'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: gridCommStyles },
  { rel: 'stylesheet', href: themeStyles },
  { rel: 'stylesheet', href: customAgStyles },
  { rel: 'stylesheet', href: aggrid },
]

const components: { title: string; to: string; description: string }[] = [
  {
    title: 'Demand Review',
    to: '/snop/process',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'New Product Review',
    to: '/snop/process/product',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Inventory Review',
    to: '/snop/process/supply',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Supply Review',
    to: '/snop/process/supply',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Demand Supply Balancing',
    to: '/snop/process/balance',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Financial Planning',
    to: '/snop/process/finance',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Executive Meeting',
    to: '/snop/process/executive',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
  {
    title: 'Distribution Meeting',
    to: '/snop/process/distribution',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<'Link'>,
  React.ComponentPropsWithoutRef<'Link'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <div className="flex items-center justify-center rounded-lg hover:bg-gradient-to-t hover:from-indigo-400 hover:via-cyan-400 hover:to-sky-500 shadow-md p-0.5 bg-sky-50">
          <Link
            to={ref}
            // ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors bg-sky-50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </div>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

export default function MasterData() {
  return (
    <>
      <div>
        <NavigationMenu className="m-4">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-sky-500 text-white text-lg">
                S&OP Process
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      to={component.to}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <>
          <Outlet />
        </>
      </div>
    </>
  )
}
