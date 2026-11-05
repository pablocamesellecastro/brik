"use client";

import { useTheme } from "@wrksz/themes/client";
import Icon from "./Icon";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Cambiar tema"
      className="flex min-h-11 min-w-11 items-center justify-center cursor-pointer touch-manipulation"
    >
      {resolvedTheme === "dark" ? <Icon name="sun" /> : <Icon name="moon" />}
    </button>
  );
}
