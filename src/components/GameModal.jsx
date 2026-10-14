import { useEffect } from "react";
import { useT } from "../i18n/useT";

export default function GameModal({ game, onClose }) {
  const { t, l } = useT();

  useEffect(() => {
    // Em fase de captura, para o resto do site não reagir ao teclado enquanto o jogo está aberto
    function handleKeyDown(e) {
      e.stopPropagation();
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [onClose]);

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <header className="modal-header">
          <span>{game.label}</span>
          <button onClick={onClose}>✕ {t("game.close")}</button>
        </header>
        <iframe
          className="modal-frame"
          src={game.embed}
          title={game.label}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
        {game.controls && <footer className="modal-footer">{l(game.controls)}</footer>}
      </div>
    </div>
  );
}