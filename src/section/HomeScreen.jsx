import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuRow from "../components/MenuRow";
import SectionPreview from "../components/SectionPreview";
import { sections } from "../data/sections";
import { useT } from "../i18n/useT";

export default function HomeScreen() {
  const navigate = useNavigate();
  const { t } = useT();
  const [focusedId, setFocusedId] = useState(sections[0].id);

  const items = sections.map((s) => ({ ...s, label: t(`sections.${s.id}`) }));

  return (
    <main className="home home-screen">
      <MenuRow
        items={items}
        onSelect={(s) => navigate(`/${s.id}`)}
        onFocusChange={(s) => setFocusedId(s.id)}
      />
      <SectionPreview key={focusedId} sectionId={focusedId} />
    </main>
  );
}