import React from "react";
import { useGlobalContext } from "../../context";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Loading from "../../Loading";
import MealList from "./MealList";

//const menuURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

const Meal = () => {
  const {
    foods,
    handlePage,
    setMeals,
    page,
    meals,
    nextPage,
    prevPage,
    loading,
  } = useGlobalContext();

  // useEffect(() => {
  //   setMeals(foods[page]);
  // }, []);

  setMeals(foods[page]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <ul className="meals">
        {meals.map((item) => {
          return <MealList key={item.id} {...item} />;
        })}
      </ul>

      <div className="button">
        <button className="prev" onClick={prevPage}>
          <FaArrowLeft />
        </button>

        {foods.map((item, index) => {
          return (
            <button
              key={index}
              className={`page-btn ${
                index === page ? "active-page-btn" : null
              }`}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          );
        })}

        <button className="next" onClick={nextPage}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Meal;
