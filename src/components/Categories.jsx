import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category}`}
            key={category.category}
            role="tab"
            className={({ isActive }) =>
              `tab font-semibold text-xl ${isActive ? "tab-active" : ""}`
            }
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
