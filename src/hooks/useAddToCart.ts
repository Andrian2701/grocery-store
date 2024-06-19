import { useDispatch } from "react-redux";
import { useTheme } from "@mui/material";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Product } from "../components/ProductCard/types";
import { auth, db } from "../utils/firebase";
import { setNotification } from "../features/Notification/NotificationSlice";
import { useFormatQuantity } from "./useFormatQuantity";

type useAddToCartProps = {
  selectedProduct: Product;
  selectedQ: number | undefined;
  totalPrice: number | undefined;
};

export const useAddToCart = ({
  selectedProduct,
  selectedQ = 0,
  totalPrice,
}: useAddToCartProps) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const user = auth?.currentUser;
  const formattedQuantity = useFormatQuantity(selectedQ, selectedProduct.units);

  const handleAddToCart = async () => {
    if (user) {
      const cartsRef = doc(db, "carts", user.uid);
      const docSnap = await getDoc(cartsRef);

      let updatedCartItems = [];
      if (docSnap.exists()) {
        updatedCartItems = docSnap.data().items || [];
      }

      const itemIndex = updatedCartItems.findIndex(
        (item: any) => item.name === selectedProduct.name
      );

      if (itemIndex !== -1) {
        updatedCartItems = updatedCartItems.map((item: any, index: number) =>
          index === itemIndex
            ? {
                ...item,
                selectedQuantity: item.selectedQuantity + selectedQ,
                totalPrice: item.totalPrice + totalPrice,
              }
            : item
        );
      } else {
        updatedCartItems.push({
          name: selectedProduct.name,
          imgURL: selectedProduct.imgURL,
          quantity: selectedProduct.quantity,
          selectedQuantity: selectedQ,
          totalPrice: totalPrice,
        });
      }

      await updateDoc(cartsRef, { items: updatedCartItems });
      dispatch(
        setNotification({
          open: true,
          title: `${formattedQuantity} of ${selectedProduct.name} added to cart`,
          color: theme.palette.primary.main,
        })
      );
      setTimeout(() => dispatch(setNotification({ open: false })), 2000);
    }
  };

  return { handleAddToCart };
};
