import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import Projects from "./pages/Projects";
import AddProjects from "./pages/AddProjects";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/add-project" element={<AddProjects />} />
          <Route path="/customers" element={<Home />} />
          <Route path="/press-review" element={<Home />} />
          <Route path="/collaborators" element={<Home />} />
          <Route path="/ideas" element={<Home />} />
          <Route path="/profil" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
