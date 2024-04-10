import { Moon, Sun } from "lucide-react"

import { Button } from "../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { useTheme } from "../components/theme-provider"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


// import { Theme, useTheme } from "remix-themes";
// import { Button } from "./ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
// // import { Moon, Sun } from "lucide-react";
// import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

// export function ThemeSelector() {
//   const [currentTheme, setTheme] = useTheme();

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <button
//           className="flex h-10 w-10 items-center justify-center rounded-xl shadow-md shadow-black/5  dark:bg-slate-800 dark:text-sky-500 text-sky-500 ring:outline-none focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all duration-300 ease-in-out"
//           aria-label="Theme"
//         >
//           {currentTheme === Theme.DARK ? (
//             <MoonIcon className="h-6 w-6  scale-100 transition-all" />
//           ) : (
//             <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all" />
//           )}
//           <span className="sr-only">Toggle theme</span>
//         </button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem
//           className="hover:bg-sky-500"
//           onClick={() => setTheme(Theme.LIGHT)}
//         >
//           <div className="flex items-center mx-1 p-1 ">
//             <SunIcon className="h-6 w-6 mr-2" />
//             <p> Light</p>
//           </div>
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme(Theme.DARK)}>
//           <div className="flex items-center mx-1">
//             <MoonIcon className="h-6 w-6 mr-2" />
//             <p>Dark</p>
//           </div>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
