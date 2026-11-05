import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("Games");
  return (
    <main className="p-8 font-mono">
      <h1 className="text-3xl">{t("title")}</h1>
      <p>woqehefniuxhoweifhxqwiouefniuoeqwbfibqwefuibt</p>
    </main>
  );
}
