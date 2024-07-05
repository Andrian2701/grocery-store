import { FaLeaf, FaTruck, FaChartLine } from "react-icons/fa";
import { IconType } from "react-icons";

export type Card = {
  icon: IconType;
  title: string;
  desc: string;
};

export const cards: Card[] = [
  {
    icon: FaLeaf,
    title: "Fresh Produce",
    desc: "Enjoy fresh organic products every day. Healthy choices for you",
  },
  {
    icon: FaTruck,
    title: "Worldwide Delivery",
    desc: "We deliver all over the world. Enjoy your favorite products anywhere",
  },
  {
    icon: FaChartLine,
    title: "Actionable Analytics",
    desc: "Get a view of your business to better understand sales",
  },
];
