import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleMeal from "./components/singlemeal/SingleMeal";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singleMeal/:id" element={<SingleMeal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
