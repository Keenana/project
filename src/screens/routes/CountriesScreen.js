import React, { useMemo, useState } from 'react';
import { View, SectionList, Text, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../../theme/colors';

const DATA = [
  {
    country: 'Singapore',
    areas: [
      { id: 'changi', name: 'Changi', subareas: [ { id: 'batu', name: 'Batu Puteh' } ] },
      { id: 'bukit', name: 'Bukit Ciambi' },
      { id: 'dairy', name: 'Dairy Farm' },
      { id: 'pulau', name: 'Pulau Ubin' },
    ],
  },
  { country: 'Australia', areas: [] },
  { country: 'Canada', areas: [] },
  { country: 'France', areas: [] },
  { country: 'United Kingdom', areas: [] },
  { country: 'USA', areas: [] },
];

export default function CountriesScreen({ navigation }) {
  const [expandedCountries, setExpandedCountries] = useState({ Singapore: true });
  const [expandedAreas, setExpandedAreas] = useState({});

  const sections = useMemo(() => {
    return DATA.map((c) => ({ title: c.country, data: c.areas }));
  }, []);

  const toggleCountry = (country) => {
    setExpandedCountries((prev) => ({ ...prev, [country]: !prev[country] }));
  };

  const toggleArea = (areaId) => {
    setExpandedAreas((prev) => ({ ...prev, [areaId]: !prev[areaId] }));
  };

  return (
    <View style={{ flex: 1 }}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section: { title, data } }) => (
          <Pressable onPress={() => toggleCountry(title)}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, backgroundColor: colors.surface, borderBottomColor: colors.divider, borderBottomWidth: 1 }}>
              <Ionicons name={expandedCountries[title] ? 'chevron-down' : 'chevron-forward'} size={18} color={colors.green} style={{ marginRight: 8 }} />
              <Text style={{ fontSize: 18, fontWeight: '600', color: colors.text }}>{title}</Text>
            </View>
          </Pressable>
        )}
        renderItem={({ item, section }) => {
          const countryExpanded = expandedCountries[section.title];
          if (!countryExpanded) return null;
          const hasSub = Array.isArray(item.subareas) && item.subareas.length > 0;
          const isExpanded = expandedAreas[item.id];
          return (
            <View>
              <Pressable onPress={() => (hasSub ? toggleArea(item.id) : navigation.navigate('Areas', { country: section.title, areaId: item.id, areaName: item.name }))}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 28, paddingRight: 16, paddingVertical: 12, backgroundColor: colors.surface, borderBottomColor: colors.divider, borderBottomWidth: 1 }}>
                  <Ionicons name={hasSub ? (isExpanded ? 'chevron-down' : 'chevron-forward') : 'ellipse-outline'} size={16} color={hasSub ? colors.green : colors.mutedText} style={{ marginRight: 8 }} />
                  <Text style={{ color: colors.text, fontSize: 16 }}>{item.name}</Text>
                </View>
              </Pressable>
              {hasSub && isExpanded && (
                <View style={{ backgroundColor: colors.surface }}>
                  {item.subareas.map((sub) => (
                    <Pressable key={sub.id} onPress={() => navigation.navigate('Areas', { country: section.title, areaId: sub.id, areaName: sub.name })}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 48, paddingRight: 16, paddingVertical: 12, borderBottomColor: colors.divider, borderBottomWidth: 1 }}>
                        <Ionicons name="chevron-forward" size={14} color={colors.mutedText} style={{ marginRight: 8 }} />
                        <Text style={{ color: colors.text }}>{sub.name}</Text>
                      </View>
                    </Pressable>
                  ))}
                </View>
              )}
            </View>
          );
        }}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
}
