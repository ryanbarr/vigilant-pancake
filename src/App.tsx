import { HashRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Bot from "./pages/Bot";
import Components from "./pages/Components";
import Extensions from "./pages/Extensions";
import Home from "./pages/Home";
import Overlays from "./pages/Overlays";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overlays" element={<Overlays />} />
          <Route path="/components" element={<Components />} />
          <Route path="/bot" element={<Bot />} />
          <Route path="/extensions" element={<Extensions />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
};

export default App;
