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
  query: string;
};

export const categories: Categories[] = [
  {
    title: "Vegetables",
    img: vegetables,
    query: "vegetables",
  },
  {
    title: "Fruits",
    img: fruits,
    query: "fruits",
  },
  {
    title: "Meat & Eggs",
    img: meatAndEggs,
    query: "meat-and-eggs",
  },
  {
    title: "Drinks",
    img: drinks,
    query: "drinks",
  },
  {
    title: "Bakery",
    img: bakery,
    query: "bakery",
  },
  {
    title: "Grains",
    img: grains,
    query: "grains",
  },
  {
    title: "Frozen Food",
    img: frozenFood,
    query: "frozen-food",
  },
];
