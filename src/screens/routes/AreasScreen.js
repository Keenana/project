import React from 'react';
import { View, FlatList } from 'react-native';
import ListItem from '../../components/ListItem';

const MOCK_ROCKS = [
  { id: 'batu', name: 'Batu Puteh', routes: [
    { id: 'leap', name: 'Leap of Faith', grade: '6A' },
    { id: 'crucifix', name: 'Crucifix', grade: '6B' },
    { id: 'barnacle', name: 'Barnacle Boy', grade: '6C' },
    { id: 'flake', name: 'Flake Off', grade: '6A+' },
    { id: 'atlantis', name: 'Atlantis', grade: '6C' },
  ] },
];

export default function AreasScreen({ navigation, route }) {
  const { areaName } = route.params || { areaName: 'Area' };
  const items = MOCK_ROCKS;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            onPress={() => navigation.navigate('RoutesList', { areaId: item.id, areaName: item.name, routes: item.routes })}
          />
        )}
      />
    </View>
  );
}
