import { Categories_2 } from "../assets/Mockdata";

const CategorySection = () => {
  return (
    <div className=" container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 ">
      {Categories_2.map((category, index) => (
        <div
          key={index}
          className=" relative h-64  transform  transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={category.ImageUrl}
            alt="Category Photo"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className=" absolute top-20 left-12">
            <h3 className="text-4xl font-bold">{category.title}</h3>
            <p className=" text-white font-bold">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
