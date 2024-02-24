import Link from 'next/link';
import styled from 'styled-components';



const Header = () => (

  <Nav>
    <Link href="/" passHref><StyledLink>Home</StyledLink></Link>
    <Link href="/about" passHref><StyledLink>About</StyledLink></Link>
    <Link href="/work" passHref><StyledLink>Work</StyledLink></Link>
    <Link href="/contact" passHref><StyledLink>Contact</StyledLink></Link>
  </Nav>
);

export default Header;


export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.headerText};
  
`;

// Adjusted StyledLink to be a div or another appropriate element if necessary
export const StyledLink = styled.a`
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
    height: 2px; // Thickness of the underline
    display: block;
    margin-top: 5px; // Distance from text to underline
    right: 0;
    background: white;
    transition: width 0.3s ease; // Smooth transition for the underline width
    -webkit-transition: width 0.3s ease;
    -moz-transition: width 0.3s ease;
    -o-transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%; // Full width on hover
    left: 0;
    background: white;
  }
`;
