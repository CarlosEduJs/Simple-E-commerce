import { useCart } from "../context/CartContext";

import { PlusIcon, MinusIcon } from "@heroicons/react/16/solid";

const AddToCart = ({ item }) => {
  const { addToCart, getQuantify, updateQuantity, cartItems } = useCart();

  const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);

  return (
    <div className="flex items-center justify-between bg-neutral-light-grayish-blue text-neutral-very-dark-blue rounded-md p-3 min-w-[120px] max-sm:w-full">
      <MinusIcon
        onClick={() => {
          if (cartItem.quantity > 0) {
            updateQuantity(cartItem.id, cartItem.quantity - 1);
          }
        }}
        className="w-4 h-4 text-primary-orange cursor-pointer"
      />
      <h1 className="font-bold text-sm">{getQuantify(item.id)}</h1>
      <PlusIcon onClick={() => addToCart(item)} className="w-4 h-4 text-primary-orange cursor-pointer" />
    </div>
  );
};

export default AddToCart;
