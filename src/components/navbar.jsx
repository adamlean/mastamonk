import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="bg-black text-white w-full shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* ЛОГОТИП */}
        <div className="text-red-600 text-2xl font-bold italic tracking-widest">
          Beatstore
        </div>

        {/* МЕНЮ */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#tracks" className="hover:text-red-500">Tracks</a>
          <a href="#playlists" className="hover:text-red-500">Playlists</a>
          <a href="#soundkits" className="hover:text-red-500">Sound Kits</a>
          <a href="#services" className="hover:text-red-500">Services</a>
          <a href="#faq" className="hover:text-red-500">FAQ & Help</a>
          <a href="#contact" className="hover:text-red-500">Contact</a>
        </nav>

        {/* ИКОНКИ */}
        <div className="flex items-center space-x-6 text-white">
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
