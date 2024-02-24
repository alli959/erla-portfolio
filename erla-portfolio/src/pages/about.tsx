import Layout from '../components/Layout';
import { ImageTextCard } from '../components/ImageTextCard'; // Make sure the path is correct
import styled from 'styled-components';

export default function About() {
    return (
        <Layout>
            <Title>About Me</Title>
            <ImageTextCard
                title="My Story"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum."
                imgSrc="/path-to-about-image.jpg" // Replace with the path to your image
                imagePos="left"
            />
            {/* Add more about me content, biography, etc. here */}
        </Layout>
    )
}

export const Title = styled.h1`
  color: #333;
  text-align: center;
`;
