import Layout from '../components/Layout';
import styled from 'styled-components';
import FixedNavigation from '../components/FixedNavigation';
import { ImageTextCard } from '@/components/ImageTextCard';


export default function Work() {
  const personal_project_text = `
    This project was about how will my memories from the season 2021 be in 40 years.
Short summary of the project was making a piece based on memories. I started by doing a mind 
map and an analysis of myself as I immediately knew that my project would be personal. The project is 
about changes in myself and self growth. This work is a three-dimensional work in which a great deal of personal intention takes place.
 Tearing the meterial down was a good outlet for my feelings. When I get older and look back, I will always remember these times that I am experiencing today.
  Two years ago I couldn't see anything around me and felt like I would never get out of the situation I was in. I felt like everything was collapsing around me 
  as seen in my obsession with the building which I also associate with my interest in architecture. I decided to also work with wire as I see myself slowly standing up on my own two feet.
    `;


  const beautiful_and_ugly_art_text = `From my perspective Ugly art can be something that is just nonsense, something that doesn't fit or fit into the environment. I think ugly art can also be colors that don't match in a work and something that doesn't make sense to people. I think ugly art can be works that are dirty, scary, unattractive, or something that has no thought or creativity put into it. Beautiful art can be something that immediately catches your attention, something that reminds you of something beautiful around you, like a beautiful environment, beautiful colors or light. For me, beautiful art can be colors that fit together and especially into the environment. Beautiful art can be an idea that comes from a person and the person conveys it in a neat way. Beautiful and ugly art can be very personal in my opinion, maybe I think something is beautiful that you think is ugly or vice versa. Beauty to me can be something I only see in a dream, something that is evident in a soothing, bright way. When I think of beauty, I think of something that illuminates the environment, something that you immediately notice and are puzzled by at first glance. Beauty to me is something I want to have or have close to me, whether it's an object, art, work or person. Something that warms me and makes me feel good and not feel bad when I look at it.`;


  const an_old_thing_gets_a_new_life_text = `The item i decided to use for this project is a vase that has been in storage for a long time without use. The vase is transparent and made of glass. I was thinking a lot about how I could give this it a new role. I first wanted to change the look, color and texture, but it wasn't exactly a new purpose. From that, I started wanting to make a lamp or a light, so the vase would become a lamp.  None of these ideas of mine appealed directly to me and made me perfectly happy. I sat and turned the vase in many ways and ended up getting an idea when I turned it upside down. I envisioned a lookout tower that would be consistent for the shape of the vase. This observation tower would also be a building and you could walk in a circle around the top floor. I would like to learn how to make interior spaces functional, safe and beautiful for buildings and for the user to enjoy himself as much as possible. 
I think views are very important when you enter buildings or spaces, whether they are high or low. If the view around you is beautiful, I think it makes the interior space much more beautiful. When you have a beautiful overview of the environment around you, you feel good and it is important to feel good in your environment. A view gives you so much, sunset, sunset, natural beauty, glory of colors, landscape and so much more.
`

  const upcycling_jeans_to_a_bag_text = `I found this project incredibly fun as we went exactly the way that I am very interested in, renewing something and giving it a new life.  I started this project by scrolling down Pinterest for a good while looking for inspiration and something I wanted to do. After that I found materials at home that I wanted to use. I decided to sew a bag I saw on Pinterest but make it my own style and I think it would look cool. I found the pattern on the Etsy website and used it to make the bag. I printed out the pattern, glued it together and read the instructions carefully. I found some brown pants that I had in a closet that I had stopped wearing and I needed other pants to match these, so I went to a thrift store and found some really nice white pants to use. I envisioned the overall look of the bag from these two pairs of jeans and felt that white and brown are very suitable for me and the clothes I have.`;

  const my_first_teledimensional_projects_text = `I was very excited to start this project as I have always been interested in architecture and interior design. I started by drawing a room in my house and then I drew a chair that I thought would fit into the room. I then drew the chair in 3D.......`;
  const giometria_text = `This project all started with learning about the Golden Ratio. The main prjoject took over after that, where we were to draw the gold pattern and use those shapes together with one spit to create some kind of structure or Architecture. We were not allowed to use more than this data to begin with. When the work was ready with the Golden profile and the spit, we took pictures of the work in colored lights. It was fun to see how the work changed after how the description was. After that, everything was free and we could do what we wanted with our work.`;


  const from_2d_to_3d_text_1 = `The process all started with drawing a stone, which I associated with my thoughts, not the apperance of the stone. The process then continued to blind drawings and practice with the pencil. We drew lines out of palms which was weird but fun to. After that we were supposed to look at our lines and visualize something. My sketch contained a lot of nature, a boat, and figures that I saw directly from the lines. We drew this sketch directly from the lines on a light board and then cut them out. We then took pictures with a mirror, black background and lightning.`;

  const from_2d_to_3d_text_2 = `I wanted to draw a different picture structure than the work itself was after the cut. I still wanted to keep all the figures and what I had done inside as well as add. My final image is actually nature on a rock that doesn't have much left, it is slowly collapsing. The cracks in the rock show the situation and the men on the rock and the sun are calling for help. Nature is slowly collapsing into the ground, which can be linked to climate issues. To wake up the world to start thinking about what it can do better in its affairs. I also connected my work to the stone where I talk about anxiety, and a deep place in my life. I also regularly feel anxiety related to climate issues which I consider a good connection to the stone.`;



  return (
    <>
      <Layout>

        <FixedNavigation />
        <main>
          <Section id="personal-and-conceptual">
            <Heading>Personal and Conceptual Projects</Heading>

            <ImageTextCard imagePos='down' imgSrc='/personal_project_img_1.jpg' text={personal_project_text} title='Standing Up on My Own Two Feet'></ImageTextCard>
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
              <GridImage src="/upcycling_jeans_to_a_bag_image_1.jpg"></GridImage>
              <GridImage src="/upcycling_jeans_to_a_bag_image_2.jpg"></GridImage>
              <GridImage src="/upcycling_jeans_to_a_bag_image_3.jpg"></GridImage>
              <GridImage src="/upcycling_jeans_to_a_bag_image_4.jpg"></GridImage>
            </ImageGridTwoByTwo>
            <ImageGridOneByOne>
              <GridImage src="/upcycling_jeans_to_a_bag_image_5.jpg"></GridImage>
            </ImageGridOneByOne>
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

          <Section id="spatial-and-dimensional">
            <Heading>Spatial and Dimensional Explorations</Heading>
            <HeadingThree>My First Teledimensional Projects</HeadingThree>
            <Paragraph>{my_first_teledimensional_projects_text}</Paragraph>
            <HeadingThree>The Honey Chair</HeadingThree>
            <ImageGridOneByOne>
              <GridImage src="/the_honey_chair_image_1.png"></GridImage>
            </ImageGridOneByOne>
            <HeadingThree>My Bedroom Drawing</HeadingThree>
            <ImageGridOneByOne>
              <GridImage src="/my_bedroom_drawing_image_1.png"></GridImage>
            </ImageGridOneByOne>
            <HeadingThree>My School Hall</HeadingThree>
            <ImageGridOneByOne>
              <GridImage src="/my_school_hall_image_1.png"></GridImage>
            </ImageGridOneByOne>
            <HeadingThree>Drawings and Forms</HeadingThree>
            <ImageGridTwoByTwo>
              <GridImage src="/drawings_and_forms_image_1.png"></GridImage>
              <GridImage src="/drawings_and_forms_image_2.png"></GridImage>
            </ImageGridTwoByTwo>
            <ImageGridOneByOne>
              <GridImage src="/drawings_and_forms_image_3.png"></GridImage>
            </ImageGridOneByOne>
            <ImageTextCard imagePos='down' imgSrc='/from_2d_to_3d_image_5.jpg' text={from_2d_to_3d_text_1} title='From 2D to 3D - Lines from the Palm of Your Hand'></ImageTextCard>
            <ImageGridTwoByTwo>
              <GridImage src="/from_2d_to_3d_image_1.jpg"></GridImage>
              <GridImage src="/from_2d_to_3d_image_2.jpg"></GridImage>
              <GridImage src="/from_2d_to_3d_image_3.jpg"></GridImage>
              <GridImage src="/from_2d_to_3d_image_4.jpg"></GridImage>
            </ImageGridTwoByTwo>
            <ImageTextCard imagePos='up' imgSrc='/from_2d_to_3d_image_6.jpg' text={from_2d_to_3d_text_2} title=''></ImageTextCard>
            <ImageGridOneByOne>
              <GridImage src="/from_2d_to_3d_image_7.jpg"></GridImage>
            </ImageGridOneByOne>

            <HeadingThree>GÍOMETRIA</HeadingThree>
            <Paragraph>{giometria_text}</Paragraph>

          </Section>

          <Section id="art-and-technology">
            <Heading>Art and Technology</Heading>
            <HeadingThree>My First Laser Project</HeadingThree>
            <ImageGridOneByOne>
              <GridImage src="/my_first_laser_project_image_1.jpg"></GridImage>
            </ImageGridOneByOne>
            <HeadingThree>RGB Photos</HeadingThree>
            <ImageGridOneByOne>
              <GridImage src="/rgb_photos_image_2.jpg"></GridImage>
            </ImageGridOneByOne>
            <ImageGridTwoByTwo>
              <GridImage src="/rgb_photos_image_3.jpg"></GridImage>
              <GridImage src="/rgb_photos_image_4.jpg"></GridImage>
            </ImageGridTwoByTwo>
            <ImageGridOneByOne>
              <GridImage src="/rgb_photos_image_1.jpg"></GridImage>
            </ImageGridOneByOne>
            <HeadingThree>Final Project with Changes</HeadingThree>
            <ImageGridOneByOne>
              <GridImage src="/final_project_with_changes_image_3.jpg"></GridImage>
            </ImageGridOneByOne>
            <ImageGridTwoByTwo>
              <GridImage src="/final_project_with_changes_image_1.jpg"></GridImage>
              <GridImage src="/final_project_with_changes_image_2.jpg"></GridImage>
              <GridImage src="/final_project_with_changes_image_5.jpg"></GridImage>
              <GridImage src="/final_project_with_changes_image_6.jpg"></GridImage>
            </ImageGridTwoByTwo>
            <ImageGridOneByOne>
              <GridImage src="/final_project_with_changes_image_4.jpg"></GridImage>
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

export const ImageGridOneByOne = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
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

export const HeadingThree = styled.h3`
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
