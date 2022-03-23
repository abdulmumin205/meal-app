import React from "react";
import { useGlobalContext } from "../../context";

const Categorieslist = ({ strCategory, idCategory }) => {
  const { click, style } = useGlobalContext();

  return (
    <li
      className={` ${style === idCategory ? "active" : null}`}
      data-id={idCategory}
      onClick={click}
    >
      {strCategory}
    </li>
  );
};

export default Categorieslist;
