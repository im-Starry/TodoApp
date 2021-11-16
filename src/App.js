import React, { useState, useMemo } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState("Guest");

  const userValueProvider = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <UserContext.Provider value={userValueProvider}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
