import React from "react";
import Search from "./Search";

function Header({ handleSearch, sort, unsort, sorting }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearch={handleSearch} />
      <form className="searchbar">
        {sorting ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              unsort();
            }}
          >
            Remove Sort
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              sort();
            }}
          >
            Sort By Location
          </button>
        )}
      </form>
    </header>
  );
}

export default Header;
