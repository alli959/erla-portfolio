import Layout from '../components/Layout';
import styled from 'styled-components';
import FixedNavigation from '../components/FixedNavigation';


export default function Work() {
    return (
        <>
            <Layout>

                <FixedNavigation />
                <main>
                    <Section id="personal-and-conceptual">
                        <h2>Personal and Conceptual Projects</h2>
                        <h3>Standing Up on My Own Two Feet</h3>
                        <h3>Beautiful and Ugly Art</h3>
                        <h3>An Old Thing Gets a New Life</h3>

                    </Section>

                    <Section id="upcycling-and-sustainability">
                        <h2>Upcycling and Sustainability</h2>
                        <h3>Upcycling Jeans to a Bag</h3>
                        <h3>Handbag Knitted Out of Old Thrifted Jeans</h3>
                        <h3>My 23rd Birthday Outfit from Old Jeans and Thrifted Dress</h3>
                    </Section>

                    <Section id="spatial-and-dimensional">
                        <h2>Spatial and Dimensional Explorations</h2>
                        <h3>My First Teledimensional Projects</h3>
                        <h3>The Honey Chair</h3>
                        <h3>My Bedroom Drawing</h3>
                        <h3>My School Hall</h3>
                        <h3>From 2D to 3D - Lines from the Palm of Your Hand</h3>
                        <h3>GÍOMETRIA</h3>



                    </Section>

                    <Section id="art-and-technology">
                        <h2>Art and Technology</h2>
                        <h3>My First Laser Project</h3>
                        <h3>RGB Photos</h3>
                        <h3>Final Project with Changes</h3>
                    </Section>

                    <Section id="traditional-and-digital-artworks">
                        <h2>Traditional and Digital Artworks</h2>
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
                        <h2>Personal Achievements and Media</h2>
                        <h3>Me in the Newspaper 10-Year-Old for Knitting Cozy Shoes</h3>
                        <h3>Video Links</h3>
                    </Section>

                </main>
            </Layout>

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
