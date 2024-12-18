'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Globe, Clock, Stars, Database } from 'lucide-react'

const StyledFeatures = styled.section`
  padding: 4rem 0;
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
`

const Feature = styled(motion.div)`
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-10px);
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.secondary};
  }
`

const FeatureTitle = styled.h3`
  font-family: 'Orbitron', sans-serif;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`

const FeatureIcon = styled(motion.div)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`

const features = [
  {
    title: 'Interactive Globe',
    description: 'Explore temperature changes across the Earth with our 3D globe visualization.',
    icon: Globe,
  },
  {
    title: 'Time Travel',
    description: 'View past climate data and future projections to see the evolution of global warming.',
    icon: Clock,
  },
  {
    title: 'Cosmic Perspective',
    description: "Understand Earth's climate in the context of our solar system and beyond.",
    icon: Stars,
  },
  {
    title: 'Data-Driven Insights',
    description: 'Access comprehensive climate data from reliable scientific sources.',
    icon: Database,
  },
]

const Features = () => {
  return (
    <StyledFeatures id="features">
      <Title
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        App Features
      </Title>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <Feature
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FeatureIcon
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <feature.icon size={48} />
            </FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <p>{feature.description}</p>
          </Feature>
        ))}
      </FeaturesGrid>
    </StyledFeatures>
  )
}

export default Features

