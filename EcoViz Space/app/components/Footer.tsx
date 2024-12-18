'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  padding: 2rem 0;
  margin-top: 2rem;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const FooterText = styled(motion.p)`
  margin-bottom: 0.5rem;
`

const Footer = () => {
  return (
    <StyledFooter id="contact">
      <FooterContent>
        <FooterText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          &copy; 2023 EcoViz Space. All rights reserved.
        </FooterText>
        <FooterText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Contact: info@ecovizspace.com
        </FooterText>
      </FooterContent>
    </StyledFooter>
  )
}

export default Footer

