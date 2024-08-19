import { Box, Typography } from "@mui/material";
import Home from "./components/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#aa6f73",
      },
      background: {
        default: "white",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="#aa6f73"
          sx={{
            py: 2,
            textTransform: "uppercase",
            fontWeight: "bold",
            fontStyle: "oblique",
          }}
        >
          <Typography variant="h4" color="white">
            I'll Decide
          </Typography>
        </Box>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
