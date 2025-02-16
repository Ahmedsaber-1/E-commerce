import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState(""); // Initialized as an empty string
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openSignup = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">E-Shop</Link>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border py-2 px-4"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="absolute top-3 right-3 text-red-500"
              aria-label="Search"
            >
              <FaSearch />
            </button>
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/Cart" className="relative" aria-label="Cart">
            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
            <FaShoppingCart className="text-lg" />
          </Link>

          <button onClick={() => setIsModelOpen(true)}>
            <FaUser className="block md:hidden" aria-label="User Menu" />{" "}
            {/* Mobile Icon */}
            <span className="hidden md:block">Login | Register</span>{" "}
            {/* Desktop Text */}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-10 py-4 text-md font-bold">
        <Link to="/" className="hover:text-red-500 transition duration-[150ms]">
          Home
        </Link>
        <Link
          to="/shop"
          className="hover:text-red-500 transition duration-[150ms]"
        >
          Shop
        </Link>
        <Link
          to="/contact"
          className="hover:text-red-500 transition duration-[150ms]"
        >
          Contact
        </Link>
        <Link
          to="/about"
          className="hover:text-red-500 transition duration-[150ms]"
        >
          About
        </Link>
      </div>

      <Modal isModalOpen={isModelOpen} setIsModalOpen={setIsModelOpen}>
        {isLogin ? (
          <Login openSignup={openSignup} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
