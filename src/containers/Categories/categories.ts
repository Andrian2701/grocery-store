import vegetables from "../../assets/categories/vegetables.png";
import fruits from "../../assets/categories/fruits.jpeg";
import meatAndEggs from "../../assets/categories/meat-and-eggs.png";
import drinks from "../../assets/categories/drinks.webp";
import bakery from "../../assets/categories/bakery.png";
import grains from "../../assets/categories/grains.png";
import frozenFood from "../../assets/categories/frozen-food.png";

type Categories = {
  title: string;
  img: string;
};

export const categories: Categories[] = [
  {
    title: "Vegetables",
    img: vegetables,
  },
  {
    title: "Fruits",
    img: fruits,
  },
  {
    title: "Meat & Eggs",
    img: meatAndEggs,
  },
  {
    title: "Drinks",
    img: drinks,
  },
  {
    title: "Bakery",
    img: bakery,
  },
  {
    title: "Grains",
    img: grains,
  },
  {
    title: "Frozen Food",
    img: frozenFood,
  },
];
