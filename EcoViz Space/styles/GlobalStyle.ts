import { createGlobalStyle, keyframes } from 'styled-components'

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;700&family=Orbitron:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Exo 2', sans-serif;
    background: linear-gradient(-45deg, #0a2e38, #000000, #1a3c47, #0f2832);
    background-size: 400% 400%;
    animation: ${gradientAnimation} 15s ease infinite;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
  }

  h1, h2, h3 {
    font-family: 'Orbitron', sans-serif;
  }
`

export default GlobalStyle

