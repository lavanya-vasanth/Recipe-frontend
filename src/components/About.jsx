const About = () => {
  return (
    <div className="about-page">
      {/* LEFT CONTENT */}
      <div className="about-left">
        <p className="small-heading">ABOUT MY RECIPES</p>

        <h1>
          Bringing <span>Flavor</span> <br />
          To Your Kitchen 🍴
        </h1>

        <p className="about-text">
          My recipe collection is specially created for food lovers who enjoy
          exploring delicious dishes, creative cooking ideas, and homemade
          happiness.
        </p>

        <p className="about-text">
          From quick snacks to healthy meals and tasty desserts, every recipe
          is made with love and simplicity.
        </p>

        <div className="about-stats">
          <div className="stat-box">
            <h2>150+</h2>
            <p>Recipes</p>
          </div>

          <div className="stat-box">
            <h2>50+</h2>
            <p>Healthy Meals</p>
          </div>

          <div className="stat-box">
            <h2>100%</h2>
            <p>Homemade Love</p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGES */}
      <div className="about-right">
        <img
          src="https://img.freepik.com/free-vector/recipe-book-concept-illustration_114360-7481.jpg?w=740"
          alt="Recipe"
          className="about-img img1"
        />

        <img
          src="https://img.freepik.com/premium-vector/real-life-family-moments-vector-illustration-concepts_1253202-67681.jpg?w=740"
          alt="Cooking"
          className="about-img img2"
        />
      </div>
    </div>
  );
};

export default About;