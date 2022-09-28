import { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((d) => setListings(d));
  }, []);

  let displayListings = listings
    ? searchTerm
      ? listings.filter((item) =>
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : listings
    : null;

  // console.log(displayListings);

  function handleDelete(id) {
    let newArray = listings.filter((item) => item.id !== id);
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(setListings(newArray));
  }

  function handleSearch(text) {
    setSearchTerm(text);
  }

  function compare(a, b) {
    if (a.location < b.location) {
      return -1;
    }
    if (a.location > b.location) {
      return 1;
    }
    return 0;
  }

  function uncompare(a, b) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  }

  function sort(e) {
    // e.preventDefault();
    console.log("sort");
    let newDisplay = displayListings.sort(compare);
    setSorting(true);
    setListings(newDisplay);
  }

  function unsort(e) {
    console.log("unsort");
    displayListings.sort(uncompare);
    setSorting(false);
  }

  return (
    <div className="app">
      <Header
        handleSearch={handleSearch}
        sort={sort}
        unsort={unsort}
        sorting={sorting}
      />
      {listings ? (
        <ListingsContainer
          listings={displayListings}
          handleDelete={handleDelete}
        />
      ) : null}
    </div>
  );
}

export default App;
