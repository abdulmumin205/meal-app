import React from "react";
import { useGlobalContext } from "../../context";
import Categorieslist from "./Categorieslist";

const Categories = () => {
  const { categoriesBtn } = useGlobalContext();

  return (
    <section>
      <ul className="category-list">
        {categoriesBtn.map((item, index) => {
          return <Categorieslist key={index} {...item} />;
        })}
      </ul>
    </section>
  );
};

export default Categories;
