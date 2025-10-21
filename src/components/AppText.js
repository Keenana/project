import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

/**
 * AppText wraps RN Text with theme colors and sizes.
 * Props: variant ('title'|'subtitle'|'body'|'caption'), color, style, children
 */
export const AppText = ({ variant = 'body', color, style, children, numberOfLines, ellipsizeMode }) => {
  const theme = useTheme();
  const fontSize = theme.typography[variant] || theme.typography.body;
  const textColor = color || theme.colors.textPrimary;
  return (
    <Text
      style={[{ color: textColor, fontSize }, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {children}
    </Text>
  );
};

export default AppText;
