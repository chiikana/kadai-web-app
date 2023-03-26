import { createContext, ReactNode, useContext, useEffect, useState } from "react"

export type ScrollContextProps = {
  isScrolled: boolean
}

export type ScrollProps = {
  children: ReactNode
}

const ScrollContext = createContext<Partial<ScrollContextProps>>({})

export const useScrollContext = () => {
  return useContext(ScrollContext)
}

export const ScrollProvider = ({ children }: ScrollProps) => {
  const [isScrolled, setScrolled] = useState<boolean>()
  const toggleVisibility = () => {
    window.scrollY > 0 ? setScrolled(true) : setScrolled(false)
  }
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  })

  const value = {
    isScrolled,
  }

  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
}
