import React, { useState } from "react";

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search-engine">
      <input
        type="text"
        className="city-search"
        value={search}
        placeholder="Enter your city/town...."
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="searchBtn" onClick={handleSearch}>
        Search Weather
      </button>
    </div>
  );
};

export default Search;
