import { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';


type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
    <>
        <Header />
        <Main>{children}</Main>
        <Footer />
    </>
);

export default Layout;


export const Main = styled.main`
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.mainBackground};
    color: ${({ theme }) => theme.colors.text};
`;
