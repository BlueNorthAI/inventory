import { Outlet } from "@remix-run/react";
import { Toaster } from "react-hot-toast";

import { Header } from "~/components/header-inv";
import { Providers } from "~/components/providers";
import { SidebarDesktop } from "~/components/sidebar-desktop-inv";

export default function InventoryIndex() {
  return (
    <div className="">
      <Toaster />
      <Providers
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden">
            <SidebarDesktop />
          </div>
          <main className="flex flex-col flex-1 bg-muted/50">
            <Outlet />
          </main>
        </div>
      </Providers>
    </div>
  );
}
