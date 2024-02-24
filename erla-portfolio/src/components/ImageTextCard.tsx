import styled from 'styled-components';

interface ImageTextCardProps {
    title: string;
    text: string;
    imgSrc: string; // This should be the path to your image
}

const CardContainer = styled.div`
  margin: 2rem auto;
  width: 100%;
  max-width: 500px; // Adjust the width as necessary
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const CardContent = styled.div`
  padding: 1rem;
  text-align: center;
`;

const CardTitle = styled.h2`
  margin: 0.5rem 0;
  color: #333;
`;

const CardText = styled.p`
  color: #555;
`;

export const ImageTextCard = ({ title, text, imgSrc }: ImageTextCardProps) => (
    <CardContainer>
        <CardImage src={imgSrc} alt={title} />
        <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardText>{text}</CardText>
        </CardContent>
    </CardContainer>
);
