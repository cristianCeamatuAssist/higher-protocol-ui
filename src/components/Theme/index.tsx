import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#4401D4',
    white: '#E5E5E5',
    primaryBlack: '#112D3D',

    stateError: '#E94141',
    stateWarning: '#E9A641',
    stateSuccess: '#49C464',
    secondaryBlue: '#395264',
    secondaryBlueMedium: '#617B8E',
    secondaryMessyBlue: '#8CA6BA',
    secondaryLightBlue: '#B9D4E8',

    neutralDarkGrey: '#727279',
    neutralMediumGrey: '#D3D4D8',
    neutralRegularGrey: '#F0F1F3',
    neutralLightGrey: '#FAFAFA',
    neutralWhite: '#FFFFFF',

    success: '#49C364',
    warning: '#E9A641',
  },

  borders: {
    normal: '1px solid #D3D4D8',
  },

  fontWeight: {
    bold: 600,
    normal: 400,
  },

  fontFamily: {
    openSans: 'Open Sans',
  },

  typography: {
    small: '0.75rem',
    p: '0.875rem', // 14px
    h1: '1.5em',
    h2: '1.25em',
    h3: '1.1em',
  },

  breakpoints: {
    xs: '0',
    sm: '37.5em', // 600px
    md: '56.25em', // 900px
    lg: '75em', // 1200px
    xl: '96em', // 1536px
  },

  shadows: {
    normal: '0px 4px 3px rgba(0, 0, 0, 0.25)',
    light: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    intense: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  },
}

export const Theme = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
