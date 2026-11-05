import { useTranslations } from "next-intl";

export default function Music() {
  const t = useTranslations("Games");
  return (
    <main className="p-8 font-mono">
      <h1 className="text-3xl">{t("title")}</h1>
    </main>
  );
}
