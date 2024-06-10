import { Link } from "react-router-dom";
import { Box, Button, Typography, styled, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Product } from "../../components/ProductCard/types";
import notFound from "../../assets/not-found.png";

type SearchResultProps = {
  searchQ: string;
  productsByQ: Product[];
};

const SearchResultDiv = styled(Box)({
  width: "100%",
  height: "auto",
  position: "absolute",
  marginTop: "1rem",
  backgroundColor: "#f9fafb",
  borderRadius: "0.5rem",
  zIndex: 9999,
  padding: "1.2rem",
  display: "flex",
  flexDirection: "column",
});

export const SearchResult = ({ searchQ, productsByQ }: SearchResultProps) => {
  const theme = useTheme();

  return (
    <>
      {productsByQ.length !== 0 ? (
        <SearchResultDiv gap="2rem">
          <Typography variant="h4">Products</Typography>
          <Box
            display="flex"
            flexDirection="column"
            maxHeight="50vh"
            overflow="auto"
            gap="1rem"
          >
            {productsByQ?.map((product) => (
              <Box
                key={product.name}
                component={Link}
                to={`/${product.category}/${product?.name}`}
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  bgcolor: "#f9fafb",
                  height: "5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap="2rem"
                >
                  <Box
                    component="img"
                    src={product.imgURL}
                    alt={product.name}
                    width="4rem"
                    height="4rem"
                  />
                  <Box display="flex" flexDirection="column">
                    <Typography
                      variant="h4"
                      sx={{
                        transitionDuration: "0.2s",
                        "&:hover": {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography variant="subtitle1" fontSize="12px">
                      {product.quantity}pcs, Pricetag
                    </Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap="2rem"
                >
                  <Typography variant="h4">${product?.price}</Typography>
                  <Button
                    sx={{
                      minWidth: "1.8rem",
                      maxWidth: "1.8rem",
                      height: "1.8rem",
                      borderRadius: "0.3rem",
                    }}
                  >
                    <AddIcon sx={{ fontSize: "1.2rem" }} />
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </SearchResultDiv>
      ) : (
        <SearchResultDiv
          alignItems="center"
          justifyContent="center"
          gap="0.5rem"
        >
          <Box
            component="img"
            src={notFound}
            alt="No Results"
            width="7rem"
            height="5rem"
          />
          <Typography variant="h4">No results for "{searchQ}"</Typography>
        </SearchResultDiv>
      )}
    </>
  );
};
