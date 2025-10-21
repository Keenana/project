import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export const SearchBar = ({ value, onChangeText, placeholder, leading, trailing, style, inputProps }) => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
          borderRadius: theme.radius.lg,
          paddingHorizontal: theme.spacing.md,
          height: 40
        },
        style
      ]}
    >
      {leading}
      <TextInput
        style={[styles.input, { color: theme.colors.textPrimary, flex: 1 }]}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        value={value}
        onChangeText={onChangeText}
        {...(inputProps || {})}
      />
      {trailing}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  input: {
    paddingVertical: 0
  }
});

export default SearchBar;
