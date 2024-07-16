import { List, ListItem, CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../utils/firebase";
import { setNotification } from "../../../store/features/Notification/NotificationSlice";
import { theme } from "../../../theme";

type Data = {
  description: string;
  place_id: string;
};

type SuggestedPlacesProps = {
  data: Data[];
  isLoading: boolean;
  setSearchQ: React.Dispatch<React.SetStateAction<string>>;
  handleCloseModal?: () => void;
};

export const SuggestedPlaces = ({
  data,
  isLoading,
  setSearchQ,
  handleCloseModal,
}: SuggestedPlacesProps) => {
  const userUid = auth.currentUser?.uid;
  const dispatch = useDispatch();

  const handleSetLocation = async (selectedAddress: string) => {
    if (userUid && db) {
      const addressRef = doc(db, "addresses", userUid);
      await setDoc(addressRef, { address: selectedAddress });
    }

    setSearchQ("");
    handleCloseModal && handleCloseModal();

    dispatch(
      setNotification({
        open: true,
        title: `Successfull changes`,
        color: theme.palette.primary.main,
      })
    );
    setTimeout(() => dispatch(setNotification({ open: false })), 1500);
  };

  return (
    <List
      sx={{
        width: 325,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#f9fafb",
        borderRadius: "0.5rem",
        boxShadow: 3,
        "@media (max-width: 746px)": {
          width: "100%",
        },
      }}
    >
      {!isLoading ? (
        data.map((item: Data) => (
          <ListItem
            key={item.place_id}
            onClick={() => handleSetLocation(item.description)}
            sx={{
              padding: "1.2rem",
              cursor: "pointer",
              bgcolor: "#f9fafb",
              height: "3.5rem",
              transitionDuration: "0.2s",
              "&:hover": {
                bgcolor: "#e8e8e8",
              },
            }}
          >
            {item.description}
          </ListItem>
        ))
      ) : (
        <CircularProgress size={25} />
      )}
    </List>
  );
};
