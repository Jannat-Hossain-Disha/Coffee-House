import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllFavorite, removeFavorite } from "../utils";
import Cards from "../components/Cards";
import { useLocation } from "react-router-dom";
const Dashboard = () => {
  const location = useLocation();
  console.log(location);
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const favorite = getAllFavorite();
    setCoffees(favorite);
  }, []);
  const handleRemove = (id) => {
    removeFavorite(id);
    const favorite = getAllFavorite();
    setCoffees(favorite);
  };
  return (
    <>
      <Heading
        title="Welcome to Dashboard"
        subtitle="Manage Coffees that have previously added as favorite . You can view or review them from here"
      ></Heading>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 my-8">
        {coffees.map((coffee) => (
          <Cards
            handleRemove={handleRemove}
            key={coffee.id}
            coffee={coffee}
          ></Cards>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
