import "../styles/globals.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
