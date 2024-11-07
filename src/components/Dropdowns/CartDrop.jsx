import Dropdown from "./Dropdown";

import { useCart } from "../../context/CartContext";

import cartIcon from "../../assets/images/icon-cart.svg";

import { TrashIcon } from "@heroicons/react/16/solid";

import CheckoutBtn from "../buttons/CheckoutBtn"

export default function CartDropdown() {
  const { getQuantifyCart, cartItems, getQuantify, removeFromCart } = useCart();
  const totalAmount = cartItems.reduce((total, item) => total + ((item.price * item.descontPrice) / 100) * item.quantity, 0).toFixed(2);
  return (
    <Dropdown
      buttonContent={
        <div className="flex">
          <span className="w-3 h-3 text-[9px] relative left-5 bottom-1 bg-primary-orange text-white flex items-center rounded-md justify-center">
            {getQuantifyCart()}
          </span>
          <img
            className="w-4 h-4 cursor-pointer "
            src={cartIcon}
            alt="cart icon"
          />
        </div>
      }
      position={'right'}
    >
      <div>
        <div className="p-4 border-b">
          <h1 className="text-sm font-semibold">Cart ({cartItems.length})</h1>
        </div>
        <div className="p-4">
          {cartItems.length === 0 ? (
            <div className="p-8 flex items-center justify-center">
              <h1 className="text-xs font-bold text-neutral-dark-grayish-blue">
                You cart is empty
              </h1>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <img className="w-8 h-8 rounded-md" src={item.illustration} />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[10px] text-neutral-dark-grayish-blue">
                      {item.nameProduct}
                    </h1>
                    <div className="flex gap-3 items-center">
                      <h1 className="text-[10px] text-neutral-dark-grayish-blue">
                        ${(item.price * item.descontPrice) / 100}.00 x{" "}
                        {getQuantify(item.id)}
                      </h1>
                      <h1 className="text-[10px] font-bold">
                        $
                        {(
                          ((item.price * item.descontPrice) / 100) *
                          item.quantity
                        ).toFixed(2)}
                      </h1>
                    </div>
                  </div>
                  <TrashIcon
                    onClick={() => removeFromCart(item.id)}
                    className="w-4 h-4 text-neutral-dark-grayish-blue cursor-pointer transition-all hover:text-primary-orange hover:rotate-180"
                  />
                </div>
              ))}
              <CheckoutBtn totalAmount={totalAmount}/>
            </div>
          )}
        </div>
      </div>
    </Dropdown>
  );
}
