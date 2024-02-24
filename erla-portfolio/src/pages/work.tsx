import Layout from '../components/Layout';
import styled from 'styled-components';
import FixedNavigation from '../components/FixedNavigation';
import { ImageTextCard } from '@/components/ImageTextCard';


export default function Work() {
    const text1 = `
    This project was about how will my memories from the season 2021 be in 40 years.
Short summary of the project was making a piece based on memories. I started by doing a mind 
map and an analysis of myself as I immediately knew that my project would be personal. The project is 
about changes in myself and self growth. This work is a three-dimensional work in which a great deal of personal intention takes place.
 Tearing the meterial down was a good outlet for my feelings. When I get older and look back, I will always remember these times that I am experiencing today.
  Two years ago I couldn't see anything around me and felt like I would never get out of the situation I was in. I felt like everything was collapsing around me 
  as seen in my obsession with the building which I also associate with my interest in architecture. I decided to also work with wire as I see myself slowly standing up on my own two feet.
    `;


    const text2 = `From my perspective Ugly art can be something that is just nonsense, something that doesn't fit or fit into the environment. I think ugly art can also be colors that don't match in a work and something that doesn't make sense to people. I think ugly art can be works that are dirty, scary, unattractive, or something that has no thought or creativity put into it. Beautiful art can be something that immediately catches your attention, something that reminds you of something beautiful around you, like a beautiful environment, beautiful colors or light. For me, beautiful art can be colors that fit together and especially into the environment. Beautiful art can be an idea that comes from a person and the person conveys it in a neat way. Beautiful and ugly art can be very personal in my opinion, maybe I think something is beautiful that you think is ugly or vice versa. Beauty to me can be something I only see in a dream, something that is evident in a soothing, bright way. When I think of beauty, I think of something that illuminates the environment, something that you immediately notice and are puzzled by at first glance. Beauty to me is something I want to have or have close to me, whether it's an object, art, work or person. Something that warms me and makes me feel good and not feel bad when I look at it.`;


const text3 = `The item i decided to use for this project is a vase that has been in storage for a long time without use. The vase is transparent and made of glass. I was thinking a lot about how I could give this it a new role. I first wanted to change the look, color and texture, but it wasn't exactly a new purpose. From that, I started wanting to make a lamp or a light, so the vase would become a lamp.  None of these ideas of mine appealed directly to me and made me perfectly happy. I sat and turned the vase in many ways and ended up getting an idea when I turned it upside down. I envisioned a lookout tower that would be consistent for the shape of the vase. This observation tower would also be a building and you could walk in a circle around the top floor. I would like to learn how to make interior spaces functional, safe and beautiful for buildings and for the user to enjoy himself as much as possible. 
I think views are very important when you enter buildings or spaces, whether they are high or low. If the view around you is beautiful, I think it makes the interior space much more beautiful. When you have a beautiful overview of the environment around you, you feel good and it is important to feel good in your environment. A view gives you so much, sunset, sunset, natural beauty, glory of colors, landscape and so much more.
`


    return (
        <>
            <Layout>

                <FixedNavigation />
                <main>
                    <Section id="personal-and-conceptual">
                        <Heading>Personal and Conceptual Projects</Heading>

                        <ImageTextCard imagePos='down' imgSrc='/picture1.jpg' text={text1} title='Standing Up on My Own Two Feet'></ImageTextCard>
                        <HeadingThree>Beautiful and ugly art - Project with paper, making it ugly and beautiful</HeadingThree>
                        <Paragraph>${text2}</Paragraph>
                        <ImageGridTwoByTwo>
                          <GridImage src="/picture2.jpg" alt="Picture 2" />
                          <GridImage src="/picture3.jpg" alt="Picture 3" />
                        </ImageGridTwoByTwo>
                        <HeadingThree>An Old Thing Gets a New Life</HeadingThree>
                        <Paragraph>${text3}</Paragraph>
                        <ImageGridTwoByTwo>
                          <GridImage src="/picture4.jpg"></GridImage>
                          <GridImage src="/picture5.png"></GridImage>
                        </ImageGridTwoByTwo>


                    </Section>

                    <Section id="upcycling-and-sustainability">
                        <Heading>Upcycling and Sustainability</Heading>
                        <h3>Upcycling Jeans to a Bag</h3>
                        <h3>Handbag Knitted Out of Old Thrifted Jeans</h3>
                        <h3>My 23rd Birthday Outfit from Old Jeans and Thrifted Dress</h3>
                    </Section>

                    <Section id="spatial-and-dimensional">
                        <Heading>Spatial and Dimensional Explorations</Heading>
                        <h3>My First Teledimensional Projects</h3>
                        <h3>The Honey Chair</h3>
                        <h3>My Bedroom Drawing</h3>
                        <h3>My School Hall</h3>
                        <h3>From 2D to 3D - Lines from the Palm of Your Hand</h3>
                        <h3>GÍOMETRIA</h3>



                    </Section>

                    <Section id="art-and-technology">
                        <Heading>Art and Technology</Heading>
                        <h3>My First Laser Project</h3>
                        <h3>RGB Photos</h3>
                        <h3>Final Project with Changes</h3>
                    </Section>

                    <Section id="traditional-and-digital-artworks">
                        <Heading>Traditional and Digital Artworks</Heading>
                        <h3>My First Painting</h3>
                        <h3>Dress Colors</h3>
                        <h3>Machines into Figures Sketches</h3>
                        <h3>Negative Space</h3>
                        <h3>Blind Sketches</h3>
                        <h3>Playing with Lines and Forms</h3>
                        <h3>Figure Drawings</h3>
                        <h3>Face Drawings</h3>
                    </Section>

                    <Section id="personal-achievements-and-media">
                        <Heading>Personal Achievements and Media</Heading>
                        <h3>Me in the Newspaper 10-Year-Old for Knitting Cozy Shoes</h3>
                        <h3>Video Links</h3>
                    </Section>

                </main>
            </Layout >

        </>
    )
}

const Section = styled.section`
  padding: 20px;
  margin-top: 60px; // Adjust based on the height of your FixedNavigation to avoid overlap
  background-color: var(--tile-start-rgb); // Ensure your globals.css is imported in your _app.tsx
`;

export const Title = styled.h1`
  color: #333;
  text-align: center;
`;


// Grid for 6 images (3x3)
export const ImageGridThreeByThree = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 500px;
  margin: 2rem auto;
`;

// Grid for 4 images (2x2)
export const ImageGridTwoByTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 500px;
  margin: 2rem auto;
`;

// Image component for grids
export const GridImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
`;

export const HeadingThree = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.5;
  margin: 1rem auto;
  max-width: 800px; // Adjust the width as necessary
  text-align: justify;
`;


export const Heading = styled.h2`
    color: #333;
    text-align: center;
    margin-bottom: 1rem;
`;
