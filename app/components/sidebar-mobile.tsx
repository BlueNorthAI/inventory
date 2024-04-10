import { Sidebar } from "~/components/sidebar";
import { Button } from "~/components/ui/button";
import { IconSidebar } from "~/components/ui/icons";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";

import lowes from "../../public/assets/lowes.png";

interface SidebarMobileProps {
  children: React.ReactNode;
}

export function SidebarMobile({ children }: SidebarMobileProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="-ml-2 flex p-0 lg:hidden">
          <img className="cursor-poniter  h-12 w-16 " src={lowes} alt="logo" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="inset-y-0 flex h-auto w-[300px] flex-col p-0">
        <Sidebar className="flex">{children}</Sidebar>
      </SheetContent>
    </Sheet>
  );
}
