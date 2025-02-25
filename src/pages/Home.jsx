import { useDispatch, useSelector } from "react-redux";
import { categories } from "../assets/mockData";
import CategorySection from "../components/CategorySection";
import InfoSection from "../components/InfoSection";
import { setProducts } from "../redux/productSlice";
import { topproducts } from "../assets/mockData";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Shop } from "./Shop";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(setProducts(topproducts));
  }, [dispatch]);

  return (
    <div className=" bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className=" container mx-auto py-4  flex flex-col md:flex-row space-x-2">
        <div className=" w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold  px-2 py-2.5 text-center">
            Shop By Categories
          </div>
          <ul className=" space-y-4 bg-gray-100 p-3 border">
            {categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className=" w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img
            src="https://plus.unsplash.com/premium_vector-1682309458404-25b6bf0a64c6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-96"
          />
          <div className=" absolute top-16 left-8">
            <p className="text-gray-600 mb-4">Ahmed E-Shop</p>
            <h2 className="text-3xl font-bold">Welcome To E-Shop</h2>
            <p className="text-xl mt-2.5 font-bold text-gray-600">
              Millions+ Products
            </p>
            <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform  transition-transform duration-300 hover:scale-105">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />
      <div className=" container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {products.products.slice(0, 5).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
      <Shop />
    </div>
  );
};

export default Home;
