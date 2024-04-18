import { Sidebar } from "~/components/sidebar";
import { SidebarList } from "~/components/sidebar-list-inv";
// import { auth } from '@/auth'

export function SidebarDesktop() {


  return (
    <Sidebar className="peer absolute inset-y-0 z-30 -translate-x-full border-r duration-300 ease-in-out data-[state=open]:translate-x-0 flex ">
      <SidebarList  />
    </Sidebar>
  );
}
