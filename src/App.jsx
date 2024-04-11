import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// page components
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Show from "./pages/show/Show";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/shows/:id" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
