import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CardContainer from "./CardContainer";
import Nav from "./Nav";
import Container from "./reusableComponents/Container";
import ShoppingCartContainer from "./ShoppingCartContainer";

const Hero = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const [cardItems, setCardItems] = useState([]);
  const [hiddenMenu, setHiddenMenu] = useState(false);

  const updateCart = (shoeImg, shoePrice) => {
    setItemCount((prev) => prev + 1);
    setTotalPrice((prev) => prev + shoePrice);

    if (cardItems.find((item) => item.img === shoeImg)) {
      const result = cardItems.find((item) => item.img === shoeImg);
      result.cardCount++;
      return;
    }

    setCardItems([
      ...cardItems,
      {
        img: shoeImg,
        price: shoePrice,
        id: uuidv4(),
        cardCount: 1,
      },
    ]);
  };

  const removeItem = (id) => {
    const newItems = cardItems.filter((cardItem) => cardItem.id !== id);
    const itemCountResult = newItems.reduce(
      (acc, value) => (acc += value.cardCount),
      0
    );
    const priceResult = newItems.reduce(
      (acc, value) => (acc += value.price * value.cardCount),
      0
    );

    setTotalPrice(priceResult);
    setItemCount(itemCountResult);
    setCardItems(newItems);
  };

  return (
    <section className="hero">
      <Nav
        hiddenMenu={hiddenMenu}
        setHiddenMenu={setHiddenMenu}
        itemCount={itemCount}
      />
      <Container>
        <CardContainer updateCart={updateCart} />
        <ShoppingCartContainer
          hiddenMenu={hiddenMenu}
          cardItems={cardItems}
          totalPrice={totalPrice}
          itemCount={itemCount}
          removeItem={removeItem}
        />
      </Container>
    </section>
  );
};

export default Hero;
