import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export const Button = ({ title, onPress, style, textStyle, variant = 'primary', accessibilityLabel }) => {
  const theme = useTheme();
  const isPrimary = variant === 'primary';
  const backgroundColor = isPrimary ? theme.colors.accent : 'transparent';
  const borderColor = isPrimary ? theme.colors.accent : theme.colors.border;
  const color = isPrimary ? '#0B1C0F' : theme.colors.textPrimary;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        { backgroundColor, borderColor, paddingHorizontal: theme.spacing.lg, paddingVertical: theme.spacing.sm, borderRadius: theme.radius.sm },
        pressed && { opacity: 0.85 },
        style
      ]}
    >
      <Text style={[{ color, fontSize: theme.typography.body, fontWeight: '600' }, textStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    borderWidth: 1
  }
});

export default Button;
