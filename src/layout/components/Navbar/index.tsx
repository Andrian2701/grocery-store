import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "@mui/material";

type NavbarProps = {
  children?: ReactNode;
};

export const Navbar = ({ children }: NavbarProps) => {
  return (
    <>
      <MenuItem component={Link} to="#">
        Cart
      </MenuItem>
      <MenuItem component={Link} to="#">
        Contact
      </MenuItem>
      <MenuItem component={Link} to="#">
        Help
      </MenuItem>
      {children}
    </>
  );
};
