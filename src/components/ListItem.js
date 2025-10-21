import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import AppText from './AppText';

export const ListItem = ({ left, title, right, style }) => {
  const theme = useTheme();
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: theme.spacing.sm
        },
        style
      ]}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.md }}>
        {left}
        <AppText>{title}</AppText>
      </View>
      {right}
    </View>
  );
};

export default ListItem;
