import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("Veg");

  const navigate = useNavigate();

  // ===== IMAGE UPLOAD =====

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // ===== FORM SUBMIT =====

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      name: recipeName,
      ingredients: ingredients
        .split(",")
        .map((item) => item.trim()),

      instructions,
      image,
      category,
    };

    console.log("New Recipe:", newRecipe);

    // ===== SUCCESS MESSAGE =====

    alert("🎉 Recipe Created Successfully!");

    // ===== NAVIGATE =====

    navigate("/view-recipes", {
      state: { newRecipe },
    });
  };

  return (
    <div className="create-recipe">

      <form onSubmit={handleSubmit} className="recipe-form">

        <h1>
          Create Your <span>Recipe</span>
        </h1>

        {/* ===== RECIPE NAME ===== */}

        <div>
          <label htmlFor="recipeName">
            Recipe Name
          </label>

          <input
            type="text"
            id="recipeName"
            placeholder="Enter recipe name"
            value={recipeName}
            onChange={(e) =>
              setRecipeName(e.target.value)
            }
            required
          />
        </div>

        {/* ===== INGREDIENTS ===== */}

        <div>
          <label htmlFor="ingredients">
            Ingredients
          </label>

          <textarea
            id="ingredients"
            placeholder="Enter ingredients separated by commas"
            value={ingredients}
            onChange={(e) =>
              setIngredients(e.target.value)
            }
            required
          />
        </div>

        {/* ===== INSTRUCTIONS ===== */}

        <div>
          <label htmlFor="instructions">
            Instructions
          </label>

          <textarea
            id="instructions"
            placeholder="Write cooking instructions"
            value={instructions}
            onChange={(e) =>
              setInstructions(e.target.value)
            }
            required
          />
        </div>

        {/* ===== CATEGORY ===== */}

        <div>
          <label>
            Category
          </label>

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >
            <option value="Veg">
              Veg
            </option>

            <option value="Non-Veg">
              Non-Veg
            </option>
          </select>
        </div>

        {/* ===== IMAGE ===== */}

        <div>
          <label htmlFor="image">
            Upload Recipe Image
          </label>

          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
          />

          {image && (
            <img
              src={image}
              alt="Recipe Preview"
              style={{
                width: "160px",
                height: "160px",
                objectFit: "cover",
                marginTop: "15px",
                borderRadius: "18px",
              }}
            />
          )}
        </div>

        {/* ===== BUTTON ===== */}

        <button
          type="submit"
          className="submit-btn"
        >
          Create Recipe
        </button>

      </form>
    </div>
  );
};

export default CreateRecipe;