import { List, ListItem, CircularProgress } from "@mui/material";
import { auth, db } from "../../../utils/firebase";
import { doc, setDoc } from "firebase/firestore";

type Data = {
  description: string;
  place_id: string;
};

type SuggestedPlacesProps = {
  data: Data[];
  isLoading: boolean;
  setSearchQ: React.Dispatch<React.SetStateAction<string>>;
  handleCloseModal: () => void;
};

export const SuggestedPlaces = ({
  data,
  isLoading,
  setSearchQ,
  handleCloseModal,
}: SuggestedPlacesProps) => {
  const userUid = auth.currentUser?.uid;

  const handleSetLocation = async (selectedAddress: string) => {
    if (userUid && db) {
      const addressRef = doc(db, "addresses", userUid);
      await setDoc(addressRef, { address: selectedAddress });
    }

    setSearchQ("");
    handleCloseModal();
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
