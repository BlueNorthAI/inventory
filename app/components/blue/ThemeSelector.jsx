import { Theme, useTheme } from "remix-themes";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
// import { Moon, Sun } from "lucide-react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export function ThemeSelector() {
  const [currentTheme, setTheme] = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl shadow-md shadow-black/5  dark:bg-slate-800 dark:text-sky-500 text-sky-500 ring:outline-none focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all duration-300 ease-in-out"
          aria-label="Theme"
        >
          {currentTheme === Theme.DARK ? (
            <MoonIcon className="h-6 w-6  scale-100 transition-all" />
          ) : (
            <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all" />
          )}
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="hover:bg-sky-500"
          onClick={() => setTheme(Theme.LIGHT)}
        >
          <div className="flex items-center mx-1 p-1 ">
            <SunIcon className="h-6 w-6 mr-2" />
            <p> Light</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(Theme.DARK)}>
          <div className="flex items-center mx-1">
            <MoonIcon className="h-6 w-6 mr-2" />
            <p>Dark</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
