import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "@/components/ui/LocaleSwitcher";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function MagazineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-foreground/20 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="font-mono text-xl font-bold tracking-tighter hover:opacity-60 transition-opacity"
          >
            BRIK<span className="text-neon-a">.</span>
          </Link>

          <nav className="flex items-center gap-3 font-mono text-xs sm:gap-6 sm:text-sm">
            <Link href="/games" className="transition-opacity hover:opacity-50">
              GAMES
            </Link>

            <Link href="/music" className="transition-opacity hover:opacity-50">
              MUSIC
            </Link>

            <Link href="/about" className="transition-opacity hover:opacity-50">
              ABOUT
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        {children}
      </main>

      <footer className="border-t border-foreground/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 font-mono text-xs text-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} BRIK</span>

          <span>INDEPENDENT DIGITAL MAGAZINE</span>

          <Link href="/" className="hover:text-foreground transition-colors">
            BACK TO HOME ↑
          </Link>
        </div>
      </footer>
    </div>
  );
}
