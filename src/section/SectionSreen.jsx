import { Navigate, useNavigate, useParams } from "react-router-dom";
import MenuRow from "../components/MenuRow";
import { sections } from "../data/sections";
import { menus } from "../data/menu";
import { useSettings } from "../context/SettingsContext";

export default function SectionScreen() {
  const { section: sectionId } = useParams();
  const navigate = useNavigate();
  const { setTheme, setLang } = useSettings();

  const section = sections.find((s) => s.id === sectionId);
  if (!section) return <Navigate to="/" replace />;

  const items = (menus[sectionId] ?? []).map((item) => ({
    ...item,
    color: section.color,
  }));

  function handleSelect(item) {
    if (item.theme) setTheme(item.theme);
    else if (item.lang) setLang(item.lang);
    else navigate(`/${sectionId}/${item.id}`);
  }

  return (
    <main className="home">
      <MenuRow key={sectionId} items={items} onSelect={handleSelect} />
    </main>
  );
}