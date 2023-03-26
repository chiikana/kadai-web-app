import type { AppProps } from "next/app"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { Dispatch, useState } from "react"
import React from "react"
import { AuthProvider } from "../src/hooks/context/AuthContext"
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react"
import { ScrollProvider } from "@/hooks/context/ScrollContext"

export const ChoiceSosialContext = React.createContext(
  {} as {
    choice: number
    setChoice: Dispatch<React.SetStateAction<number>>
  }
)

export const UserNameContext = React.createContext(
  {} as {
    userName: string
    setUserName: Dispatch<React.SetStateAction<string>>
  }
)

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}
const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
}
const theme = extendTheme({
  colors,
  config,
})

function MyApp({ Component, pageProps }: AppProps<{ initialSession: Session }>) {
  const [choice, setChoice] = useState(0)
  const [userName, setUserName] = useState("")
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <ChakraProvider theme={theme}>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <AuthProvider>
          <UserNameContext.Provider value={{ userName, setUserName }}>
            <ChoiceSosialContext.Provider value={{ choice, setChoice }}>
              <ScrollProvider>
                <Component {...pageProps} />
              </ScrollProvider>
            </ChoiceSosialContext.Provider>
          </UserNameContext.Provider>
        </AuthProvider>
      </SessionContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
