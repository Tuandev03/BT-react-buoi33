// eslint-disable-next-line
const ShoeItem = ({ item, addShoeCart }) => {
  return (
    <div className="border-2 p-5 rounded-md space-y-3">
      {/*  eslint-disable-next-line */}
      <img src={item.image} alt="" />
      {/*  eslint-disable-next-line */}
      <h2 className=" text-2xl font-bold">{item.name}</h2>
      {/*  eslint-disable-next-line */}
      <p className="text-xl text-gray-500 font-semibold">
        {/*  eslint-disable-next-line */}
        Giá tiền {item.price}$
      </p>
      <button
        onClick={() => {
          addShoeCart(item);
        }}
        className="py-2 px-4 rounded-md bg-blue-400 text-white text-xl"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ShoeItem;
