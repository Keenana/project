import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../theme/colors';

export default function SectionHeader({ title }) {
  return (
    <View style={{ paddingVertical: 12, paddingHorizontal: 16, backgroundColor: colors.surface, borderBottomColor: colors.divider, borderBottomWidth: 1 }}>
      <Text style={{ fontSize: 20, fontWeight: '600', color: colors.text }}>{title}</Text>
    </View>
  );
}
