import React from 'react';
import { Pressable, View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../theme/colors';

export default function ListItem({ title, subtitle, onPress, leftIcon = 'chevron-forward', showChevron = true }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}> 
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 14, backgroundColor: colors.surface, borderBottomColor: colors.divider, borderBottomWidth: 1 }}>
        {leftIcon && (
          <Ionicons name={leftIcon} size={18} color={colors.green} style={{ marginRight: 8 }} />
        )}
        <View style={{ flex: 1 }}>
          <Text style={{ color: colors.text, fontSize: 16 }}>{title}</Text>
          {subtitle ? <Text style={{ color: colors.mutedText, marginTop: 2 }}>{subtitle}</Text> : null}
        </View>
        {showChevron ? <Ionicons name="chevron-forward" size={18} color={colors.mutedText} /> : null}
      </View>
    </Pressable>
  );
}
