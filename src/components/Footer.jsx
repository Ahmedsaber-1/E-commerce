import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <div>
          <div>
            <h3 className="text-xl font-semibold">E-Shop</h3>
            <p className="mt-4">
              Your one-stop shop for all your needs. Shop with us and experience
              the best online shopping.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-red-500 transition ease-in-out duration-150"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-red-500 transition ease-in-out duration-150"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-red-500 transition ease-in-out duration-150"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-red-500 transition ease-in-out duration-150"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4 mt-4 transition duration-[150ms] ">
            <a href="#" aria-label="Facebook">
              <FaFacebook className=" hover:text-blue-600" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className=" hover:text-blue-400" />
            </a>
            <a href="#" aria-label="Github">
              <FaGithub className=" hover:text-gray-100" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className=" hover:text-blue-600" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaYoutube className=" hover:text-red-600" />
            </a>
          </div>
          <div>
            <form action="" className="flex items-center justify-center mt-8">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none"
              />
              <button
                type="submit"
                className=" bg-red-600 text-white px-4 py-2 rounded-r-lg "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p> &copy; E-Shop All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="" className="hover:underline">
              Privacy Policy
            </a>
            <a href="" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
