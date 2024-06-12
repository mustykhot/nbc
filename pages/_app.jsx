import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../styles/navbar.scss";
import "../styles/dropdownwrapper.scss";
import "../styles/globals.scss";

import "../styles/footer.scss";
import "../styles/faqpage.scss";
import "../styles/headersection.scss";

import "../styles/404.scss";
import "../styles/emptyresponse.scss";
import "../styles/preloader.scss";
import "../styles/modal.scss";
import "../styles/blackfriday.scss";
import "../styles/marketplace.scss";
import "../styles/marketpagination.scss";
import "../styles/inputstyle.scss";
import "../styles/uploadFile.scss";
import "../styles/optinform.scss";

import ScrollToTop from "Components/scrollToTop";
import Pixel from "Components/Pixel";
import Head from "next/head";
const theme = createTheme({
  palette: {
    primary: {
      main: "#009444",
      contrastText: "white",
    },
    secondary: { main: "#ffb60a" },
    blue100: { main: "#0267ff" },
    success: { main: "#39b54a" },
    white: {
      main: "#ffffff",
      contrastText: "#161616",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "capitalize",
          padding: "0.6rem 1.3rem",
          boxShadow: "none",
          "&:disabled": {
            opacity: 0.6,
            cursor: "not-allowed",
          },
        },
      },
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <div className="main_container">
      <Pixel name="FACEBOOK_PIXEL_1" />

      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
