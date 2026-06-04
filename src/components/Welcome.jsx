import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {

  const navigate = useNavigate();

  // ================= THEME STATE =================

  const [darkMode, setDarkMode] = useState(true);

  // ================= LOAD SAVED THEME =================

  useEffect(() => {

    const savedTheme = JSON.parse(
      localStorage.getItem("darkMode")
    );

    if (savedTheme !== null) {
      setDarkMode(savedTheme);
    }

  }, []);

  // ================= SAVE THEME =================

  useEffect(() => {

    localStorage.setItem(
      "darkMode",
      JSON.stringify(darkMode)
    );

  }, [darkMode]);

  return (

    <div
      className={
        darkMode
          ? "welcome-container dark"
          : "welcome-container light"
      }
    >

      {/* ===== OVERLAY ===== */}

      <div className="overlay"></div>

      {/* ===== THEME TOGGLE BUTTON ===== */}

      <button
  className="theme-toggle"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "☀ Light" : "🌙 Dark"}
</button>

      {/* ===== CONTENT ===== */}

      <div className="welcome-content">

        <p className="tagline">
          🍴 Delicious • Creative • Homemade
        </p>

        <h1>
          Welcome To <br />
          <span>TRY MY RECIPE</span>
        </h1>

        <p className="description">
          Discover tasty recipes, explore cooking ideas,
          and create mouth-watering dishes with love and flavor.
        </p>

        <div className="btn-group">

          <button
            className="welcome-btn"
            onClick={() => navigate("/login")}
          >
            Explore Recipes
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>

        </div>
      </div>
    </div>
  );
};

export default Welcome;