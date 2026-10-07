import { Routes, Route } from "react-router-dom";
import HomeScreen from "./section/HomeScreen";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/:section" element={<p style={{ padding: 32 }}>Em construção</p>} />
    </Routes>
  );
}