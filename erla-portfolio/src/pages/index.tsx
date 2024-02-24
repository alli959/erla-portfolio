import Layout from '../components/Layout';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';


// Ensure you have the correct path to your image file
import artistPhoto from '../../public/erla-working.png';


export default function Index() {
  return (
    <Layout>
      <HeroSection>
        <ImageContainer>
          <StyledImage
            src='/erla-working.png'
            alt="Artist at work"
            layout="fill"
            objectFit="cover"
          />
        </ImageContainer>
        <TextContainer>
          <Title>Welcome to My Fashion Portfolio</Title>
          <BioText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </BioText>
          <ButtonContainer>
            <LinkButton href="/about">About Me</LinkButton>
            <LinkButton href="/work">My Work</LinkButton>
            <LinkButton href="/contact">Contact</LinkButton>
          </ButtonContainer>
        </TextContainer>
      </HeroSection>
    </Layout>
  )
}

const HeroSection = styled.section`
  position: relative;
  text-align: center;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 60vh; // Adjust height as needed
  width: 100%;
`;

const StyledImage = styled(Image)`
  border-radius: 12px; // Optional: if you want rounded corners
`;

const TextContainer = styled.div`
  margin-top: -20px; // Overlap the image slightly
  background: #fff;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5em; // Adjust size as necessary
  margin-bottom: 20px;
`;

const BioText = styled.p`
  color: #555;
  font-size: 1.1em; // Adjust size as necessary
  margin-bottom: 30px;
  width: 60%;
  margin: 0 auto; // Center the text
  line-height: 1.6; // Adjust line height as necessary
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; // Adjust the gap between buttons as necessary
  margin-bottom: 30px;
`;

// Assuming you have the LinkButton styled component defined somewhere
const LinkButton = styled.a`
  background: #0070f3; // Example primary color, ensure it contrasts with the text color
  color: white; // Text color that contrasts with the background
  text-decoration: none;
  padding: 10px 20px;
  border-radius: var(--border-radius); // Ensure this variable is defined in your globals.css or theme
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background: #0050a3; // Darker shade for the hover state
    transform: translateY(-2px);
  }
`;


// Remember to adjust your paths to images and links based on your project structure
