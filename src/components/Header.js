import { useState } from "react";
import Search from "./Search";

function Header({ handleSearch, sort, unsort, sorting, handleNewFormSubmit }) {
  const [newItemForm, setNewItemForm] = useState(false);
  return (
    <>
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
          <button
            onClick={(e) => {
              e.preventDefault();
              setNewItemForm(true);
            }}
          >
            Add New Item
          </button>
        </form>
      </header>
      <div>
        {newItemForm ? (
          <span className="newForm">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleNewFormSubmit(e.target);
              }}
            >
              <input
                className="input"
                type="text"
                id="description"
                name="description"
                placeholder="add item description"
              />
              <input
                className="input"
                type="text"
                id="location"
                name="location"
                placeholder="add item location"
              />
              <input
                className="input"
                type="text"
                id="image"
                name="image"
                placeholder="add item image"
              />
              <button className="button">Submit</button>
            </form>
          </span>
        ) : null}
      </div>
    </>
  );
}

export default Header;
