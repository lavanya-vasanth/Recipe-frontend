import React from "react";
import { useNavigate } from "react-router-dom";

const ToViewCreate = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

      {/* LEFT SIDE */}

      <div className="dashboard-left">

        <p className="small-title">
          🍴 RECIPE DASHBOARD
        </p>

        <h1>
          Cook <br />
          <span>Something</span> <br />
          Amazing Today
        </h1>

        <p className="dashboard-text">
          Manage your recipes, discover cooking inspiration,
          and organize your favorite dishes in one stylish place.
        </p>

        <div className="dashboard-buttons">

          <button
            className="dashboard-btn"
            onClick={() => navigate("/view-recipes")}
          >
            View Recipes
          </button>

          <button
            className="dashboard-btn"
            onClick={() => navigate("/create-recipe")}
          >
            Create Recipe
          </button>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="dashboard-right">

        {/* MAIN IMAGE */}

        <div className="image-card main-image">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
            alt="Food"
          />
        </div>

        {/* SMALL IMAGES */}

        <div className="small-images">

          <div className="image-card">
            <img
              src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1000&auto=format&fit=crop"
              alt="Pasta"
            />
          </div>

          <div className="image-card">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop"
              alt="Burger"
            />
          </div>

        </div>

      </div>

    </div>
  );
};

export default ToViewCreate;