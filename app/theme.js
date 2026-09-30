'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF6B00',
      light: '#FF8A00',
      dark: '#D95A00',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      light: '#FFFFFF',
      dark: '#E0E0E0',
      contrastText: '#080808',
    },
    background: {
      default: '#080808',
      paper: '#121212',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B8B8B8',
    },
    divider: 'rgba(255, 255, 255, 0.10)',
  },
  typography: {
    fontFamily: 'Outfit, Inter, system-ui, -apple-system, sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      borderRadius: 10,
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
          fontSize: '0.95rem',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          textTransform: 'none',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #FF6B00 0%, #FF8A00 100%)',
          boxShadow: '0 4px 20px rgba(255, 107, 0, 0.35)',
          color: '#FFFFFF',
          fontWeight: 700,
          '&:hover': {
            background: 'linear-gradient(135deg, #FF8A00 0%, #FFA033 100%)',
            boxShadow: '0 6px 28px rgba(255, 107, 0, 0.55)',
            transform: 'translateY(-2px)',
          },
        },
        containedSecondary: {
          background: '#181818',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          color: '#FFFFFF',
          fontWeight: 600,
          '&:hover': {
            background: '#222222',
            borderColor: '#FF6B00',
            transform: 'translateY(-2px)',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(255, 107, 0, 0.6)',
          borderWidth: '1.5px',
          color: '#FF6B00',
          '&:hover': {
            borderWidth: '1.5px',
            borderColor: '#FF8A00',
            backgroundColor: 'rgba(255, 107, 0, 0.08)',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 18px rgba(255, 107, 0, 0.25)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#121212',
          backgroundImage: 'none',
          border: '1px solid rgba(255, 255, 255, 0.10)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.6)',
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;
