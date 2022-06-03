import ShoeOne from "../img/shoe1.png";
import ShoeTwo from "../img/shoe2.png";
import ShoeThree from "../img/shoe3.png";
import ShoeFour from "../img/shoe4.png";
import ShoeFive from "../img/shoe5.png";
import ShoeSix from "../img/shoe6.png";

import { v4 as uuidv4 } from "uuid";

export default [
  {
    id: uuidv4(),
    cardImg: ShoeOne,
    cardPrice: 699,
  },
  {
    id: uuidv4(),
    cardImg: ShoeTwo,
    cardPrice: 599,
  },
  {
    id: uuidv4(),
    cardImg: ShoeThree,
    cardPrice: 499,
  },
  {
    id: uuidv4(),
    cardImg: ShoeFour,
    cardPrice: 399,
  },
  {
    id: uuidv4(),
    cardImg: ShoeFive,
    cardPrice: 299,
  },
  {
    id: uuidv4(),
    cardImg: ShoeSix,
    cardPrice: 199,
  },
];
