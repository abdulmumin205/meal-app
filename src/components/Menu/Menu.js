import React from "react";
import Categories from "../categories/Categories";
import Meal from "../meals/Meal";
import "./menu.css";
import { useGlobalContext } from "../../context";
import Loading from "../../Loading";

const Menu = () => {
  //const { loading, setLoading } = useGlobalContext();

  // if (loading) {
  //   return <Loading />;
  // } else {
  //   setLoading(false);
  // }

  return (
    <section className="menu-container" id="menu">
      <h1>menu</h1>

      <Categories />
      <Meal />
    </section>
  );
};

export default Menu;
