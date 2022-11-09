import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-violet-700 p-5">
        <div className="flex justify-between max-w-[1200px] mt-0 mb-0 ml-auto mr-auto">
          <Link to="/">
            <div className="text-white mr-auto">
              <h1 className="text-3xl font-semibold">Recipe Diary</h1>
            </div>
          </Link>
          <div>
            <Link to="/create">
              <button className="border text-white rounded ml-10 p-2">
                Create Recipe
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
