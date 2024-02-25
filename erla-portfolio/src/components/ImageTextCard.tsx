import styled from 'styled-components';

interface ImageTextCardProps {
  title: string;
  text: string;
  imgSrc: string;
  imagePos: "up" | "down" | "left" | "right"; // Assuming this is the custom prop you want to include
}

const CardContainer = styled.div<ImageTextCardProps>`
  margin: 2rem auto;
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: ${({ imagePos }) =>
    imagePos === 'left' || imagePos === 'right' ? 'row' : 'column'};
  ${({ imagePos }) => (imagePos === 'right' ? 'flex-direction: row-reverse;' : '')}
  ${({ imagePos }) => (imagePos === 'down' ? 'flex-direction: column-reverse;' : '')}
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

const CardTitle = styled.h3`
  margin: 0.5rem 0;
  color: #333;
`;

const CardText = styled.p`
  color: #555;
`;

export const ImageTextCard = ({ title, text, imgSrc, imagePos = 'up' }: ImageTextCardProps) => (
  <CardContainer title={title} text={text} imgSrc={imgSrc} imagePos={imagePos}>
    <CardImage src={imgSrc} alt={title} />
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardContent>
  </CardContainer>
);