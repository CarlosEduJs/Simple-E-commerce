import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { useCart } from "../../context/CartContext";

const AddToCartBtn = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(item)}
      className="p-3 bg-primary-orange hover:bg-primary-orange/30 min-w-[200px] flex items-center justify-center gap-3 rounded-md max-md:w-full max-sm:mb-3"
    >
      <ShoppingCartIcon className="h-3 w-3" />
      <h1 className="text-neutral-very-dark-blue font-semibold text-xs">
        Add To Cart
      </h1>
    </button>
  );
};

export default AddToCartBtn;
