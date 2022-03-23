import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../../Loading";
import "./singleMeal.css";

//const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

const SingleMeal = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    const getSingleMeal = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();

        if (data.meals) {
          const {
            strMeal: name,
            strMealThumb: image,
            strCategory: category,
            strInstructions: instructions,

            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.meals[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newMeal = {
            name,
            image,
            category,
            instructions,
            ingredients,
          };

          setMeal(newMeal);
        } else {
          setMeal(null);
        }
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };

    getSingleMeal();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!meal) {
    return <h2>no meal to display</h2>;
  } else {
    const { name, image, category, instructions, ingredients } = meal;

    return (
      <section className="meal-container">
        <Link to="/" className="home-link">
          back home
        </Link>
        <h1>{name}</h1>

        <div className="meal">
          <img src={image} alt={name} />

          <div className="meal-info">
            <p>
              <span className="meal-data"> name :</span> {name}
            </p>
            <p>
              <span className="meal-data"> category :</span> {category}
            </p>
            <p>
              <span className="meal-data"> instructions :</span> {instructions}
            </p>
            <p>
              <span className="meal-data"> ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? (
                  <span className="ing-item" key={index}>
                    {" "}
                    {item}
                  </span>
                ) : null;
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleMeal;
