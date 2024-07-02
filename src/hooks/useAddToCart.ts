import { useDispatch } from "react-redux";
import { useTheme } from "@mui/material";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { Product } from "../components/ProductCard/types";
import { setNotification } from "../features/Notification/NotificationSlice";
import { useFormatQuantity } from "./useFormatQuantity";
import { useGetCurrentUser } from "./useGetCurrentUser";

type Props = {
  selectedProduct: Product;
  selectedQ: number | undefined;
  totalPrice: number | undefined;
};

export const useAddToCart = ({
  selectedProduct,
  selectedQ = 0,
  totalPrice,
}: Props) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const currentUser = useGetCurrentUser();
  const formattedQuantity = useFormatQuantity(selectedQ, selectedProduct.units);

  const handleAddToCart = async () => {
    if (currentUser) {
      const cartsRef = doc(db, "carts", currentUser.uid);
      const docSnap = await getDoc(cartsRef);

      let updatedCartItems = [];
      if (docSnap.exists()) {
        updatedCartItems = docSnap.data().items || [];
      } else {
        setDoc(cartsRef, {
          items: arrayUnion(),
        });
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
          productId: selectedProduct.productId,
          name: selectedProduct.name,
          imgURL: selectedProduct.imgURL,
          quantity: selectedProduct.quantity,
          units: selectedProduct.units,
          category: selectedProduct.category,
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
      setTimeout(() => dispatch(setNotification({ open: false })), 1500);
    }
  };

  return { handleAddToCart };
};
