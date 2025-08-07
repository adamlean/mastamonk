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
          <a href="#tracks" className="hover:text-red-500">Tracks</a>
          <a href="#services" className="hover:text-red-500">Services</a>
          <a href="#faq" className="hover:text-red-500">FAQ & Help</a>
          <a href="#contact" className="hover:text-red-500">Contact</a>
        </nav>

        {/* ИКОНКИ */}
        <div className="icon">
          <FaSearch className="cursor-pointer hover:text-red-500" />
          <div className="flex items-center space-x-1">
            <FaShoppingBag />
            <span>$0.00</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-red-500">
            <FaUser />
            <span>Log In</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
