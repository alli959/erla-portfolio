// src/styles/theme.ts

const theme = {
  colors: {
    primary: "#0070f3", // Example primary color
    background: "#ffffff", // Light background
    headerBackground: "#101010", // Header background color
    headerText: "#ffffff", // Header text color
    text: "#333333", // Primary text color
    footerBackground: "#101010", // Footer background color
    footerText: "#ffffff", // Footer text color
    fixedNavigation: "#D9DDDC",
  },
  fonts: {
    body: "'Open Sans', sans-serif", // Body font
    heading: "'Montserrat', sans-serif", // Heading font
  },
  breakpoints: {
    mobile: "only screen and (max-width: 600px)", // Mobile phones
    tablet: "only screen and (max-width: 768px)", // Tablets
    laptop: "only screen and (max-width: 1024px)", // Laptops
  },
  heights: {
    header: "60px", // Header height
    footer: "60px", // Footer height
  },
  paragraph: {
    color: "#555",
    fontSize: "1rem",
    lineHeight: "1.5",
    margin: "1rem auto",
    maxWidth: "80%",
    textAlign: "justify",
  },
};

export type ThemeType = typeof theme;
export default theme;
