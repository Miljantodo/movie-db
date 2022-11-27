import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import NotFound from "./pages/notfound";
import Home from "./pages/home";
import Search from "./pages/search";
import Watch from "./pages/watch/Watch";

export const Context = createContext(false);

const App = () => {
  const [listView, setListView] = useState(false);

  return (
    <>
      <Router>
        <Context.Provider value={{ listView, setListView }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie" element={<Watch />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Context.Provider>
      </Router>
    </>
  );
};

export default App;
