import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>☰</Hamburger>
      <Menu isOpen={isOpen}>
        <Link href="/" passHref><StyledLink>Home</StyledLink></Link>
        <Link href="/about" passHref><StyledLink>About</StyledLink></Link>
        <Link href="/work" passHref><StyledLink>Work</StyledLink></Link>
        <Link href="/contact" passHref><StyledLink>Contact</StyledLink></Link>
      </Menu>
    </Nav>
  );
};

export default Header;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.headerText};
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Menu = styled.div<{ isOpen: boolean }>` // Add isOpen prop
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

export const StyledLink = styled.div`
  margin-right: 15px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.headerText};
  text-decoration: none;
  margin-left: 15px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: white;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
    background: white;
  }
`;
