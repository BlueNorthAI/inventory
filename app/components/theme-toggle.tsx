// ThemeToggle.tsx
import toast from "react-hot-toast";

import { Button } from "~/components/ui/button";
import { IconMoon, IconSun } from "~/components/ui/icons";
import { useTheme } from "~/context/theme-context";

export function ThemeToggle() {
  const { toggleTheme, theme } = useTheme();

  return (
    // <Button variant="ghost" size="icon" onClick={toggleTheme}>
    <Button
      className="bg-blue-600 text-white"
      size="icon"
      onClick={() => toast.success("Theme changed")}
    >
      {theme === "dark" ? (
        <IconMoon className="transition-all" />
      ) : (
        <IconSun className="transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
