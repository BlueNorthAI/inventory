import { useSidebar } from "~/lib/hooks/use-sidebar";

import  lowes  from "../../public/assets/lowes.png";
// eslint-disable-next-line import/no-unresolved
export function SidebarToggle() {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      className="-ml-2 hidden lg:flex"
      onClick={() => {
        toggleSidebar();
      }}
    >
      <img className="cursor-poniter  h-12 w-15 " src={lowes} alt="logo" />
      {/* <IconSidebar className="size-6" /> */}
      <span className="sr-only">Toggle Sidebar</span>
    </button>
  );
}
