import ShoeItem from "./ShoeItem";
// eslint-disable-next-line
const ListShoe = ({ listShoe, addShoeCart }) => {
  return (
    <div className="list_shoe grid grid-cols-3 gap-5">
      {/*  eslint-disable-next-line */}
      {listShoe.map((item, index) => {
        /* Yêu cầu: mang các giao diện item đôi giày đưa vào trong component ShoeItem và quản lí */
        return (
          <ShoeItem
            addShoeCart={addShoeCart}
            item={item}
            key={index}
          ></ShoeItem>
        );
      })}
    </div>
  );
};

export default ListShoe;
