import { useTranslations } from "next-intl";

const articles = [
  {
    id: "001",
    title: "THE ART OF DIGITAL DECAY",
    category: "CULTURE",
    date: "03.11.2026",
    description:
      "Exploring the aesthetics of digital deterioration in contemporary games.",
    image: "/images/games/digital-decay.jpg",
    featured: true,
  },
  {
    id: "002",
    title: "A WORLD WITHOUT RULES",
    category: "ANALYSIS",
    date: "28.10.2026",
    description: "When games become spaces for experimentation.",
    image: "/images/games/world-without-rules.jpg",
  },
  {
    id: "003",
    title: "BEYOND THE SCREEN",
    category: "OPINION",
    date: "21.10.2026",
    description: "The relationship between digital worlds and reality.",
    image: "/images/games/beyond-screen.jpg",
  },
  {
    id: "004",
    title: "THE SOUND OF PLAY",
    category: "SOUND",
    date: "15.10.2026",
    description: "How sound design shapes the identity of a videogame.",
    image: "/images/games/sound-of-play.jpg",
  },
];

export default function GamesPage() {
  const t = useTranslations("Games");

  const featured = articles[0];
  const secondary = articles.slice(1);

  return (
    <div className="space-y-12">
      {/* Section heading */}
      <section className="space-y-6">
        <div className="flex items-center justify-between font-mono text-xs text-foreground/50">
          <span>BRIK / ARCHIVE 001</span>
          <span>VIDEOGAME CULTURE</span>
        </div>

        <div className="border-y border-foreground/20 py-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 font-mono text-xs text-neon-a">
                {t("eyebrow")}
              </p>

              <h1 className="font-mono text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl">
                GAMES<span className="text-neon-a">.</span>
              </h1>
            </div>

            <span className="hidden font-mono text-xs text-foreground/50 sm:block">
              VOL. 001 — 2026
            </span>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-foreground/60 sm:text-base">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section className="space-y-5">
        <div className="flex items-center justify-between font-mono text-xs">
          <span>01 / FEATURED</span>
          <span className="text-foreground/50">SELECTED ARTICLE</span>
        </div>

        <article className="group grid overflow-hidden border border-foreground/20 md:grid-cols-2">
          <div className="relative min-h-64 overflow-hidden bg-foreground/10 md:min-h-96">
            <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-foreground/30">
              IMAGE / 001
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 p-5 sm:p-8">
            <div className="space-y-4">
              <div className="flex justify-between font-mono text-xs text-foreground/50">
                <span>{featured.category}</span>
                <span>{featured.id}</span>
              </div>

              <h2 className="font-mono text-2xl font-bold tracking-tight transition-colors group-hover:text-neon-a sm:text-4xl">
                {featured.title}
              </h2>

              <p className="text-sm leading-relaxed text-foreground/60">
                {featured.description}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-foreground/20 pt-4 font-mono text-xs">
              <span>{featured.date}</span>
              <span className="transition-transform group-hover:translate-x-1">
                READ ARTICLE →
              </span>
            </div>
          </div>
        </article>
      </section>

      {/* Article grid */}
      <section className="space-y-5">
        <div className="flex items-center justify-between border-b border-foreground/20 pb-3 font-mono text-xs">
          <span>02 / LATEST ARTICLES</span>
          <span className="text-foreground/50">03 ENTRIES</span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {secondary.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="relative mb-4 aspect-[4/3] overflow-hidden border border-foreground/20 bg-foreground/10">
                <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-foreground/30">
                  IMAGE / {article.id}
                </div>
              </div>

              <div className="flex justify-between font-mono text-xs text-foreground/50">
                <span>{article.category}</span>
                <span>{article.date}</span>
              </div>

              <h2 className="mt-3 font-mono text-lg font-bold tracking-tight transition-colors group-hover:text-neon-a">
                {article.title}
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                {article.description}
              </p>

              <div className="mt-5 border-t border-foreground/20 pt-3 font-mono text-xs transition-colors group-hover:text-neon-a">
                READ MORE →
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom section */}
      <section className="border-y border-foreground/20 py-6">
        <div className="flex flex-col justify-between gap-3 font-mono text-xs text-foreground/50 sm:flex-row">
          <span>END OF CURRENT ARCHIVE</span>
          <span>BRIK — GAMES DEPARTMENT</span>
        </div>
      </section>
    </div>
  );
}
