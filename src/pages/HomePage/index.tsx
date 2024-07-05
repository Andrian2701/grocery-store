import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Categories, Hero, PromotionalCard } from "../../components";
import { SearchItems } from "../../containers";
import { cards } from "../../components/PromotionalCard/cards";

export const HomePage = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap="2.5rem"
        marginTop={10}
        padding={{
          xs: "0 16px 48px 16px",
          sm: "0 24px 48px 24px",
          md: "0 48px 48px 48px",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap="2rem"
        >
          <SearchItems />
          <Hero />
        </Box>
        <Categories title="Top Categories" />
        <Outlet />
        <Box flexGrow={2}>
          <Grid container spacing={2}>
            {cards.map((card) => (
              <PromotionalCard key={card.title} card={card} />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
