import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Recipe({ match }) {
  const [recipe, setRecipe] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const location = useLocation();
  const url = location.pathname.split("/")[2];

  React.useEffect(() => {
    axios
      .get(`/api/recipes/${url}`)
      .then((res) => {
        setRecipe(res.data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  }, [url]);

  return (
    <>
      {loading ? (
        <div className="p-5 mx-4 rounded max-w-[1200px] text-center">
          <h1 className="text-2xl py-4 font-semibold">Loading...</h1>
        </div>
      ) : (
        <div className="flex flex-row flex-wrap font-dodoo my-10 justify-center">
          <div className="flex flex-wrap justify-center">
            <div className="bg-white p-5 mx-4 rounded max-w-[1200px] text-center">
              <h1 className="text-2xl py-4 font-semibold">{recipe.title}</h1>
              <p className="text-primary">{recipe.cookingTime} to make</p>
              <ul className="list-none flex justify-center">
                {recipe.ingredients &&
                  recipe.ingredients.map((ingredient) => (
                    <li className="text-lg mr-2 after:content-[',']">
                      {ingredient}
                    </li>
                  ))}
              </ul>
              <div className="text-lg py-4 w-[100%] text-primary leading-[1.5em]">
                {recipe.method}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
