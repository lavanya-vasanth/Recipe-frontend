import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        🍴 Lavanya Recipe
      </div>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contactDetails">Contact</Link>
        <Link to="/login" className="login-btn">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;