import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DevType from "./pages/DevType";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devtype" element={<DevType />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
