import { Box, Grid, Typography } from "@mui/material";
import { items } from "./items";
import { theme } from "../../../../theme";

export const PromotionalCards = () => {
  return (
    <>
      <Box flexGrow={2}>
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid
              key={item.title}
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
                <item.icon size="2rem" color={theme.palette.primary.main} />
              </Box>
              <Box>
                <Typography variant="h4" fontSize={16}>
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" fontSize={13.5}>
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
