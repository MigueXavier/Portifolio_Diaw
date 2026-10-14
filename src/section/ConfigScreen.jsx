import { useEffect, useState } from "react";
import { useSettings } from "../context/SettingsContext";
import { languages } from "../data/languages";
import { themes } from "../data/themes";

const GROUPS = [
  { id: "lang", title: "Idioma", options: languages },
  { id: "theme", title: "Tema de cores", options: themes },
];

export default function ConfigScreen() {
  const { theme, setTheme, lang, setLang } = useSettings();
  const [focus, setFocus] = useState({ row: 0, col: 0 });
  const current = { lang, theme };

  useEffect(() => {
    function handleKeyDown(e) {
      const { row, col } = focus;
      const last = (r) => GROUPS[r].options.length - 1;

      if (e.key.startsWith("Arrow")) e.preventDefault();

      if (e.key === "ArrowDown" && row < GROUPS.length - 1)
        setFocus({ row: row + 1, col: Math.min(col, last(row + 1)) });
      if (e.key === "ArrowUp" && row > 0)
        setFocus({ row: row - 1, col: Math.min(col, last(row - 1)) });
      if (e.key === "ArrowRight") setFocus({ row, col: Math.min(col + 1, last(row)) });
      if (e.key === "ArrowLeft") setFocus({ row, col: Math.max(col - 1, 0) });

      if (e.key === "Enter" && !e.repeat) {
        const apply = GROUPS[row].id === "lang" ? setLang : setTheme;
        apply(GROUPS[row].options[col].id);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focus, setLang, setTheme]);

  function handleClick(row, col) {
    setFocus({ row, col });
    const apply = GROUPS[row].id === "lang" ? setLang : setTheme;
    apply(GROUPS[row].options[col].id);
  }

  return (
    <main className="config">
      <div className="config-content">
        {GROUPS.map((group, row) => (
          <section key={group.id}>
            <h2>{group.title}</h2>
            <div className="config-options">
              {group.options.map((option, col) => {
                const classes = [
                  "config-option",
                  focus.row === row && focus.col === col && "focused",
                  option.id === current[group.id] && "active",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <button key={option.id} className={classes} onClick={() => handleClick(row, col)}>
                    {group.id === "theme" && (
                        <span className="swatches" data-theme={option.id}>
                        </span>
                        )}
                    <span>{option.label}</span>
                  </button>
                );
              })}
            </div>
          </section>
        ))}
        <p className="config-hint">Setas para navegar · Enter para selecionar</p>
      </div>
    </main>
  );
}