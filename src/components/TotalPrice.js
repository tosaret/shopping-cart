import CartImg from "../img/cart.png";

const TotalPrice = ({ totalPrice, itemCount }) => {
  return (
    <div className="shoppingCartPrice">
      <h2>Total price: ${totalPrice}</h2>
      <div
        style={{ background: `url(${CartImg}) no-repeat center/cover` }}
        className="allCartItems"
      >
        <div className="itemsAmountWrap">
          <p>{itemCount}</p>
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
