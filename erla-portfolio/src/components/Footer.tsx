import styled from 'styled-components';



const Footer = () => (
    <FooterContainer>
        © {new Date().getFullYear()} Erla`s Portfolio. All rights reserved.
    </FooterContainer>
);

export default Footer;


export const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.footerBackground};
  color: ${({ theme }) => theme.colors.footerText};
`;
