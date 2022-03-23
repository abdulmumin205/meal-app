import React, { useState, useContext, useEffect } from "react";

import paginate from "./paginate";

const menuURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
//const categoriesURL = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
const categoriesURL = "https://www.themealdb.com/api/json/v1/1/categories.php";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  const [categoriesBtn, setCategoriesBtn] = useState([]);
  const [foods, setFoods] = useState([]);
  const [style, setStyle] = useState(0);
  const [page, setPage] = useState(0);

  const [menu, setMenu] = useState("beef");

  const fetchCategories = async () => {
    const response = await fetch(categoriesURL);
    const data = await response.json();
    const { categories } = data;

    setCategoriesBtn(categories);
  };

  const click = (e) => {
    e.preventDefault();
    const value = e.currentTarget.textContent;
    setMenu(value);

    //sStyle(index);
    const id = e.currentTarget.dataset.id;
    setStyle(id);

    setPage(0);
  };

  const fetchMeals = async () => {
    setLoading(true);

    const response = await fetch(`${menuURL}${menu} `);
    const data = await response.json();
    const { meals } = data;

    if (meals) {
      const newMeals = meals.map((item) => {
        const { idMeal, strMeal, strMealThumb } = item;
        return {
          id: idMeal,
          name: strMeal,
          image: strMealThumb,
        };
      });

      setFoods(paginate(newMeals));
      //setMeals(foods[page]);
    } else {
      setFoods([]);
    }

    // setMeals(foods[page]);

    setLoading(false);

    //  return { newMeals };
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > foods.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = foods.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [menu, page]);

  return (
    <AppContext.Provider
      value={{
        loading,
        style,
        meals,
        setMeals,
        handlePage,
        menu,
        page,
        nextPage,
        prevPage,
        categoriesBtn,
        foods,

        click,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
