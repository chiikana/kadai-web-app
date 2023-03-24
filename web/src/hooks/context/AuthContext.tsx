import { ReactNode, createContext, useState, useContext, useEffect } from "react"
// import { User } from "src/types/user"
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import type { User } from "firebase/auth";
import { useRouter } from "next/router"
// import { app } from "../../libs/utils/firebase/init";
import { Session, User } from "@supabase/supabase-js"
import { supabase } from "@/libs/utils/supabaseClient"
import useAuthUser from "../useAuthUser"

// export type UserType = User | null
export type UserType = {
  user: User | null | undefined
  userId: string
  isLoading: boolean | undefined
  token: undefined
  // profileId: string | undefined
}

export type AuthContextProps = {
  userData: UserType
}

export type AuthProps = {
  children: ReactNode
}

const AuthContext = createContext<Partial<AuthContextProps>>({})

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: AuthProps) => {
  // const [user, setUser] = useState<UserType>(null)
  // const isAvailableForViewing =
  //   router.pathname === "/about" ||
  //   router.pathname === "/login" ||
  //   router.pathname === "/signup";
  const userData = useAuthUser()
  const value = {
    userData,
  }

  //   useEffect(() => {
  //     const authStateChanged = onAuthStateChanged(auth, async (user) => {
  //       setUser(user);
  //       // !user && !isAvailableForViewing && (await router.push("/login"));
  //     });
  //     return () => {
  //       authStateChanged();
  //     };
  //   });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
