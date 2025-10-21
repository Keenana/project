// Default theme for GoClimb app (dark gray background, green elements)
export const defaultTheme = {
  colors: {
    background: '#121212',
    surface: '#1C1C1C',
    surfaceElevated: '#232323',
    textPrimary: '#E6E6E6',
    textSecondary: '#B3B3B3',
    border: '#2D2D2D',
    accent: '#22C55E', // green for elements
    accentMuted: '#16A34A',
    muted: '#6B7280',
    overlay: 'rgba(0,0,0,0.5)'
  },
  spacing: {
    xxs: 4,
    xs: 6,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24
  },
  radius: {
    sm: 8,
    md: 12,
    lg: 16
  },
  typography: {
    title: 20,
    subtitle: 16,
    body: 14,
    caption: 12
  },
  shadows: {
    soft: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 2
    }
  }
};

export default defaultTheme;
