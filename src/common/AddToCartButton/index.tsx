import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useAddToCart } from "../../hooks/useAddToCart";
import { useGetCurrentUser } from "../../hooks/useGetCurrentUser";
import { useNavigate } from "react-router-dom";

type AddToCartButtonProps = {
  title?: string;
  selectedProduct: any;
  selectedQ: number | undefined;
  totalPrice: number | undefined;
};

export const AddToCartButton = ({
  title,
  selectedProduct,
  selectedQ,
  totalPrice,
}: AddToCartButtonProps) => {
  const currentUser = useGetCurrentUser();
  const { handleAddToCart } = useAddToCart({
    selectedProduct,
    selectedQ,
    totalPrice,
  });
  const navigate = useNavigate();

  const handleOnAddToCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    currentUser ? handleAddToCart() : navigate("/login");
  };

  return (
    <Button
      sx={
        title
          ? { width: "100%" }
          : {
              minWidth: "1.8rem",
              maxWidth: "1.8rem",
              height: "1.8rem",
              borderRadius: "0.3rem",
            }
      }
      onClick={handleOnAddToCartClick}
    >
      {title ? title : <AddIcon sx={{ fontSize: "1.2rem" }} />}
    </Button>
  );
};
