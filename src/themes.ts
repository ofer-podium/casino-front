import { createTheme } from '@mui/material';


  const defaultTheme = createTheme({
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#1E1E1E',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#1E1E1E',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#1E1E1E',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#1E1E1E',
    },
    body1: {
      fontSize: '1.2rem',
      color: '#333333',
    },
    body2: {
      fontSize: '1rem',
      color: '#555555',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1rem',
    },
  },
  palette: {
    primary: {
      main: '#FF6F61', // A vibrant coral color for primary actions
      contrastText: '#FFFFFF', // White text for buttons and links
    },
    secondary: {
      main: '#4A90E2', // A bright blue for secondary actions
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FAFAFA', // Light grey for a clean background
      paper: '#FFFFFF', // White for cards and surfaces
    },
    text: {
      primary: '#1E1E1E', // Dark grey for primary text
      secondary: '#555555', // Slightly lighter grey for secondary text
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Rounded buttons for a friendly look
          padding: '10px 20px', // Comfortable padding
        },
        containedPrimary: {
          backgroundColor: '#FF6F61',
          '&:hover': {
            backgroundColor: '#E55A50', // Slightly darker on hover
          },
        },
        containedSecondary: {
          backgroundColor: '#4A90E2',
          '&:hover': {
            backgroundColor: '#357ABD', // Slightly darker on hover
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
          padding: '20px', // Comfortable padding for cards
          borderRadius: '12px', // Rounded corners for a friendly appearance
        },
      },
    },
  },
  });

  const casinoTheme = createTheme({
    typography: {
      fontFamily: '"Montserrat", "Roboto", "Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
        color: '#FFD700', // Gold color for headers
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
        color: '#FFD700',
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
        color: '#FFD700',
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 500,
        color: '#FFD700',
      },
      body1: {
        fontSize: '1.2rem',
        color: '#FFFFFF', // White text for body
      },
      body2: {
        fontSize: '1rem',
        color: '#CCCCCC', // Light grey for secondary text
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '1rem',
        color: '#FFFFFF',
      },
    },
    palette: {
      primary: {
        main: '#C21807', // Rich red color for primary actions
        contrastText: '#FFFFFF', // White text for buttons and links
      },
      secondary: {
        main: '#FFD700', // Gold color for secondary actions
        contrastText: '#000000', // Black text for contrast
      },
      background: {
        default: '#2C2C2C', // Dark grey for a luxurious background
        paper: '#1E1E1E', // Darker background for cards and surfaces
      },
      text: {
        primary: '#FFFFFF', // White text for primary text
        secondary: '#CCCCCC', // Light grey for secondary text
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
            backgroundColor: '#C21807',
            '&:hover': {
              backgroundColor: '#A30F00', // Slightly darker on hover
            },
          },
          containedSecondary: {
            backgroundColor: '#FFD700',
            '&:hover': {
              backgroundColor: '#E6C200', // Slightly darker on hover
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
            backgroundColor: '#1E1E1E', // Dark background for paper components
            color: '#FFFFFF', // White text on dark background
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

    export {  defaultTheme, headerColor,casinoTheme };
