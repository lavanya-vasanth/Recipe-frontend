import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("Veg,non veg");
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      name: recipeName,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      instructions,
      image,
      category,
    };
    console.log("New Recipe: ", newRecipe);
    navigate("/view-recipes", { state: { newRecipe } });
  };

  return (
    <div className="create-recipe">
      <center>
        <h1>Create a New Recipe</h1>
        <form onSubmit={handleSubmit} className="recipe-form">
          <div>
            <label htmlFor="recipeName">Recipe Name:</label>
            <input
              type="text"
              id="recipeName"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="ingredients">Ingredients</label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="instructions">Instructions:</label>
            <textarea
              id="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Category:</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
          </div>

          <div>
            <label htmlFor="image">Upload Image:</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {image && <img src={image} alt="Recipe" style={{ width: "100px", height: "100px" }} />}
          </div>

          <button type="submit" className="submit-btn">Create Recipe</button>
        </form>
      </center>
    </div>
  );
};

export default CreateRecipe;
