import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Recipe from "./pages/recipe/Recipe";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
