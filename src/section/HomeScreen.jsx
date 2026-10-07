import { useNavigate } from "react-router-dom";
import MenuRow from "../components/MenuRow";
import { sections } from "../data/sections";

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <main className="home">
      <MenuRow items={sections} onSelect={(s) => navigate(`/${s.id}`)} />
    </main>
  );
}