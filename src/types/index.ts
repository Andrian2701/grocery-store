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
