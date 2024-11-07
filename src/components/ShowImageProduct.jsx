import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { useState, useEffect } from "react";

const ShowImageProduct = ({ open, image, thumbList, onClose }) => {
  const [openModal, setIsOpenModal] = useState(open);

  const initialIndex = thumbList.findIndex(
    (product) => product.illustration === image
  );
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [image, initialIndex]);

  const goToPreviousImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + thumbList.length) % thumbList.length
    );
  };
  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % thumbList.length);
  };

  useEffect(() => {
    setIsOpenModal(open);
  }, [open]);

  const closeModal = () => {
    setIsOpenModal(false);
    onClose();
  };

  return (
    <div
      className={`flex flex-col items-center justify-center w-screen h-screen bg-black/70 fixed left-0 top-0 ${
        !openModal ? "hidden" : ""
      }`}
    >
      <div className="flex flex-col gap-6">
        <div className="flex w-full justify-end px-10 ">
          <XMarkIcon
            onClick={closeModal}
            className="w-8 h-8 cursor-pointer text-white hover:text-primary-orange"
          />
        </div>

        <div className="flex items-center">
          <div
            onClick={goToPreviousImage}
            className="rounded-full bg-white p-2 cursor-pointer relative left-5 hover:text-primary-orange"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </div>
          <img
            className="w-96 h-96 rounded-md"
            src={thumbList[currentIndex].illustration}
            alt=""
          />
          <div
            onClick={goToNextImage}
            className="rounded-full bg-white p-2 cursor-pointer relative right-5"
          >
            <ChevronRightIcon className="w-6 h-6 hover:text-primary-orange" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          {thumbList.map((product, index) => (
            <img
              key={index}
              src={product.thumb}
              alt={`Miniatura ${product.id}`}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer w-16 h-16 rounded-lg ${
                currentIndex === index
                  ? "border-2 border-primary-orange filter brightness-150"
                  : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowImageProduct;
