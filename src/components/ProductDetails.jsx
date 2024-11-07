import { useState } from "react";
import AddToCart from "./AddToCart";

import AddToCartBtn from "./buttons/AddToCartBtn";

import productInfor from "../data/productInfors.json";

const ProductDetails = () => {
  const [product] = useState(productInfor[0]);

  const price = product.price;
  const descont = product.descontPrice;
  const descontFinalPrice = (price * descont) / 100;

  return (
    <div className="flex flex-col justify-center  max-h-[400px] max-sm:w-full max-sm:px-5">
      <span className="text-xs text-neutral-dark-grayish-blue font-semibold tracking-widest">
        SNEAKER COMPANY
      </span>
      <h1 className="text-3xl font-bold max-w-[240px] max-sm:text-4xl max-sm:max-w-[380px]">
        {product.nameProduct}
      </h1>
      <span className="mt-6 text-xs max-w-[320px] font-medium text-neutral-dark-grayish-blue max-md:text-sm">
        {product.descriptionProduct}
      </span>
      <div className="flex sm:flex-col max-sm:justify-between max-sm:items-center">
        <div className="flex items-center gap-5 mt-4">
          <h1 className="text-2xl font-bold">${descontFinalPrice}.00</h1>
          <span className="bg-black text-white px-3 py-1 rounded-md text-xs">
            {descont}%
          </span>
        </div>
        <h2 className="text-xs font-medium text-neutral-dark-grayish-blue line-through my-4 max-sm:text-sm max-sm:font-bold">
          ${price}.00
        </h2>
      </div>
      <div className="flex items-center gap-4 max-sm:mt-5 max-sm:flex-col">
        <AddToCart item={product} />
        <AddToCartBtn item={product} />
      </div>
    </div>
  );
};
export default ProductDetails;
