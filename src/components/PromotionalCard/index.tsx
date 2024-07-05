import { Box, Grid, Typography } from "@mui/material";
import { Card } from "./cards";
import { theme } from "../../theme";

type PromotionalCardProps = {
  card: Card;
};

export const PromotionalCard = ({ card }: PromotionalCardProps) => {
  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        display="flex"
        alignItems="center"
        gap="1rem"
        width="20rem"
      >
        <Box>
          <card.icon size="2rem" color={theme.palette.primary.main} />
        </Box>
        <Box>
          <Typography variant="h4" fontSize={16}>
            {card.title}
          </Typography>
          <Typography variant="subtitle1" fontSize={13.5}>
            {card.desc}
          </Typography>
        </Box>
      </Grid>
    </>
  );
};
