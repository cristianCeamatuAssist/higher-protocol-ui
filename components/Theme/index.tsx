import { ThemeProvider, DefaultTheme } from 'styled-components'

// Variables
const sizes = {
  sm: '1023px',
  md: '1200px',
  lg: '1350px',
}
const topNavHeight = '61px'
const fixedLayoutHeight = `calc(100vh - ${topNavHeight})`

// Theme props
const theme: DefaultTheme = {
  current: 'default',
  vars: {
    fontSizeBase: '15px',
    lineHeightBase: '1.5',
    livecallsNavHeight: '45px',
    queueNavHeight: '50px',
    queueTheadHeight: '49px',
    callActionsHeight: '223.16px',
    fixedLayoutHeight,
    topNavHeight,
  },

  devices: {
    tablet: `(min-width: ${sizes.sm})`,
    desktopSm: `(min-width: ${sizes.md})`,
    desktopLg: `(min-width: ${sizes.lg})`,
  },

  default: {
    colors: {
      white: '#fff',
      primary: '#2d9cdb',
      danger: '#eb5757',
      success: '#27ae60',
      secondary: '#5e72e4',
      whiteE5: '#e5e5e5',
      grey32: '#32325d',
      greyE4: '#e4e4e4',
      greyF3: '#f3f4fa',
      greyD2: '#d2d5e2',
      blue1C: '#1c5289',
      blue00: '#007bc0',
      blue6B: '#6bb2da',
      blueF0: '#f0f7fb',
      purple92: '#9298bb',
      creamFF: '#ff978a',
      creamF2: '#f2994a',
      green62: '#62b08f',
    },
  },
}

interface IProps {
  children: JSX.Element[] | JSX.Element
}

const Theme = ({ children }: IProps) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default Theme
