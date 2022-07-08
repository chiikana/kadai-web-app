import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import { Dispatch, useState } from "react";
import React from "react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });

export const AppContext = React.createContext(
  {} as {
    isSign: boolean;
    setSign: Dispatch<React.SetStateAction<boolean>>;
  }
);

export const ScrollContext = React.createContext(
  {} as {
    isScrolled: boolean;
    setScrolled: Dispatch<React.SetStateAction<boolean>>;
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  const [isSign, setSign] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  return (
    <ScrollContext.Provider value={{ isScrolled, setScrolled }}>
      <AppContext.Provider value={{ isSign, setSign }}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </AppContext.Provider>
    </ScrollContext.Provider>
  );
}

export default MyApp;
