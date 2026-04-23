import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
          <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>

    </BrowserRouter>
  );
}