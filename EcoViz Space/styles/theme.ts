import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    background: 'radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%)',
    text: '#ffffff',
    primary: '#00ffff',
    secondary: '#ff00ff',
    dark: 'rgba(0, 0, 0, 0.7)',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
}

export default theme

