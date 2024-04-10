import { Outlet } from "@remix-run/react";
import { Toaster } from "react-hot-toast";

import { Header } from "~/components/header-inv";
import { Providers } from "~/components/providers";
import { SidebarDesktop } from "~/components/sidebar-desktop-inv";

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
            <div className="group flex-1  overflow-auto pl-0 animate-in duration-300 ease-in-out peer-[[data-state=open]]:lg:pl-[80px] peer-[[data-state=open]]:xl:pl-[80px]" style={{ height: 'calc(100vh - 96px)' }}>
              <Outlet />
            </div>
          </div>
        </main>
      </Providers>
    </div>
  );
}
