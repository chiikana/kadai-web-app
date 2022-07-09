import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import { Dispatch, useState } from "react";
import React from "react";
import { AuthProvider } from "../src/context/AuthContext";

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
    onSign: Dispatch<React.SetStateAction<boolean>>;
  }
);

export const ScrollContext = React.createContext(
  {} as {
    isScrolled: boolean;
    onScrolled: Dispatch<React.SetStateAction<boolean>>;
  }
);

export const ChoiceSosialContext = React.createContext(
  {} as {
    isChoice: number;
    onChoice: Dispatch<React.SetStateAction<number>>;
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  const [isSign, onSign] = useState(false);
  const [isScrolled, onScrolled] = useState(false);
  const [isChoice, onChoice] = useState(0);

  return (
    <AuthProvider>
      <ChoiceSosialContext.Provider value={{ isChoice, onChoice }}>
        <ScrollContext.Provider value={{ isScrolled, onScrolled }}>
          <AppContext.Provider value={{ isSign, onSign }}>
            <ChakraProvider theme={theme}>
              <Component {...pageProps} />
            </ChakraProvider>
          </AppContext.Provider>
        </ScrollContext.Provider>
      </ChoiceSosialContext.Provider>
    </AuthProvider>
  );
}

export default MyApp;
