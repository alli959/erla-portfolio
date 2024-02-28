import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface NavProps {
  top: number;
}

const Nav = styled.nav<{ $top: number }>`
  position: fixed;
  top: ${({ $top }) => $top}px;
  left: 0; // Ensure the navigation bar starts from the very left
  right: 0; // Ensure the navigation bar stretches to the very right
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000; // High z-index to ensure it's above other content
  transition: top 0.3s;
  display: flex; // Use flex to center the navigation list
  justify-content: center; // Center the navigation list
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center; // Align items in the center vertically
`;

const NavItem = styled.li`
  padding: 10px 20px; // Add padding for clickable area
`;

const NavLink = styled.div`
  color: black;
  text-decoration: none;
  position: relative; // Position relative for the underline effect
    text-decoration: none !important; // Force no text decoration

  &:after {
    content: '';
    position: absolute;
    bottom: -5px; // Position the line below the text
    left: 0;
    right: 0;
    height: 2px;
    background: transparent;
    transition: background-color 0.3s;
      text-decoration: none !important; // Force no text decoration
  }

  &:hover::after {
    background: black; // Underline effect on hover
      text-decoration: none !important; // Force no text decoration

  }
`;

const FixedNavigation = () => {
  const [topPosition, setTopPosition] = useState(60); // Initial top position

  useEffect(() => {
    const handleScroll = () => {
      const shouldStick = window.scrollY > 60;
      setTopPosition(shouldStick ? 0 : 60);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav $top={topPosition}>
      <NavList>
        <NavItem><Link href="#art-and-technology" passHref><NavLink>Art & Technology</NavLink></Link></NavItem>
        <NavItem><Link href="#personal-and-conceptual" passHref><NavLink>Personal & Conceptual</NavLink></Link></NavItem>
        <NavItem><Link href="#upcycling-and-sustainability" passHref><NavLink>Upcycling & Sustainability</NavLink></Link></NavItem>
        <NavItem><Link href="#my-first-teledimensional-projects" passHref><NavLink>My First Teledimensional Projects</NavLink></Link></NavItem>
        <NavItem><Link href="#traditional-and-digital-artworks" passHref><NavLink>Traditional & Digital Artworks</NavLink></Link></NavItem>
        <NavItem><Link href="#personal-achievements-and-media" passHref><NavLink>Personal Achievements & Media</NavLink></Link></NavItem>
      </NavList>
    </Nav>
  );
};

export default FixedNavigation;





