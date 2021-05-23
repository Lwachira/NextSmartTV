import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import "../styles/globals.css";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

const overrides = {
  breakpoints,
};

const newTheme = extendTheme(overrides);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={newTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
