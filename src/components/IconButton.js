import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

/**
 * Generic circular icon button. Expects an icon element via children or renderIcon.
 */
export const IconButton = ({ onPress, renderIcon, children, size = 36, style, accessibilityLabel }) => {
  const theme = useTheme();
  const borderRadius = size / 2;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        { width: size, height: size, borderRadius, borderColor: theme.colors.border, backgroundColor: theme.colors.surface },
        pressed && { opacity: 0.7 },
        style
      ]}
    >
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        {typeof renderIcon === 'function' ? renderIcon({ color: theme.colors.accent }) : children}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth
  }
});

export default IconButton;
