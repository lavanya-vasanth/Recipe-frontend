import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ViewRecipes = () => {
  const location = useLocation();
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filterCategory, setFilterCategory] = useState("All");

  // Check if the newRecipe is passed via state
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/recipes");
        const data = await response.json();

        // Add the new recipe to the list if it exists
        if (location.state && location.state.newRecipe) {
          data.push(location.state.newRecipe);  // Append the new recipe to the data
        }

        setRecipes(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [location.state]);  // Re-run effect if state changes (e.g. if a new recipe is added)

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name?.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCategory === "All" || recipe.category === filterCategory)
  );

  return (
    <div className="view-recipes">
      <center>
        <h1>View Recipes</h1>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            style={{ width: "50%" }}
          />
        </div>

        <div className="filter-container" style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "10px" }}>
          <label>
            <input
              type="radio"
              name="filterCategory"
              value="All"
              checked={filterCategory === "All"}
              onChange={() => setFilterCategory("All")}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="filterCategory"
              value="Veg"
              checked={filterCategory === "Veg"}
              onChange={() => setFilterCategory("Veg")}
            />
            Veg
          </label>
          <label>
            <input
              type="radio"
              name="filterCategory"
              value="Non-Veg"
              checked={filterCategory === "Non-Veg"}
              onChange={() => setFilterCategory("Non-Veg")}
            />
            Non-Veg
          </label>
        </div>

        <div className="recipes-list">
          {isLoading ? (
            <p>Loading recipes...</p>
          ) : (
            filteredRecipes.map((recipe, index) => (
              <div key={index} className="recipe-card">
                <h2>{recipe.name}</h2>
                {recipe.image && <img src={recipe.image} alt={recipe.name} className="recipe-image" />}
                <h3>Ingredients:</h3>
                <ul>
                  {Array.isArray(recipe.ingredients)
                    ? recipe.ingredients.map((ingredient, idx) => (
                        <li key={idx}>{ingredient}</li>
                      ))
                    : recipe.ingredients.split(",").map((ingredient, idx) => (
                        <li key={idx}>{ingredient.trim()}</li>
                      ))}
                </ul>
                <h3>Instructions:</h3>
                <p>{recipe.instructions}</p>
              </div>
            ))
          )}
        </div>
      </center>
    </div>
  );
};

export default ViewRecipes;
