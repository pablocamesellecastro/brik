import ThemeToggle from "./ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 z-50 flex items-center gap-2 p-3 sm:gap-4 sm:p-4">
      <LocaleSwitcher />
      <ThemeToggle />
    </header>
  );
}
