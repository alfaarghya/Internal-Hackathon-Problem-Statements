import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EcoScan from "./pages/EcoScan";
import SoundScape from "./pages/SoundScape";
import GestureFlow from "./pages/GestureFlow";
import NutriAI from "./pages/NutriAI";
import EmotiMap from "./pages/EmotiMap";
import SafeDrive from "./pages/SafeDrive";
import AgriVision from "./pages/AgriVision";
import ExpenseTracker from "./pages/ExpenseTracker";
import RecipeDrive from "./pages/RecipeDrive";
import DevsType from "./pages/DevsType";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EcoScan" element={<EcoScan />} />
        <Route path="/SoundScape" element={<SoundScape />} />
        <Route path="/GestureFlow" element={<GestureFlow />} />
        <Route path="/NutriAI" element={<NutriAI />} />
        <Route path="/EmotiMap" element={<EmotiMap />} />
        <Route path="/SafeDrive" element={<SafeDrive />} />
        <Route path="/AgriVision" element={<AgriVision />} />
        <Route path="/ExpenseTracker" element={<ExpenseTracker />} />
        <Route path="/RecipeDrive" element={<RecipeDrive />} />
        <Route path="/DevsType" element={<DevsType />} />
      </Routes>
    </Router>
  );
}

export default App;
