import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="mx-auto items-center text-center my-12">
      <h1 className="font-semibold text-4xl mb-3">{title}</h1>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
};

export default Heading;
