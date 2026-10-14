import { useSettings } from "../context/SettingsContext";
import pt from "./pt";
import en from "./en";

const dictionaries = { pt, en };

export function useT() {
  const { lang } = useSettings();


  const t = (key) =>
    key.split(".").reduce((obj, k) => obj?.[k], dictionaries[lang]) ?? key;

  const l = (value) =>
    value && typeof value === "object" && !Array.isArray(value)
      ? value[lang] ?? value.pt
      : value;

  return { t, l, lang };
}