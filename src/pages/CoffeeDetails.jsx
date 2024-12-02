import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import nutrition from "../assets/nutrition.png";
import { addFavorite, getAllFavorite } from "../utils";

const CoffeeDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [coffee, setCoffee] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const {
    making_process,
    description,
    type,
    origin,
    nutrition_info,
    ingredients,
    image,
    name,
    rating,
    popularity,
  } = coffee;
  useEffect(() => {
    const singleData = data.find((coffee) => coffee.id == id);
    setCoffee(singleData);
    const favorites = getAllFavorite();
    const isExist = favorites.find((item) => item.id == coffee.id);
    if (isExist) {
      setFavorite(true);
    }
  }, [data, id]);

  // add favorite coffee
  const handleFavorite = (coffee) => {
    addFavorite(coffee);
    setFavorite(true);
  };
  return (
    <div className="my-12">
      <h1 className="text-2xl md:text-4xl font-thin mb-6">{description}</h1>
      <div className="w-full h-full  object-cover overflow-hidden rounded-xl shadow-xl">
        <img className="w-full h-full" src={image} alt="" />
      </div>
      <div className="flex justify-between items-center my-12">
        <div>
          <h1 className="text-2xl md:text-3xl font-thin">{name}</h1>
          <p className="text-base">Popularity : {popularity}</p>
          <p className="text-base">Rating : {rating}</p>
        </div>
        <div>
          <button
            disabled={favorite}
            onClick={() => handleFavorite(coffee)}
            className="btn btn-warning"
          >
            Add Favorite
          </button>
        </div>
      </div>
      <div className="my-6 ">
        <h2 className="text-2xl font-thin">Making Process : </h2>
        <p className="font-base">{making_process}</p>
      </div>
      <div className="my-6 flex justify-between items-center">
        <div className="flex-1">
          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-2xl font-thin">Ingredients:</h1>
            <ul className="text-xl ml-12">
              {ingredients &&
                ingredients.map((i, id) => (
                  <li key={id} className="list-disc">
                    {i}
                  </li>
                ))}
            </ul>
            <h1 className="text-2xl font-thin">Nutrition Info:</h1>
            <ul className="text-xl ml-12">
              {nutrition_info &&
                Object.keys(nutrition_info).map((n, i) => (
                  <li key={i} className="list-disc">
                    {n} : {nutrition_info[n]}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <img src={nutrition} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
