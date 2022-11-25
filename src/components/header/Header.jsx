import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../logo";
import Switch from "../switch";
import "./Header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      navigate(`/search?term=${searchTerm}`);
    }
    setSearchTerm("");
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />;

  return (
    <>
      <header>
        <Logo />
        <Switch />
        <form onSubmit={onSubmit}>
          <input
            className="search"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
    </>
  );
};

export default Header;
