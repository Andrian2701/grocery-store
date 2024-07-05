import { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import {
  Backdrop,
  Box,
  InputAdornment,
  OutlinedInput,
  useTheme,
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { collection, getDocs } from "firebase/firestore";
import { Product } from "../../components/ProductCard/types";
import { SearchResult } from "./SearchResults";
import { db } from "../../utils/firebase";

export const SearchItems = () => {
  const theme = useTheme();
  const [isScrollDisabled, setIsScrollDisabled] = useState<boolean>(false);
  const [searchQ, setSearchQ] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [openBackdrop, setOpenBackDrop] = useState<boolean>(false);

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
    <>
      <Backdrop
        open={openBackdrop}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />
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
                ? "#ffffff"
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
    </>
  );
};
