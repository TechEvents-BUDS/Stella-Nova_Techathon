'use client'

import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedEarth from './AnimatedEarth'

const StyledHero = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
`

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
  }
`

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.2rem;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

const Button = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  border-radius: 5px;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: 2px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.primary};
  }
`

const FactTicker = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  text-align: center;
`

const ecoFacts = [
  "Did you know? The Earth's average temperature has increased by 1.1°C since the pre-industrial era.",
  "Fun fact: Renewable energy sources now account for over 26% of global electricity generation.",
  "Eco tip: Planting trees can help absorb CO2 and mitigate climate change.",
  "Climate alert: Arctic sea ice is declining at a rate of 13% per decade.",
  "Green energy fact: Solar panel efficiency has improved from 6% to over 40% in the last few decades.",
]

const Hero = () => {
  const [currentFact, setCurrentFact] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % ecoFacts.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <StyledHero>
      <AnimatedEarth />
      <HeroContent>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          EcoViz: Global Warming Visualizer
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore the impact of climate change through an immersive, space-themed experience. Uncover insights about our planet's future with cutting-edge data visualization.
        </Subtitle>
        <ButtonContainer>
          <Button
            href="#"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visualize Your Data
          </Button>
          <Button
            href="#"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Predict Your Data
          </Button>
        </ButtonContainer>
      </HeroContent>
      <AnimatePresence mode="wait">
        <FactTicker
          key={currentFact}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {ecoFacts[currentFact]}
        </FactTicker>
      </AnimatePresence>
    </StyledHero>
  )
}

export default Hero

