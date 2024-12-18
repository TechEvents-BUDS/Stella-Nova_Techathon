'use client'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'
import theme from '../styles/theme'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Footer from './components/Footer'
import StyledComponentsRegistry from '../lib/registry'
import EcoQuiz from './components/EcoQuiz'

export default function Home() {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <main>
          <Hero />
          <About />
          <Features />
          <EcoQuiz />
        </main>
        <Footer />
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}

