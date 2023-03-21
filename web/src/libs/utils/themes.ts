// import { useColorModeValue } from "@chakra-ui/react";

// export const ColorIndex = () => {
//   const toggleTextColor = useColorModeValue("gray.800", "white");
//   const toggleBgColor = useColorModeValue("gray.50", "gray.800");
//   const toggleBorderColor = useColorModeValue("gray.200", "gray.900");

//   const toggleSubNavHoverColor = useColorModeValue("teal.50", "teal.900");
//   const subNavTextColor = "green.400";
// };

export const lightTextColor = "gray.800"
export const lightBgColor = "gray.50"
export const lightBorderColor = "gray.200"

export const darkTextColor = "white"
export const darkBgColor = "gray.800"
export const darkBorderColor = "gray.900"

import { theme, useColorModeValue } from "@chakra-ui/react"

export const themeColor = {
  bg: {
    main: {
      light: "gray.200",
      dark: "gray.800",
    },
    sub: {
      light: "gray.100",
      dark: "gray.700",
    },
  },
  text: {
    light: "gray.900",
    dark: "white",
  },
  border: {
    light: "gray.900",
    dark: "gray.200",
  },
  hover: {
    bg: {
      light: "gray.200",
      dark: "gray.600",
    },
    text: {
      light: "gray.500",
      dark: "gray.200",
    },
  },
  accent: {
    main: {
      light: "teal.50",
      dark: "teal.900",
    },
    sub: "green.400",
  },
}

export const ToggleTheme = () => {
  const toggleMainBgColor = useColorModeValue(themeColor.bg.main.light, themeColor.bg.main.dark)
  const toggleSubBgColor = useColorModeValue(themeColor.bg.sub.light, themeColor.bg.sub.dark)
  const toggleTextColor = useColorModeValue(themeColor.text.light, themeColor.text.dark)
  const toggleBorderColor = useColorModeValue(themeColor.border.light, themeColor.border.dark)
  const toggleHoverBgColor = useColorModeValue(themeColor.hover.bg.light, themeColor.hover.bg.dark)
  const toggleHoverTextColor = useColorModeValue(
    themeColor.hover.text.light,
    themeColor.hover.text.dark
  )
  const toggleMainAccentColor = useColorModeValue(
    themeColor.accent.main.light,
    themeColor.accent.main.dark
  )
  const subAccentColor = themeColor.accent.sub

  return {
    toggleMainBgColor,
    toggleSubBgColor,
    toggleTextColor,
    toggleBorderColor,
    toggleHoverBgColor,
    toggleHoverTextColor,
    toggleMainAccentColor,
    subAccentColor,
  }
}
