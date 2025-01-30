import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ToViewCreate = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Navigate to the View Recipes page
  const handleViewRecipes = () => {
    navigate("/view-recipes");
  };

  // Navigate to the Create Recipe page
  const handleCreateRecipe = () => {
    navigate("/create-recipe");
  };

  return (
    <div
      className="to-view-create"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-photo/abstract-blur-coffee-shop_1339-2396.jpg?t=st=1738073641~exp=1738077241~hmac=99236a85c5039b46ec415cb331aa56676e5a5b9f7376c98c94b6caa5df57e91f&w=996')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <center>
        <h1>Explore and Manage Your Recipes</h1>
        <div className="button-container">
          {/* Button to navigate to View Recipes */}
          <button onClick={handleViewRecipes} className="view-recipes-btn">
            View Recipes
          </button>

          {/* Button to navigate to Create Recipe */}
          <button onClick={handleCreateRecipe} className="create-recipe-btn">
            Create Recipe
          </button>
        </div>
      </center>
    </div>
  );
};

export default ToViewCreate;
