import Layout from '../components/Layout';
import styled from 'styled-components';
import FixedNavigation from '../components/FixedNavigation';
import { ImageTextCard } from '@/components/ImageTextCard';
import { Component } from 'react';
import Head from 'next/head';
import Script from 'next/script';

import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  .vp-placeholder.vp-placeholder-fadeout {
    margin-top: 0 !important;
  }
`;


export default function Work() {
  const personal_project_text = `
    The purpose of this project was to explore my memories of the 2021 season throughout a 40-year period. In a nutshell, the project involved creating a piece inspired by recollections. I knew right away that my project would be personal, so I began by creating a thought map and completing an analysis of myself. The project is about personal development and self-improvement. There is a lot of personal intention in this three-dimensional piece of art. I found that tearing the meterial down helped me to release my emotions. I will always remember these things I am going through now when I'm older and look back. I felt hopeless and unable to see my way out of the predicament I found myself in two years ago. I relate my infatuation with the structure with my feeling that everything was crumbling around me, as seen by my passion in architecture. I chose to work with wire as well because I could see myself eventually getting up on my own two feet.
    `;


  const beautiful_and_ugly_art_text = `In my opinion, absurd art can be anything that is out of place or doesn't blend in with the surroundings. In my opinion, unattractive art can also include things that are confusing to viewers and colours that don't go together. Ugly art, in my opinion, can include pieces that lack imagination or thoughtfulness or that are unpleasant, frightening, or disgusting.
Beautiful art can be something that draws your eye right away or that evokes memories of something lovely in your surroundings, such as a stunning setting, stunning colours, or stunning light. Colours that go well together and especially with their surroundings can make for excellent art, in my opinion. An concept that a person has and cleverly expresses can be considered beautiful art. I believe that what I find beautiful may not be what you find ugly, and vice versa. Beautiful and ugly art can be quite subjective. To me, beauty might be something that is obvious in a bright, calming way or something I can only see in dreams. When I think of beauty, I picture something that brightens the surrounding space, something that catches your eye right away and confounds you right away. Whether it's an object, piece of art, person, or something else entirely, beauty is something I aspire to possess or be around. Something that, when I look at it, cheers me up, makes me feel good, and keeps me from feeling awful.
`;


  const an_old_thing_gets_a_new_life_text = `I've chosen to utilise a vase that has been sitting in storage unopened for a while for this project. The vase is composed of glass and is translucent. I spent a lot of time considering how I could give this a new purpose. While it wasn't precisely a new purpose, my initial goal was to alter the appearance, colour, and texture. I sat and rotated the vase a number of ways until I turned it upside down and had an idea. My idea was for a watchtower that would maintain the vase's shape. Not only would this observation tower be a structure, but you could also stroll around its top floor in a circle. My goal is to get knowledge on creating interior spaces that are safe, elegant, and conducive to maximum user enjoyment for buildings. Whether a building or area is high or low, views are, in my opinion, quite significant. I believe an interior area is enhanced greatly by a lovely vista surrounding it. It's crucial to feel comfortable in your surroundings, and you feel good when you have a great perspective on your surroundings. A view offers a plethora of benefits, including breathtaking sunsets, unspoiled landscapes, vibrant colours, and much more.
`

  const upcycling_jeans_to_a_bag_text = `This project was so much joy for me because it went in the exact direction that interests me the most—reviving and revitalising something.  I spent a large deal of time browsing Pinterest before beginning this project in search of ideas and projects I wanted to complete. After that, I discovered supplies I wanted to utilise at home. I made the decision to create a bag I saw on Pinterest in my own unique way since I thought it would look awesome. I made the bag using the pattern I got from the Etsy website. I carefully studied the instructions, printed out the pattern, and glued it together. I went to a thrift store and got some pretty lovely white pants to utilise because I had some brown pants in a closet that I had stopped wearing and I needed more pants to match. I thought that white and brown would go really well with the items I had and how these two pairs of pants would appear together as a whole.`;

  const giometria_text = `This project all started with learning about the Golden Ratio. The main prjoject took over after that, where we were to draw the gold pattern and use those shapes together with one spit to create some kind of structure or Architecture. We were not allowed to use more than this data to begin with. When the work was ready with the Golden profile and the spit, we took pictures of the work in colored lights. It was fun to see how the work changed after how the description was. After that, everything was free and we could do what we wanted with our work.`;


  const from_2d_to_3d_text_1 = `The process all started with drawing a stone, which I associated with my thoughts, not the apperance of the stone. The process then continued to blind drawings and practice with the pencil. We drew lines out of palms which was weird but fun to. After that we were supposed to look at our lines and visualize something. My sketch contained a lot of nature, a boat, and figures that I saw directly from the lines. We drew this sketch directly from the lines on a light board and then cut them out. We then took pictures with a mirror, black background and lightning.`;

  const from_2d_to_3d_text_2 = `I wanted to draw a different picture structure than the work itself was after the cut. I still wanted to keep all the figures and what I had done inside as well as add. My final image is actually nature on a rock that doesn't have much left, it is slowly collapsing. The cracks in the rock show the situation and the men on the rock and the sun are calling for help. Nature is slowly collapsing into the ground, which can be linked to climate issues. To wake up the world to start thinking about what it can do better in its affairs. I also connected my work to the stone where I talk about anxiety, and a deep place in my life. I also regularly feel anxiety related to climate issues which I consider a good connection to the stone.`;



  return (
    <>
      <Layout>

        <FixedNavigation />
        <main>
          <Section id="art-and-technology">
            <Heading>Art and Technology</Heading>
            <HeadingThree>GÍOMETRIA</HeadingThree>
            <Paragraph>{giometria_text}</Paragraph>
            <HeadingThree>RGB Photos</HeadingThree>
            <ImageGridTwoByTwo>
              <GridImage src="/rgb_photos_image_2.jpg"></GridImage>
            </ImageGridTwoByTwo>
            <ImageGridThreeByThree>
              <GridImage src="/rgb_photos_image_3.jpg"></GridImage>
              <GridImage src="/rgb_photos_image_4.jpg"></GridImage>
              <GridImage src="/rgb_photos_image_1.jpg"></GridImage>
            </ImageGridThreeByThree>
            <HeadingThree>My First Laser Project</HeadingThree>
            <ImageGridTwoByTwo>
              <GridImage src="/my_first_laser_project_image_1.jpg"></GridImage>
            </ImageGridTwoByTwo>
            <HeadingThree>Final Project with Changes</HeadingThree>
            <ImageGridThreeByThree>
              <GridImage src="/final_project_with_changes_image_4.jpg"></GridImage>
              <GridImage src="/final_project_with_changes_image_3.jpg"></GridImage>
              <GridImage></GridImage>
              <GridImage src="/final_project_with_changes_image_1.jpg"></GridImage>
              <GridImage src="/final_project_with_changes_image_2.jpg"></GridImage>
              <GridImage></GridImage>
              <GridImage src="/final_project_with_changes_image_5.jpg"></GridImage>
              <GridImage src="/final_project_with_changes_image_6.jpg"></GridImage>
              <GridImage></GridImage>
            </ImageGridThreeByThree>
          </Section>
          <Section id="personal-and-conceptual">
            <Heading>Personal and Conceptual Projects</Heading>
            <HeadingThree>Personal Project - Standing Up on My Own Two Feet</HeadingThree>
            <Paragraph>{personal_project_text}</Paragraph>
            <ImageGridOneByOne>
              <GridImage src="/personal_project_img_1.jpg"></GridImage>
            </ImageGridOneByOne>
            <HeadingThree>Beautiful and ugly art - Project with paper, making it ugly and beautiful</HeadingThree>
            <Paragraph>{beautiful_and_ugly_art_text}</Paragraph>
            <ImageGridTwoByTwo>
              <GridImage src="/beautiful_and_ugly_art_img_1.jpg" alt="Picture 2" />
              <GridImage src="/beautiful_and_ugly_art_img_2.jpg" alt="Picture 3" />
            </ImageGridTwoByTwo>
            <HeadingThree>An Old Thing Gets a New Life</HeadingThree>
            <Paragraph>{an_old_thing_gets_a_new_life_text}</Paragraph>
            <ImageGridTwoByTwo>
              <GridImage src="/an_old_thing_gets_a_new_life_img_1.jpg"></GridImage>
              <GridImage src="/an_old_thing_gets_a_new_life_img_2.png"></GridImage>
            </ImageGridTwoByTwo>


          </Section>

          <Section id="upcycling-and-sustainability">
            <Heading>Upcycling and Sustainability</Heading>
            <HeadingThree>Upcycling Jeans to a Bag</HeadingThree>
            <Paragraph>{upcycling_jeans_to_a_bag_text}</Paragraph>
            <ImageGridTwoByTwo>
              <GridImage src="/upcycling_jeans_to_a_bag_image_5.jpg"></GridImage>
            </ImageGridTwoByTwo>
            <ImageGridThreeByThree>
              <GridImage src="/upcycling_jeans_to_a_bag_image_1.jpg"></GridImage>
              <GridImage src="/upcycling_jeans_to_a_bag_image_2.jpg"></GridImage>
              <GridImage src="/upcycling_jeans_to_a_bag_image_3.jpg"></GridImage>
              <GridImage src="/upcycling_jeans_to_a_bag_image_4.jpg"></GridImage>
            </ImageGridThreeByThree>
            <HeadingThree>Handbag Knitted Out of Old Thrifted Jeans</HeadingThree>
            <ImageGridTwoByTwo>
              <GridImage src="/handbag_knitted_out_of_old_thirfted_jeans_image_1.jpg"></GridImage>
              <GridImage src="/handbag_knitted_out_of_old_thirfted_jeans_image_2.jpg"></GridImage>
            </ImageGridTwoByTwo>
            <HeadingThree>My 23rd Birthday Outfit from Old Jeans and Thrifted Dress</HeadingThree>
            <ImageGridTwoByTwo>
              <GridImage src="/my_23_birthday_outfit_image_1.jpg"></GridImage>
              <GridImage src="/my_23_birthday_outfit_image_2.jpg"></GridImage>
            </ImageGridTwoByTwo>
          </Section>

          <Section id="my-first-teledimensional-projects">
            <Heading>My First Teledimensional Projects</Heading>
            <HeadingThree>The Honey Chair</HeadingThree>
            <ImageGridThreeByThree>
              <GridImage></GridImage>
              <GridImage src="/the_honey_chair_image_1.png"></GridImage>
            </ImageGridThreeByThree>
            <HeadingThree>My Bedroom Drawing</HeadingThree>
            <ImageGridThreeByThree>
              <GridImage></GridImage>
              <GridImage src="/my_bedroom_drawing_image_1.png"></GridImage>
            </ImageGridThreeByThree>
            <HeadingThree>My School Hall</HeadingThree>
            <ImageGridThreeByThree>
              <GridImage></GridImage>
              <GridImage src="/my_school_hall_image_1.png"></GridImage>
            </ImageGridThreeByThree>
            <HeadingThree>Drawings and Forms</HeadingThree>
            <ImageGridTwoByTwo>
              <GridImage src="/drawings_and_forms_image_1.png"></GridImage>
              <GridImage src="/drawings_and_forms_image_2.png"></GridImage>
            </ImageGridTwoByTwo>
            <HeadingThree>From 2D to 3D</HeadingThree>
            <Paragraph>{from_2d_to_3d_text_1}</Paragraph>
            <ImageGridOneByOne>
              <GridImage src="/from-2d-to-3d-image-1-upscale.png"></GridImage>
            </ImageGridOneByOne>
            <ImageGridTwoByTwo>
              <GridImage src="/from_2d_to_3d_image_1.jpg"></GridImage>
              <GridImage src="/from_2d_to_3d_image_2.jpg"></GridImage>
              <GridImage src="/from_2d_to_3d_image_3.jpg"></GridImage>
              <GridImage src="/from_2d_to_3d_image_4.jpg"></GridImage>
            </ImageGridTwoByTwo>
            <Paragraph>{from_2d_to_3d_text_2}</Paragraph>
            <ImageGridOneByOne>
              <GridImage src="/from_2d_to_3d_image_7.jpg"></GridImage>
            </ImageGridOneByOne>



          </Section>



          <Section id="traditional-and-digital-artworks">
            <Heading>Traditional and Digital Artworks</Heading>
            <HeadingThree>My First Painting</HeadingThree>
            <ImageGridOneByOne>
              <GridImage src="/my_first_painting_image_1.png"></GridImage>
            </ImageGridOneByOne>
            <HeadingThree>Dress Colors</HeadingThree>
            <ImageGridOneByOne>
              <GridImage src="/dress_colors_image_1.png"></GridImage>
            </ImageGridOneByOne>
            <HeadingThree>Machines into Figures Sketches</HeadingThree>
            <ImageGridTwoByTwo>
              <GridImage src="/machines_into_figures_sketches_image_1.jpg"></GridImage>
              <GridImage src="/machines_into_figures_sketches_image_2.jpg"></GridImage>
            </ImageGridTwoByTwo>
            <HeadingThree>Negative Space</HeadingThree>
            <ImageGridOneByOne>
              <GridImage src="/negative_space_image_1.png"></GridImage>
            </ImageGridOneByOne>
            <HeadingThree>Blind Sketches</HeadingThree>
            <ImageGridOneByOne>
              <GridImage src="/blind_sketches_image_1.jpg"></GridImage>
            </ImageGridOneByOne>
            <HeadingThree>Playing with Lines and Forms</HeadingThree>
            <ImageGridOneByOne>
              <GridImage src="/playing_with_lines_and_forms_image_1.jpg"></GridImage>
            </ImageGridOneByOne>
            <HeadingThree>Figure Drawings</HeadingThree>
            <ImageGridOneByOne>
              <GridImage src="/figure_drawings_image_1.png"></GridImage>
            </ImageGridOneByOne>
            <ImageGridTwoByTwo>
              <GridImage src="/figure_drawings_image_3.jpg"></GridImage>
              <GridImage src="/figure_drawings_image_4.jpg"></GridImage>
              <GridImage src="/figure_drawings_image_2.jpg"></GridImage>
              <GridImage src="/figure_drawings_image_5.jpg"></GridImage>
            </ImageGridTwoByTwo>
            <HeadingThree>Face Drawings</HeadingThree>
            <ImageGridTwoByTwo>
              <GridImage src="/face_drawings_image_2.jpg"></GridImage>
              <GridImage src="/face_drawings_image_3.jpg"></GridImage>
              <GridImage src="/face_drawings_image_1.jpg"></GridImage>
              <GridImage src="/face_drawings_image_4.jpg"></GridImage>
            </ImageGridTwoByTwo>
            <HeadingThree>Other Drawings and Projects</HeadingThree>
            <ImageGridTwoByTwo>
              <GridImage src="/other_drawings_and_projects_image_2.jpg"></GridImage>
              <GridImage src="/other_drawings_and_projects_image_3.jpg"></GridImage>
              <GridImage src="/other_drawings_and_projects_image_1.jpg"></GridImage>
              <GridImage src="/other_drawings_and_projects_image_4.jpg"></GridImage>
            </ImageGridTwoByTwo>
          </Section>

          <Section id="personal-achievements-and-media">
            <Heading>Personal Achievements and Media</Heading>
            <HeadingThree>Me in the Newspaper 10-Year-Old for Knitting Cozy Shoes</HeadingThree>
            <ImageGridTwoByTwo>
              <GridImage src="/me_in_the_newspaper_image_1.jpg"></GridImage>
              <GridImage src="/me_in_the_newspaper_image_2.jpg"></GridImage>
            </ImageGridTwoByTwo>

            <HeadingThree>Video Links</HeadingThree>
            <GlobalStyle />
            <div style={{ margin: 'auto', maxWidth: '1080px', width: '100%' }}>
              <iframe
                src="https://player.vimeo.com/video/32361863?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                width="1080"
                height="1080"
                allow="autoplay; fullscreen; picture-in-picture"
                frameBorder={0}
                allowFullScreen
                style={{ maxWidth: '100%', width: '100%', height: 'auto' }}
              ></iframe>
            </div>



          </Section>

        </main>
      </Layout >

    </>
  )
}

const Section = styled.section`
  padding: 20px;
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
  max-width: 60%;
  margin: 2rem auto;
`;

// Grid for 4 images (2x2)
export const ImageGridTwoByTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 60%;
  margin: 2rem auto;
`;

export const ImageGridOneByOne = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  max-width: 60%;
  margin: 2rem auto;
`;

// Image component for grids
export const GridImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
`;

export const HeadingThree = styled.h3`
  color: #333;
  text-align: left;
  margin-left: 2rem;
  max-width: 70%;
  margin: 1rem auto;
  font-style: italic;
`;

export const Paragraph = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.5;
  margin: 1rem auto;
  max-width: 70%; // Adjust the width as necessary
  text-align: justify;
`;


export const Heading = styled.h2`
    color: #333;
    text-align: left;
    max-width: 75%;
    margin: 0.5rem auto;
`;

export const VideoContainer = styled.div`

  position: relative;
  padding-top: 25px;
  height: 0;
  margin: 0.5rem auto;
`;

export const Iframe = styled.iframe`
    margin-top: 0 !important;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
