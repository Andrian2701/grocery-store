import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  useTheme,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { SuggestedPlaces } from "./SuggestedPlaces";
import { API_KEY } from "./API_KEY";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/features/ModalWindow/ModalWindowSlice";
import map from "../../../assets/map.jpeg";

export const SetAddress = () => {
  const theme = useTheme();
  const [searchQ, setSearchQ] = useState("");
  const dispatch = useDispatch();
  const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
    useGoogle({
      apiKey: API_KEY,
    });

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        bgcolor: "#f9fafb",
        borderRadius: { sm: 2 },
        height: { xs: "100vh", sm: "30rem" },
        width: { xs: "100vw", sm: "50rem" },
        maxWidth: { xs: "100vw", sm: "calc(100% - 2rem)" },
        p: {
          xs: "22px 16px",
          sm: "22px 48px",
        },
      }}
    >
      <IconButton
        onClick={() => {
          dispatch(closeModal());
          setSearchQ("");
        }}
        sx={{ position: "absolute", right: 10, top: 10 }}
      >
        <CloseIcon />
      </IconButton>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        width="100%"
        marginTop="3.2rem"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="2rem"
          width={{ xs: "100%", sm: "50%" }}
        >
          <TextField
            label="Location"
            variant="outlined"
            value={searchQ}
            onChange={(evt) => {
              getPlacePredictions({ input: evt.target.value });
              setSearchQ(evt.target.value);
            }}
            sx={{
              width: 325,
              "@media (max-width: 746px)": {
                width: "100%",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setSearchQ("")}
                    sx={{
                      color: theme.palette.secondary.light,
                      cursor: "pointer",
                    }}
                  >
                    {searchQ !== "" && <CloseIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {searchQ !== "" && (
            <SuggestedPlaces
              data={placePredictions}
              isLoading={isPlacePredictionsLoading}
              setSearchQ={setSearchQ}
              handleCloseModal={() => dispatch(closeModal())}
            />
          )}
        </Box>
        <Box width="50%" display="flex" justifyContent="flex-end">
          <Box
            component="img"
            src={map}
            alt="map"
            sx={{
              height: "18rem",
              width: "18rem",
              display: { xs: "none", sm: "block" },
              "@media (max-width: 746px)": {
                width: "14rem",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
