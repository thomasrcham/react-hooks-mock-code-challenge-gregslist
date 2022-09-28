import { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  console.log(displayListings);

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

  function handleSubmit() {
    console.log("reset");
    setSearchTerm("");
    let displayListings = listings;
    return displayListings;
  }

  return (
    <div className="app">
      <Header handleSearch={handleSearch} handleSubmit={handleSubmit} />
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
