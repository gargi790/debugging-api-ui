import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./pages/About";
import DebugAPI from "./DebugAPI";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/debug" element={<DebugAPI />} />
    </Routes>
  );
}

export default App;
