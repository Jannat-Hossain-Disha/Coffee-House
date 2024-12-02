import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Cards from "./Cards";

const CoffeeCards = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  // console.log("Loader data:", data);
  const { category } = useParams();
  console.log(category);
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    if (category) {
      const filterByCategory = [...data].filter(
        (coffee) => coffee.category === category
      );
      console.log("Filtered Category Data:", filterByCategory);
      // setCoffees(filterByCategory);
      const slicedData = filterByCategory.slice(0, 6);
      setCoffees(slicedData);
    } else {
      setCoffees(data);
    }
  }, [category, data]);

  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 my-8">
        {coffees.map((coffee) => (
          <Cards key={coffee.id} coffee={coffee}></Cards>
        ))}
      </div>
      <button className="btn btn-warning" onClick={() => navigate("/coffees")}>
        View All
      </button>
    </>
  );
};

export default CoffeeCards;
