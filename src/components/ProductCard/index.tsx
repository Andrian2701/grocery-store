import { Link } from "react-router-dom";
import { Box, Button, Skeleton, Typography, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Product } from "./types";

type ProductCardProps = {
  product?: Product;
  isLoading: boolean;
};

export const ProductCard = ({ product, isLoading }: ProductCardProps) => {
  const theme = useTheme();

  return (
    <>
      <Box
        component={Link}
        to={`/${product?.category}/${product?.name}`}
        sx={{
          textDecoration: "none",
          height: "18rem",
          width: {
            xs: "13.5rem !important",
            md: "14rem !important",
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            padding: "1rem 1rem 1rem 1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "1rem",
            bgcolor: "#ffffff",
            cursor: "pointer",
          }}
        >
          {!isLoading ? (
            <>
              <Box
                component="img"
                src={product?.imgURL}
                alt={product?.name}
                width={{ xs: 130, sm: 150 }}
                height={{ xs: 130, sm: 150 }}
              />
              <Box>
                <Typography
                  variant="h2"
                  fontSize="1.2rem !important"
                  textAlign="center"
                  sx={{
                    transitionDuration: "0.2s",
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {product?.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontSize="13.5px !important"
                  textAlign="center"
                >
                  {product?.quantity}pcs, Pricetag
                </Typography>
              </Box>
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h2" fontSize="1.2rem !important">
                  ${product?.price}
                </Typography>
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
            </>
          ) : (
            <>
              <Skeleton
                variant="rectangular"
                animation="pulse"
                sx={{
                  width: "100%",
                  height: { xs: 130, sm: 150 },
                }}
              />
              <Box width="100%">
                <Skeleton
                  variant="text"
                  animation="pulse"
                  width="100%"
                  height={23}
                />
                <Skeleton
                  variant="text"
                  animation="pulse"
                  width="100%"
                  height={23}
                />
              </Box>
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Skeleton
                  variant="text"
                  animation="pulse"
                  width={52}
                  height={23}
                />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};
