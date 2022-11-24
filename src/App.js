import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import NotFound from "./pages/notfound/NotFound";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import { createContext } from "react";

export const Context = createContext(false);

const App = () => {
  const [listView, setListView] = useState(false);
  const [likedMovies, setLikedMovies] = useState([]);

  return (
    <>
      <Router>
        <Context.Provider
          value={{ listView, setListView, likedMovies, setLikedMovies }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Context.Provider>
      </Router>
    </>
  );
};

export default App;
