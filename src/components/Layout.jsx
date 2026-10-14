import { useEffect } from "react";

import logo from "../assets/icons/logo_128.png";
import PixelIcon from "./Pixelcons";

import { Link,Outlet, useLocation, useNavigate } from "react-router-dom";
import { sections } from "../data/sections";
import { menus } from "../data/menu";

import { useT } from "../i18n/useT";

export default function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { t } = useT();

  const segments = pathname.split("/").filter(Boolean);
  const isHome = segments.length === 0;
  const parent = "/" + segments.slice(0, -1).join("/");

  const [sectionId, itemId] = segments;
  const section = sections.find((s) => s.id === sectionId);
  const item = menus[sectionId]?.find((i) => i.id === itemId);

  const crumbs = [
    t("home"),
    section && t(`sections.${section.id}`),
    item?.label,
  ].filter(Boolean)

  useEffect(() => {
    if (isHome) return;
    function handleKeyDown(e) {
      if (e.target.closest?.("input, textarea, select")) return;
      if (e.key === "Escape" || e.key === "Backspace") navigate(parent);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isHome, parent, navigate]);

  return (
    <div className="app" style={section ? { "--card-color": section.color } : undefined}>
      <header className="topbar">
        {!isHome && <button onClick={() => navigate(parent)}>◀ {t("Back")}</button>}
        <nav>
          {crumbs.map((crumb, i) => (
            <span key={i} className={i === crumbs.length - 1 ? "current" : ""}>
              {i > 0 && " \u203A "}
              {crumb}
            </span>
          ))}
        </nav>
          <Link to="/" className="topbar-logo" aria-label={t("Home")}>
            <PixelIcon src={logo} width={80} height={80} color="var(--text)" />
          </Link>
      </header>
      <div className="page" key={pathname}>
        <Outlet />
      </div>
    </div>
  );
}