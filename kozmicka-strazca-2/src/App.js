import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import World from "./components/pages/World";
import Home from "./components/pages/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function App() {
  return (
    <>
      <Router basename="/kozmickyodpad">
        <Routes>
          <Route path="/app" element={<World />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
