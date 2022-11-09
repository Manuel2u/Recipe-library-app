import React from "react";
import RecipeList from "../../components/RecipeList";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center mt-10">
          <RecipeList />
        </div>
      </div>
    </>
  );
}
