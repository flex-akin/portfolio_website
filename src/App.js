import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.js"
import Home from "./routes/Home.js";
import Projects from "./routes/Projects.js";
import Contact from "./routes/Contact.js";
import About from "./routes/About.js";




function App() {
  return (
    <>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
    </>
  );
}

export default App;
