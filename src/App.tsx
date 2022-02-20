import { HashRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
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
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
};

export default App;
