import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";

const ProductOverview = () => {
  return (
    <div className="flex py-16 gap-[6rem] max-sm:gap-5 px-[3rem] max-sm:px-0 max-sm:py-0 max-lg:gap-3 w-full h-screen max-lg:flex-col">
      <ProductImages />
      <ProductDetails />
    </div>
  );
};

export default ProductOverview;
