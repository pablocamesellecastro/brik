import { useTranslations } from "next-intl";
import Glitch from "@/components/glitch/Glitch";
import PopWindow from "@/components/glitch/PopWindow";

export default function Page() {
  const t = useTranslations("Home");

  return (
    <main className="relative h-screen overflow-hidden">
      <video
        src="/Background_Video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-5xl">
        <Glitch text={t("title")} />
      </h1>

      <PopWindow label={t("pop1")} x="8%" y="15%" href="/games">
        <div className="h-full bg-neon-b" />
      </PopWindow>
      <PopWindow label={t("pop2")} x="65%" y="10%" href="/music">
        <div className="h-full bg-neon-a" />
      </PopWindow>
      <PopWindow label={t("pop3")} x="60%" y="62%" href="/About">
        <div className="h-full bg-foreground" />
      </PopWindow>
    </main>
  );
}
