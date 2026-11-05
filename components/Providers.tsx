import { ThemeProvider } from "@wrksz/themes/next";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
