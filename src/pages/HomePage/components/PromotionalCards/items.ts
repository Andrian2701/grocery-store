import { FaLeaf, FaTruck, FaChartLine } from "react-icons/fa";
import { IconType } from "react-icons/lib";

type Item = {
  icon: IconType;
  title: string;
  desc: string;
};

export const items: Item[] = [
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
