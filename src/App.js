import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DebugAPI from "./DebugAPI";  // Ensure correct filename casing
import ResponsePage from "./pages/ResponsePage"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DebugAPI />} />
        <Route path="/response" element={<ResponsePage />} />
      </Routes>
    </Router>
  );
}

export default App;
