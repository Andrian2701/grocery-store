import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import { GoogleSignIn } from "../../containers";
import deliveryBoy from "../../assets/delivery-boy.png";
import facebookIcon from "../../assets/icons/facebook-icon.png";

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
          width: { xs: "100%", sm: "25rem" },
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
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={1.5}
          m={3}
        >
          <Button component={Link} to="/login">
            Login
          </Button>
          <Button
            component={Link}
            to="/register"
            sx={{
              backgroundColor: "#e5f3fd",
              color: "#33b864",
              border: `1px solid ${theme.palette.primary.main}`,
              "&:hover": {
                backgroundColor: "rgba(46, 171, 92, 0.1)",
              },
            }}
          >
            Register
          </Button>
        </Box>
        <Box width="100%">
          <Divider
            sx={{
              fontSize: "0.8rem",
              color: theme.palette.secondary.main,
            }}
          >
            Or login with
          </Divider>
        </Box>
        <Box display="flex" gap={1} m={2}>
          <GoogleSignIn />
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
