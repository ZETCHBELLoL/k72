import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agency from "./pages/Agency";
import Work from "./pages/Work";
import HomeMenuController from "./components/layout/HomeMenuController";

const App = () => {
  return (
    <div className="text-white">
      <HomeMenuController />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
};

export default App;
