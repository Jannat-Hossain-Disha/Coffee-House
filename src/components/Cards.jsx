import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const Cards = ({ coffee, handleRemove }) => {
  const { pathname } = useLocation();
  const { name, popularity, id, rating, type, origin, category, image } =
    coffee || {};
  console.log(id);
  return (
    <div className="flex relative m-2">
      <Link
        to={`/coffee/${id}`}
        className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden"
      >
        <figure className="w-full h-48 overflow-hidden">
          <img src={image} alt="" />
        </figure>
        <div className="p-4">
          <h1 className="text-xl">Name : {name}</h1>
          <p>Category : {category}</p>
          <p>Type: {type}</p>
          <p>Origin : {origin}</p>
          <p>Rating : {rating}</p>
          <p>Popular : {popularity}</p>
        </div>
      </Link>
      {pathname === "/dashboard" && (
        <div
          onClick={() => handleRemove(id)}
          className="absolute -top-5 -right-5 bg-warning p-3 rounded cursor-pointer"
        >
          <FaTrashAlt size={20} />
        </div>
      )}
    </div>
  );
};

export default Cards;
