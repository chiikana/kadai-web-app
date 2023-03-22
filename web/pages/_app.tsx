import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { Dispatch, useState } from "react"
import React from "react"
import { AuthProvider } from "../src/hooks/context/AuthContext"
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react"
import { ScrollProvider } from "@/hooks/context/ScrollContext"

export const AppContext = React.createContext(
  {} as {
    isSign: boolean
    onSign: Dispatch<React.SetStateAction<boolean>>
  }
)

// export const ScrollContext = React.createContext(
//   {} as {
//     isScrolled: boolean
//     setScrolled: Dispatch<React.SetStateAction<boolean>>
//   }
// )

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

function MyApp({ Component, pageProps }: AppProps<{ initialSession: Session }>) {
  const [isSign, onSign] = useState(false)
  const [isScrolled, setScrolled] = useState(false)
  const [choice, setChoice] = useState(0)
  const [userName, setUserName] = useState("")
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <AuthProvider>
        <UserNameContext.Provider value={{ userName, setUserName }}>
          <ChoiceSosialContext.Provider value={{ choice, setChoice }}>
            {/* <ScrollContext.Provider value={{ isScrolled, setScrolled }}> */}
            <AppContext.Provider value={{ isSign, onSign }}>
              <ChakraProvider>
                <ScrollProvider>
                  <Component {...pageProps} />
                </ScrollProvider>
              </ChakraProvider>
            </AppContext.Provider>
            {/* </ScrollContext.Provider> */}
          </ChoiceSosialContext.Provider>
        </UserNameContext.Provider>
      </AuthProvider>
    </SessionContextProvider>
  )
}

export default MyApp
