const ShoppingCart = ({ cardItems, removeItem }) => {
  return (
    <div className="shoppingCart">
      {cardItems.map((item) => (
        <div key={item.id} className="cardRow">
          <div className="cardImg">
            <p>x{item.cardCount}</p>
            <img src={item.img} alt="shoe" />
          </div>
          <div className="cardPrice">
            <p>${item.price}</p>
            <i className="fas fa-times" onClick={() => removeItem(item.id)}></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
