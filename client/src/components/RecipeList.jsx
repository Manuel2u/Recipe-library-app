import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RecipeList() {
  const [recipes, setRecipes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("/api/recipes")
      .then((res) => {
        setRecipes(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap font-dodoo justify-between">
        <div className="flex flex-wrap justify-center">
          {loading ? (
            <div className="p-5 mx-4 rounded max-w-[1200px] text-center">
              <h1 className="text-2xl py-4 font-semibold">Loading...</h1>
            </div>
          ) : (
            recipes.map((recipe) => (
              <div
                className="bg-white p-5 mx-4 rounded w-[400px]  shadow-lg  hover:rotate-3 transition-all duration-1000"
                key={recipe._id}
              >
                <h1 className="text-2xl py-4 font-semibold">{recipe.title}</h1>
                <p className="text-primary">{recipe.cookingTime} to make</p>
                <p className="text-lg">{recipe.time}</p>
                <div className="text-lg py-4 w-[100%] text-primary leading-[1.5em]">
                  {recipe.method.substring(0, 100)}...
                </div>

                <Link to={`/recipe/${recipe._id}`}>
                  <center>
                    <button className="border  text-white bg-gray-600 justify-center rounded p-2">
                      Cook This
                    </button>
                  </center>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
