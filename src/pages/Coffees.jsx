import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../components/Cards";

const Coffees = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);
  const handleSort = (sortBy) => {
    if (sortBy == "popularity") {
      const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
      setCoffees(sorted);
    } else if (sortBy == "rating") {
      const sorted = [...data].sort((a, b) => b.rating - a.rating);
      setCoffees(sorted);
    }
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">
            Sort Coffees by popularity & Rating
          </h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => handleSort("popularity")}
            className="btn btn-warning"
          >
            Sort by Popularity
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="btn btn-warning"
          >
            Sort by Rating
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 ">
        {coffees.map((coffee) => (
          <Cards key={coffee.id} coffee={coffee}></Cards>
        ))}
      </div>
    </>
  );
};

export default Coffees;
