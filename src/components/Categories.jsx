import React from "react";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div>
      <Link
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        to={"categoria/deporte"}
      >
        Zapatillas de Deporte 
      </Link>
      <Link
        to={"categoria/urbana"}
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        Zapatillas Urbanas 
      </Link>
      <Link
        to={"categoria/formal"}
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        Zapatillas  Formal 
      </Link>
    </div>
  );
};

export default Categories;