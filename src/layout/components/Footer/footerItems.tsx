import { ReactElement } from "react";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import googlePlay from "../../../assets/icons/google-play.webp";
import appleStore from "../../../assets/icons/apple-store.png";

type DownloadItems = {
  icon: string;
  title: string;
  alt: string;
};

type SocialItems = {
  id: number;
  icon: ReactElement;
};

export const contacts = [
  "0710 30 30 30",
  "support@grocery-store",
  "22D Shevchenko Avenue, 5th floor, Lviv 79013",
];

export const downloadItems: DownloadItems[] = [
  {
    icon: googlePlay,
    title: "Google Play",
    alt: "Google Play",
  },
  {
    icon: appleStore,
    title: "Apple Store",
    alt: "Apple Store",
  },
];

export const socialItems: SocialItems[] = [
  {
    id: 1,
    icon: <RiFacebookFill />,
  },
  {
    id: 2,
    icon: <RiInstagramFill />,
  },
  {
    id: 3,
    icon: <RiLinkedinFill />,
  },
  {
    id: 4,
    icon: <FaPinterestP />,
  },
];
