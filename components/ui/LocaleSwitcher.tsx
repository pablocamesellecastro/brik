"use client";

import { useLocale } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-3">
      {routing.locales.map((l) => (
        <Link
          key={l}
          href={pathname}
          locale={l}
          aria-current={l === locale ? "page" : undefined}
          className="flex min-h-11 items-center cursor-pointer touch-manipulation"
        >
          [{l.toUpperCase()}]
        </Link>
      ))}
    </div>
  );
}
