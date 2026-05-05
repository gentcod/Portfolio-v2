export const lightTheme = {
  colors: {
    background: '#F8F9FA',
    surface: '#FFFFFF',
    surfaceHighlight: '#E9ECEF',
    accent: '#45a25a',
    secondaryAccent: '#FFC226',
    textPrimary: '#212529',
    textSecondary: '#6C757D',
    border: '#DEE2E6',
  },
};

export const darkTheme = {
  colors: {
    background: '#21212B',
    surface: '#2A2A36',
    surfaceHighlight: '#3B3B4A',
    accent: '#45a25a',
    secondaryAccent: '#FFC226',
    textPrimary: '#FFFFFF',
    textSecondary: '#A0A0B0',
    border: '#3B3B4A',
  },
};

export type ThemeType = typeof lightTheme;
