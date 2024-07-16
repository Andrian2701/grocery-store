import { User } from "firebase/auth";

export type CartItems = {
  reduce(arg0: (total: number, item: any) => any, arg1: number): number;
  category: string;
  imgURL: string;
  name: string;
  productId: number;
  quantity: number;
  selectedQuantity: number;
  totalPrice: number;
  units: string;
};

export type CurrentUser = User | null;

export type Product = {
  name: string;
  about: string;
  category: string;
  imgURL: string;
  quantity: number;
  price: number;
  calories: number;
  productId: number;
  units: string;
};

export type FormData = {
  name?: string;
  email: string;
  password: string;
};
