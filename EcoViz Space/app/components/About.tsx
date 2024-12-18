'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledAbout = styled.section`
  padding: 4rem 0;
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

const Content = styled(motion.p)`
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`

const About = () => {
  return (
    <StyledAbout id="about">
      <Title
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Our Mission
      </Title>
      <Content
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        EcoViz Space is dedicated to bringing awareness to the critical issue of global warming through innovative data visualization. Our app combines real-world climate data with an engaging space theme to help users understand the long-term impacts of climate change on our planet and beyond. By presenting complex information in an accessible and interactive format, we aim to inspire action and foster a deeper connection with our environment.
      </Content>
    </StyledAbout>
  )
}

export default About

