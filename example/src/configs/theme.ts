import {
  extendTheme,
  theme as themeChakra,
} from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  gray: {
    50: '#f0f0fc',
    100: '#d4d6e0',
    200: '#b9bac6',
    300: '#9d9eae',
    400: '#818396',
    500: '#67697c',
    600: '#505261',
    700: '#393a46',
    800: '#21232c',
    900: '#070c15',
  },
  primary: {
    50: '#fffbdb',
    100: '#fef4ae',
    200: '#fcec80',
    300: '#fbe54f',
    400: '#fadd1f',
    500: '#e0c405',
    600: '#ae9800',
    700: '#7c6d00',
    800: '#4b4100',
    900: '#1b1600',
  },
  secondary: {
    50: '#f8f1f0',
    100: '#d9d9d9',
    200: '#bfbfbf',
    300: '#a6a6a6',
    400: '#8c8c8c',
    500: '#737373',
    600: '#595959',
    700: '#404040',
    800: '#262626',
    900: '#120b0c',
  },
}
const theme = extendTheme({
  shadows: {
    ...themeChakra.shadows,
    outline: 'none',
  },
  fonts: {
    body: '"Nunito", sans-serif',
    heading: '"Nunito", sans-serif',
  },
  fontSizes: {
    ...themeChakra.fontSizes,
    md: '14px',
  },
  colors,
})

export default theme
