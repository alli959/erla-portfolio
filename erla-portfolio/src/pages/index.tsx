import Layout from '../components/Layout';
import styled from 'styled-components';
import Image from "next/legacy/image";
import Link from 'next/link';


// Ensure you have the correct path to your image file
import artistPhoto from '../../public/erla-working.png';
import React from 'react';


export default function Index() {
  const indexText = `Hey there! Welcome to my fashion playground where old jeans transform into trendy bags and overlooked vases become eye-catching watchtowers. My art dances between "ugly" and "beautiful," creating pieces and places that resonate. It's all about sustainable chic and meaningful creation. Most of my projects are recent, but I'm just getting started. Take a look at my latest sketches, upcycled treasures, and designs that narrate my story as I gear up for an exciting future in fashion.`
  const lazyRoot = React.useRef(null)

  return (
    <Layout>
      <HeroSection>
        <ImageContainer>
          <StyledImage
            src='/erla-working.png'
            alt="Artist at work"
            layout="fill"
            objectFit="cover"
            priority />
        </ImageContainer>
        <TextContainer>
          <Title>Welcome to My Fashion Portfolio</Title>
          <BioText>
            {indexText}
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
 ${props => props.theme.paragraph}
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
