import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        {/* ЛОГОТИП */}
        <div className="logo">
          Masta Monk
        </div>

        {/* МЕНЮ */}
        <nav className="menu">
          <a href="#tracks" >Tracks</a>
          <a href="#services" >Services</a>
          <a href="#faq" >FAQ & Help</a>
          <a href="#contact" >Contact</a>
        </nav>

        {/* ИКОНКИ */}
        <div className="icon">
          <FaSearch />
          <div >
            <FaShoppingBag />
            <span>$0.00</span>
          </div>
          <div >
            <FaUser />
            <span>Log In</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
