import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDelete }) {
  let displayListings = listings
    ? listings.map((item) => (
        <ListingCard item={item} key={item.id} handleDelete={handleDelete} />
      ))
    : null;

  return (
    <main>
      <ul className="cards">{displayListings}</ul>
    </main>
  );
}

export default ListingsContainer;
