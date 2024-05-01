import { Outlet } from "@remix-run/react";
import { Toaster } from "react-hot-toast";

import { Header } from "~/components/header-inv";
import { Providers } from "~/components/providers";
import { SidebarDesktop } from "~/components/sidebar-desktop-inv";
import type { LinksFunction } from '@remix-run/node'
import gridCommStyles from 'ag-grid-community/styles/ag-grid.css?url' // Mandatory CSS required by the grid
import themeStyles from 'ag-grid-community/styles/ag-theme-quartz.css?url'
import customAgStyles from '~/styles/custom-grid-styles.css?url'
import aggrid from '~/styles/aggrid.css?url'
import tailwindStyles from '~/styles/tailwind.css?url'


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
        <main className="flex flex-col flex-1">
          <div className="relative flex flex-1 overflow-hidden">
            <SidebarDesktop />
            <div className="group flex-1  overflow-auto pl-0 animate-in duration-300 ease-in-out peer-[[data-state=open]]:lg:pl-[80px] peer-[[data-state=open]]:xl:pl-[80px] bg-slate-50" >
              <Outlet />
            </div>
          </div>
        </main>
      </Providers>
    </div>
  );
}
