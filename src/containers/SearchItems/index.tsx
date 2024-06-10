import { Dispatch, SetStateAction, useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Box, InputAdornment, OutlinedInput, useTheme } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { Product } from "../../components/ProductCard/types";
import { SearchResult } from "./SearchResults";

type SearchItemsProps = {
  openBackdrop: boolean;
  setOpenBackDrop: Dispatch<SetStateAction<boolean>>;
};

export const SearchItems = ({
  openBackdrop,
  setOpenBackDrop,
}: SearchItemsProps) => {
  const theme = useTheme();
  const [isScrollDisabled, setIsScrollDisabled] = useState<boolean>(false);
  const [searchQ, setSearchQ] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsRef = await getDocs(collection(db, "products"));
        const products = productsRef.docs.map((doc) => ({
          ...doc.data(),
        }));
        const flattenData: Product[] = products.flatMap(
          (product) => product.data
        );
        setProducts(flattenData);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isScrollDisabled ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isScrollDisabled]);

  const handleInputFocus = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setIsScrollDisabled(true);
    setOpenBackDrop(true);
  };

  const handleOutsideClick = () => {
    setOpenBackDrop(false);
    setIsScrollDisabled(false);
    setSearchQ("");
  };

  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClick}>
      <Box position="relative">
        <OutlinedInput
          type="text"
          placeholder="Search Item…"
          value={searchQ}
          onChange={(e) => setSearchQ(e.target.value)}
          onFocus={handleInputFocus}
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
          sx={{
            borderRadius: "0.8rem",
            border: "none",
            backgroundColor: openBackdrop
              ? "#f9fafb"
              : theme.palette.primary.light,
            zIndex: openBackdrop ? 9999 : "none",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        />
        {searchQ.length !== 0 && (
          <SearchResult
            searchQ={searchQ}
            productsByQ={products.filter((product) =>
              product.name.toLowerCase().includes(searchQ.toLowerCase())
            )}
          />
        )}
      </Box>
    </OutsideClickHandler>
  );
};
