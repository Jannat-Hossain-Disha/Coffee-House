import React from "react";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>

      {/*Reusable Heading */}
      <Heading
        title="Browse coffees By Category"
        subtitle="Choose Your Desired coffee Category to browse through specific coffees that fit in your taste"
      ></Heading>

      {/* Categories Tab Section */}
      <Categories categories={categories}></Categories>

      {/* Dynamic nested Component */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
