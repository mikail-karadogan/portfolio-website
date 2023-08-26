import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import "./App.css";
import Header from "./layouts/layout/Header";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1 style={{ textAlign: 'center' }}>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
