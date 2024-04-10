// "use client";

import { useFetcher, Link } from "@remix-run/react";
import { ClientOnly } from 'remix-utils/client-only'

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { IconExternalLink } from "~/components/ui/icons";
import { useUser } from "~/utils";
// export interface UserMenuProps {
//   user: Session["user"];
// }

function getUserInitials(name: string) {
  const [firstName, lastName] = name.split(" ");
  return lastName ? `${firstName[0]}${lastName[0]}` : firstName.slice(0, 2);
}

export function UserMenuClient() {
  const user = useUser();
  const fetcher = useFetcher();
  return (
    <div className="flex items-center justify-between">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="pl-0">
            <div className="flex items-center justify-center text-xs font-medium uppercase rounded-full select-none size-7 shrink-0 bg-muted/50 text-muted-foreground">
              {user?.email ? getUserInitials(user?.email) : null}
            </div>
            <span className="ml-2">{user?.email}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={8} align="start" className="w-[180px]">
          <DropdownMenuItem className="flex-col items-start">
            <div className="text-xs font-medium">{user?.email}</div>
            <div className="text-xs text-zinc-500">{user?.email}</div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link
              to="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full text-xs"
            >
              Vercel Homepage
              <IconExternalLink className="size-3 ml-auto" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              fetcher.submit({ method: "POST" }, { action: "logout" })
            }
            className="text-xs"
          >
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function UserMenu() {
  return (
    <ClientOnly fallback={<div>Loading...</div>}>
      {() => <UserMenuClient />}
    </ClientOnly>
  );
}
