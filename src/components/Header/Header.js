import react, { useEffect, useState } from "react";
import "./header.css";
//import { useGlobalContext } from "../context";

const url = "https://www.themealdb.com/api/json/v1/1/random.php";

const Header = () => {
  const [food, setFood] = useState([]);
  // const [animation, setAnimation] = useState(false);

  const randomHeader = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      const { meals } = data;
      const { idMeal: id, strMeal: meal, strMealThumb: image } = meals[0];

      const newMeal = {
        id,
        meal,
        image,
      };

      setFood(newMeal);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      randomHeader();
    }, 7000);

    return () => {
      clearTimeout();
    };
  }, [food]);

  return (
    <section>
      {food && (
        <div className="header">
          <img src={food.image} alt={food.meal} />

          <div className="overlay">
            <h1>{food.meal}</h1>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
