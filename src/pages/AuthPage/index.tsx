import { Box, Container, Divider, Typography, useTheme } from "@mui/material";
import { MainButton } from "../../components/MainButton";
import deliveryBoy from "../../assets/delivery-boy.png";
import googleIcon from "../../assets/google-icon.webp";
import facebookIcon from "../../assets/facebook-icon.png";

export const AuthPage = () => {
  const theme = useTheme();

  return (
    <Box bgcolor="#e5f3fd" minHeight="100vh" display="flex">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "25rem",
        }}
      >
        <Box width={350} height={350}>
          <Box
            component="img"
            src={deliveryBoy}
            alt="delivery boy"
            width="100%"
            height="100%"
          />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h1">
            Get the{" "}
            <Typography variant="h1" component="span" color="#fdb147">
              Fastest
            </Typography>
          </Typography>
          <Typography variant="h1">Delivery Groceries</Typography>
          <Typography variant="h1" color="#fa8570">
            at Home
          </Typography>
        </Box>
        <Box width="100%" display="flex" flexDirection="column" gap={2} m={3}>
          <MainButton title="Login" pathname="login" />
          <MainButton
            title="Register"
            pathname="register"
            additionalStyles={{
              backgroundColor: "#e5f3fd",
              color: "#33b864",
              border: `1px solid ${theme.palette.secondary.main}`,
              "&:hover": {
                backgroundColor: "rgba(46, 171, 92, 0.1)",
              },
            }}
          />
        </Box>
        <Box width="100%">
          <Divider
            sx={{
              fontSize: "0.8rem",
              color: theme.palette.primary.main,
              "&.MuiDivider-root": {
                "&::before": {
                  borderTop: "thin solid #4b3a26",
                },
                "&::after": {
                  borderTop: "thin solid #4b3a26",
                },
              },
            }}
          >
            Or login with
          </Divider>
        </Box>
        <Box display="flex" gap={1} m={2}>
          <Box
            component="img"
            src={googleIcon}
            alt="Login with Google"
            height={55}
            sx={{
              height: 55,
              cursor: "pointer",
            }}
          />
          <Box
            component="img"
            src={facebookIcon}
            alt="Login with Facebook"
            sx={{
              height: 55,
              cursor: "pointer",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};
