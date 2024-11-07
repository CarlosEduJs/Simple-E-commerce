
const CheckoutBtn = ({totalAmount}) => {

  return (
    <button
      onClick={() => window.location.reload(true)}
      className="p-3 bg-primary-orange hover:bg-primary-orange/30 min-w-[200px] flex items-center justify-center gap-3 rounded-md"
    >
      <h1 className="text-neutral-very-dark-blue font-semibold text-xs">
        Checkout ${totalAmount}
      </h1>
    </button>
  );
};

export default CheckoutBtn;
