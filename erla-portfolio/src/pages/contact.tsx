import Layout from '../components/Layout';
import { ImageTextCard } from '../components/ImageTextCard'; // Make sure the path is correct
import styled from 'styled-components';

export default function Contact() {
    return (
        <Layout>
            <Title>Contact Me</Title>
            <ImageTextCard
                title="Get in Touch"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque."
                imgSrc="/path-to-contact-image.jpg" // Replace with the path to your image
                imagePos="down"
            />
            {/* You can add a contact form or other content here */}
        </Layout>
    )
}

export const Title = styled.h1`
  color: #333;
  text-align: center;
`;
