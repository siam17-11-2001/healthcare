import { Eye, ShoppingCart } from "lucide-react";

const TableCard = ({ item, handleAddToCart, handleViewDetails }) => {
  const { name, category_name, image, price, description } = item;
  return (
    <div className="p-6 flex flex-col justify-center items-center gap-3 shadow-xl rounded-xl relative overflow-hidden group">
      <figure className="w-[180px]">
        <img className="w-full" src={image} alt="" />
      </figure>
      <div>
        <h2 className="text-center font-bold">{category_name}</h2>
        <h1 className="text-xl font-semibold text-center">{name}</h1>
        <p className="text-lg text-center font-semibold">${price}.00</p>
      </div>
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
        {/* Eye Icon */}
        <button
          onClick={() => handleViewDetails(item)}
          className="p-2 bg-[#4e97fd] rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          <Eye className="w-6 h-6 text-white" />
        </button>

        {/* Cart Icon */}
        <button
          onClick={() => handleAddToCart(item)}
          className="p-2 bg-[#4e97fd] rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          <ShoppingCart className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default TableCard;
