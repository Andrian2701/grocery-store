import { Box, Divider, Typography, useTheme } from "@mui/material";
import { Navbar } from "..";
import { navItems } from "../navItems";
import { contacts, downloadItems, socialItems } from "./footerItems";

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row", md: "row" }}
        gap={{ xs: 4, sm: 4, md: 0 }}
        padding={{
          xs: "0 16px 16px 16px",
          sm: "0 24px 16px 24px",
          md: "0 48px 16px 48px",
        }}
      >
        <Box display="flex" flexDirection="column" flexGrow={1} gap={2}>
          <Typography variant="h4">Contacts</Typography>
          <Box display="flex" flexDirection="column" gap={2} width={185}>
            {contacts.map((item) => (
              <Typography
                key={item}
                variant="subtitle1"
                color={theme.palette.secondary.main}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "column", md: "row" }}
          justifyContent={{
            xs: "flex-start",
            sm: "flex-start",
            md: "space-between",
          }}
          gap={{ xs: 4, sm: 4, md: 0 }}
          flexGrow={2}
        >
          <Box display="flex" flexDirection="column" gap={2}>
            <Navbar navItems={navItems} />
          </Box>
          <Box display="flex" flexDirection="column" gap={4}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography variant="h4">Download App</Typography>
              <Box
                display="flex"
                alignItems="center"
                justifyContent={{
                  md: "center",
                }}
                gap={2}
              >
                {downloadItems.map((item) => (
                  <Box
                    key={item.title}
                    sx={{
                      width: 136,
                      height: 44,
                      bgcolor: "#e8e8e8",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      cursor: "pointer",
                      transitionDuration: "0.2s",
                    }}
                  >
                    <Box
                      component="img"
                      alt={item.alt}
                      src={item.icon}
                      width="12%"
                      height="40%"
                    />
                    <Typography variant="h4" fontSize={16}>
                      {item.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography variant="h4">Our Solcials</Typography>
              <Box display="flex" alignItems="center" gap={2}>
                {socialItems.map((item) => (
                  <Box
                    key={item.id}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid #e8e8e8",
                      borderRadius: 999,
                      width: 40,
                      height: 40,
                      fontSize: 16,
                      cursor: "pointer",
                      transitionDuration: "0.2s",
                      "&:hover": {
                        borderColor: theme.palette.secondary.main,
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        padding={{
          xs: "16px 16px 16px 16px",
          sm: "16px 24px 16px 24px",
          md: "16px 48px 16px 48px",
        }}
      >
        <Divider />
        <Typography variant="h4" color={theme.palette.secondary.light}>
          © 2024 Grocery-Store, All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};
