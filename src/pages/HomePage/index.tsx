import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Hero, PromotionalCards, SearchItemsField } from "./components";
import { Categories } from "../../common";
import { PageWrapper } from "../PageWrapper";

export const HomePage = () => {
  return (
    <>
      <PageWrapper flexDirection="column" justifyContent="center" gap="2.5rem">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap="2rem"
        >
          <SearchItemsField />
          <Hero />
        </Box>
        <Categories title="Top Categories" />
        <Outlet />
        <PromotionalCards />
      </PageWrapper>
    </>
  );
};
