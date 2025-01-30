import { Link } from "react-router-dom"; 
const Header = () => {
  return (
    <header>
      <div>Lavanya Recipe page..!!</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contactDetails">Contact Details</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
