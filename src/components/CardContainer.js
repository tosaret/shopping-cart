import Card from "./Card";

const CardContainer = ({ updateCart }) => {
  return (
    <div className="cardContainer">
      <Card updateCart={updateCart} />
    </div>
  );
};

export default CardContainer;
