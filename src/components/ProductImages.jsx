import { useState, useEffect } from "react";
import productDetails from "../data/productInfors.json";

import ShowImageProduct from "./ShowImageProduct";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const ProductImages = () => {
  const productInitial = productDetails[0];
  const thumbList = productInitial.productImages;

  const initialIndex = thumbList.findIndex(
    (product) => product.illustration === productInitial.illustration
  );

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [illustrationImage, setIllustrationImage] = useState(productInitial.illustration);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [productInitial.illustration, initialIndex]);

  const goToPreviousImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + thumbList.length) % thumbList.length
    );
    setIllustrationImage(thumbList[(currentIndex - 1 + thumbList.length) % thumbList.length].illustration);
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % thumbList.length);
    setIllustrationImage(thumbList[(currentIndex + 1) % thumbList.length].illustration);
  };

  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  const handleIllustrationImage = (image) => {
    setIllustrationImage(image);
  };

  return (
    <div className="flex flex-col items-center gap-4 max-lg:flex-row sm:items-center">
      <div className="relative flex items-center">
        <div onClick={goToPreviousImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white p-2 cursor-pointer sm:hidden hover:text-primary-orange">
          <ChevronLeftIcon className="w-6 h-6" />
        </div>
        <img
          className="w-full h-auto max-w-md rounded-lg cursor-pointer max-sm:rounded-none"
          src={illustrationImage}
          onClick={() => setOpen(true)}
        />
        <div onClick={goToNextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full sm:hidden bg-white p-2 cursor-pointer hover:text-primary-orange">
          <ChevronRightIcon className="w-6 h-6" />
        </div>
      </div>
      <div className="flex gap-4 justify-center mt-4 max-mobile:hidden max-md:flex-col">
        {thumbList.map((product, index) => (
          <img
            key={index}
            src={product.thumb}
            alt={`Miniatura ${product.id}`}
            onClick={() => handleIllustrationImage(product.illustration)}
            className={`cursor-pointer w-16 h-16 rounded-lg ${
              illustrationImage === product.illustration
                ? "border-2 border-primary-orange filter brightness-150"
                : ""
            }`}
          />
        ))}
      </div>
      <ShowImageProduct
        image={illustrationImage}
        open={open}
        onClose={closeModal}
        thumbList={thumbList}
      />
    </div>
  );
};

export default ProductImages;
