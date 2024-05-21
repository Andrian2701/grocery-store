import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import CloseIcon from "@mui/icons-material/Close";
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  useTheme,
} from "@mui/material";

export const SearchItem = ({ setOpenBackDrop, openBackdrop }: any) => {
  const theme = useTheme();
  const [inputVal, setInputVal] = useState<string>("");
  const [isScrollDisabled, setIsScrollDisabled] = useState<boolean>(false);

  useEffect(() => {
    isScrollDisabled
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isScrollDisabled]);

  const handleFocus = () => setIsScrollDisabled(true);

  return (
    <OutlinedInput
      type="text"
      placeholder="Search Item…"
      value={inputVal}
      onChange={(e) => setInputVal(e.target.value)}
      onFocus={() => {
        handleFocus();
        setOpenBackDrop(true);
      }}
      startAdornment={
        <InputAdornment
          position="start"
          sx={{
            color: theme.palette.primary.main,
            fontSize: "1.2rem",
          }}
        >
          <FiSearch />
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            edge="end"
            sx={{
              color: theme.palette.secondary.light,
              cursor: "pointer",
              fontSize: "0.1rem",
            }}
          >
            {inputVal !== "" && <CloseIcon onClick={() => setInputVal("")} />}
          </IconButton>
        </InputAdornment>
      }
      sx={{
        borderRadius: "0.8rem",
        border: "none",
        backgroundColor:
          openBackdrop === true ? "#f9fafb" : theme.palette.primary.light,
        zIndex: openBackdrop === true ? 9999 : "none",
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      }}
    />
  );
};
