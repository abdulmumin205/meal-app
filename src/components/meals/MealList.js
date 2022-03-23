import React from "react";
import { Link } from "react-router-dom";

const MealList = ({ name, image, id }) => {
  return (
    <li>
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="name">
        <p>{name}</p>
      </div>

      <Link to={`/singleMeal/${id}`} className="cart-btn">
        details
      </Link>
    </li>
  );
};

export default MealList;
