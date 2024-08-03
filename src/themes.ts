import { createTheme } from '@mui/material';

  const COLOR_PALLETE = {
    gold: "#FFD700",
    white: "#FFFFFF",
    lightGrey: "#CCCCCC",
    black: "#000000",
    richRed: "#C21807",
    darkGrey: "#2C2C2C",
    erieBlack: "#1E1E1E",
    darkRed: "#A30F00",
    darkGold: "#E6C200",
  }
  
  const casinoTheme = createTheme({
    typography: {
      fontFamily: '"Montserrat", "Roboto", "Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
        color: COLOR_PALLETE.gold,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
        color: COLOR_PALLETE.gold,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
        color: COLOR_PALLETE.gold,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 500,
        color: COLOR_PALLETE.gold,
      },
      body1: {
        fontSize: '1.2rem',
        color: COLOR_PALLETE.white, // White text for body
      },
      body2: {
        fontSize: '1rem',
        color: COLOR_PALLETE.lightGrey, // Light grey for secondary text
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '1rem',
        color: COLOR_PALLETE.white,
      },
    },
    palette: {
      primary: {
        main: COLOR_PALLETE.richRed, // Rich red color for primary actions
        contrastText: COLOR_PALLETE.white, // White text for buttons and links
      },
      secondary: {
        main: COLOR_PALLETE.gold, // Gold color for secondary actions
        contrastText: COLOR_PALLETE.black, // Black text for contrast
      },
      background: {
        default: COLOR_PALLETE.darkGrey, // Dark grey for a luxurious background
        paper: COLOR_PALLETE.erieBlack, // Darker background for cards and surfaces
      },
      text: {
        primary: COLOR_PALLETE.white, // White text for primary text
        secondary: COLOR_PALLETE.lightGrey, // Light grey for secondary text
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '20px', // More rounded buttons for a luxurious look
            padding: '12px 24px', // Comfortable padding
          },
          containedPrimary: {
            backgroundColor: COLOR_PALLETE.richRed,
            '&:hover': {
              backgroundColor: COLOR_PALLETE.darkRed, // Slightly darker on hover
            },
          },
          containedSecondary: {
            backgroundColor: COLOR_PALLETE.gold,
            '&:hover': {
              backgroundColor: COLOR_PALLETE.darkGold, // Slightly darker on hover
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            textAlign: 'center', // Centered text for a balanced look
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            padding: '24px', // Comfortable padding for cards
            borderRadius: '20px', // Rounded corners for a luxurious appearance
            backgroundColor: COLOR_PALLETE.erieBlack, // Dark background for paper components
            color: COLOR_PALLETE.white, // White text on dark background
          },
        },
      },
    },
  });

  enum headerColor {
      red= '#ff385c',
      green= '#1DB954',
      blue= '#00a8e8',
      yellow= '#F77737',
      orange= '#F56040',
      black= '#000000',
      default= '#ff385c',
    }

    export {  headerColor,casinoTheme,COLOR_PALLETE };
