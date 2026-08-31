import React from "react";
import { MdLightbulb } from "react-icons/md";
const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="header">
      <div className="header-brand">
        <div className="header-logo">
          <MdLightbulb size={24} color="#ffffff" />
        </div>
        <h1 className="header-title">Keep Notes</h1>
      </div>

      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="
        Search Notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Header;
