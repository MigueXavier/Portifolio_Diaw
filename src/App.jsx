import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomeScreen from "./section/HomeScreen";
import SectionScreen from "./section/SectionSreen";
import ProfileScreen from "./section/ProfileScreen";
import ProjectScreen from "./section/ProjectScreen";
import ConfigScreen from "./section/ConfigScreen";
import ContactScreen from "./section/ContactScreen";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/:section" element={<SectionScreen />} />
        <Route path="/perfis/:id" element={<ProfileScreen />} />
        <Route path="/:section/:id" element={<p style={{ padding: 32 }}>Em construção</p>} />
        <Route path="/config" element={<ConfigScreen />} />
        <Route path="/mensage" element={<ContactScreen />} />
        <Route path="/projetos/:id" element={<ProjectScreen />} />
      </Route>
    </Routes>
  );
}
//section