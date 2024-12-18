'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.dark};
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const Logo = styled(motion.div)`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`

const NavItem = styled.li`
  margin-left: 1rem;
`

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          EcoViz
        </Logo>
        <NavLinks>
          <NavItem>
            <NavLink to="about" smooth={true} duration={500}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="features" smooth={true} duration={500}>Features</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="quiz" smooth={true} duration={500}>Eco Quiz</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
          </NavItem>
        </NavLinks>
      </Nav>
    </StyledHeader>
  )
}

export default Header

