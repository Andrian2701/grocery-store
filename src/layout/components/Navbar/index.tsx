import { Link } from "react-router-dom";
import { MenuItem } from "@mui/material";
import { ReactNode } from "react";

type NavbarProps = {
  navItems: string[];
  fontSize?: number;
};

export const Navbar = ({ navItems, fontSize }: NavbarProps) => {
  return (
    <>
      {navItems.map((item) => (
        <MenuItem
          key={item}
          component={Link}
          to="#"
          sx={{ fontSize: fontSize }}
        >
          {item}
        </MenuItem>
      ))}
    </>
  );
};
