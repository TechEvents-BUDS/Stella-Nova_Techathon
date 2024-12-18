'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'

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

const FloatingObject = styled(motion.div)`
  position: absolute;
  width: 10px;
  height: 10px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  opacity: 0.5;
`

const Hero = () => {
  return (
    <StyledHero>
      <HeroContent>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Global Warming Visualizer
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore the impact of climate change through an immersive, space-themed experience. Uncover insights about our planet's future with cutting-edge data visualization.
        </Subtitle>
        <Button
          href="#"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Launch App
        </Button>
      </HeroContent>
      {[...Array(20)].map((_, i) => (
        <FloatingObject
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </StyledHero>
  )
}

export default Hero

