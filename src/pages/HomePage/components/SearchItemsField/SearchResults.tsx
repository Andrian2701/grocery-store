import { Box, Typography, styled } from "@mui/material";
import { ProductListItem } from "../../../../common";
import { Product } from "../../../../types";
import notFound from "../../../../assets/not-found.png";

type SearchResultProps = {
  searchQ: string;
  productsByQ: Product[] | undefined;
};

const SearchResultDiv = styled(Box)({
  width: "100%",
  height: "auto",
  position: "absolute",
  marginTop: "1rem",
  backgroundColor: "#ffffff",
  borderTopRightRadius: "0.5rem",
  borderTopLeftRadius: "0.5rem",
  zIndex: 9999,
  display: "flex",
  flexDirection: "column",
});

export const SearchResult = ({ searchQ, productsByQ }: SearchResultProps) => {
  return (
    <>
      {productsByQ?.length !== 0 ? (
        <SearchResultDiv>
          <Typography variant="h4" padding="1.2rem">
            Products
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            maxHeight="50vh"
            overflow="auto"
          >
            {productsByQ?.map((product) => (
              <ProductListItem key={product.productId} data={product} />
            ))}
          </Box>
        </SearchResultDiv>
      ) : (
        <SearchResultDiv
          alignItems="center"
          justifyContent="center"
          gap="0.5rem"
          padding="1.2rem"
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
