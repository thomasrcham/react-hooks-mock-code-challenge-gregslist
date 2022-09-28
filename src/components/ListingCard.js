import { useState } from "react";

function ListingCard({ item, handleDelete }) {
  const [clicked, setClicked] = useState(false);

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {clicked ? (
          <button
            className="emoji-button favorite active"
            onClick={(e) => setClicked(false)}
          >
            ★
          </button>
        ) : (
          <button
            className="emoji-button favorite"
            onClick={(e) => setClicked(true)}
          >
            ☆
          </button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button
          className="emoji-button delete"
          onClick={(e) => handleDelete(item.id)}
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
