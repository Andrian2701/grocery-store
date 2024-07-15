import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { setNotification } from "../store/features/Notification/NotificationSlice";
import { db } from "../utils/firebase";
import { useGetAddress } from "./useGetAddress";
import { theme } from "../theme";
import { CartItems, CurrentUser } from "../types";

type FormData = {
  name: string | null | undefined;
  email: string | null | undefined;
  address: string;
  postalCode: string;
  cardNumber: string;
  cardExpire: string;
  cardCVC: string;
};

export const useCheckoutForm = (
  currentUser: CurrentUser,
  cartItems: CartItems[]
) => {
  const dispatch = useDispatch();
  const address = useGetAddress(currentUser?.uid);
  const [loadSpinner, setLoadSpinner] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
    reset,
  } = useForm({
    defaultValues: {
      name: currentUser?.displayName,
      email: currentUser?.email,
      address: "",
      postalCode: "",
      cardNumber: "",
      cardExpire: "",
      cardCVC: "",
    },
  });

  useEffect(() => {
    if (address) {
      reset({
        name: currentUser?.displayName,
        email: currentUser?.email,
        address: address,
        postalCode: "",
        cardNumber: "",
        cardExpire: "",
        cardCVC: "",
      });
    }
  }, [address, currentUser, reset]);

  const onSubmit = async (formData: FormData) => {
    if (currentUser) {
      try {
        const ordersRef = doc(db, "orders", currentUser.uid);
        const docSnap = await getDoc(ordersRef);

        const dataToSet = {
          orderId: uuidv4(),
          orderDate: new Date(),
          name: formData.name,
          email: formData.email,
          address: formData.address,
          postalCode: formData.postalCode,
          cardNumber: formData.cardNumber,
          cardExpire: formData.cardExpire,
          cardCVC: formData.cardCVC,
          items: cartItems,
        };

        if (!docSnap.exists()) {
          await setDoc(ordersRef, {
            userOrders: arrayUnion(dataToSet),
          });
        } else {
          await updateDoc(ordersRef, {
            userOrders: arrayUnion(dataToSet),
          });
        }

        setLoadSpinner(true);
        setTimeout(() => {
          setLoadSpinner(false);
          reset();

          dispatch(
            setNotification({
              open: true,
              title: "Order placed successfully",
              color: theme.palette.primary.main,
            })
          );
          setTimeout(() => {
            dispatch(
              setNotification({
                open: false,
              })
            );
          }, 1500);
        }, 1500);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return { handleSubmit, onSubmit, errors, trigger, register, loadSpinner };
};
