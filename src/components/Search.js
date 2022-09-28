import React from "react";

function Search({ handleSearch }) {
  return (
    <form
      className="searchbar"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(e.target.value);
        e.target.search.value = "";
      }}
    >
      <input
        type="text"
        id="search"
        name="search"
        placeholder="search free stuff"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button type="submit">Reset Search</button>
    </form>
  );
}

export default Search;
