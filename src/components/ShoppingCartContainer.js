import ShoppingCart from "./ShoppingCart";
import TotalPrice from "./TotalPrice";

const ShoppingCartContainer = (props) => {
  const { hiddenMenu, cardItems, totalPrice, itemCount, removeItem } = props;

  return (
    <div className={`shoppingCartContainer ${!hiddenMenu ? "" : "hidden"}`}>
      <ShoppingCart cardItems={cardItems} removeItem={removeItem} />
      <TotalPrice totalPrice={totalPrice} itemCount={itemCount} />
    </div>
  );
};

export default ShoppingCartContainer;
