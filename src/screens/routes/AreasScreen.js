import React from 'react';
import { View, FlatList } from 'react-native';
import ListItem from '../../components/ListItem';

const MOCK_ROCKS = [
  {
    id: 'batu',
    name: 'Batu Puteh',
    routes: [
      { id: 'leap', name: 'Leap of Faith', grade: '6A' },
      { id: 'crucifix', name: 'Crucifix', grade: '6B' },
      { id: 'barnacle', name: 'Barnacle Boy', grade: '6C' },
      { id: 'flake', name: 'Flake Off', grade: '6A+' },
      { id: 'atlantis', name: 'Atlantis', grade: '6C' },
      { id: 'seaspray', name: 'Sea Spray', grade: '6B+' },
      { id: 'lowtide', name: 'Low Tide', grade: '5' },
      { id: 'hightide', name: 'High Tide', grade: '6A' },
      { id: 'groove', name: 'The Groove', grade: '6B' },
      { id: 'sandman', name: 'Sandman', grade: '6A' },
      { id: 'spongeline', name: 'Sponge Line', grade: '6C+' },
      { id: 'ironbarnacle', name: 'Iron Barnacle', grade: '7A' },
    ],
  },
  {
    id: 'seabreeze',
    name: 'Sea Breeze',
    routes: [
      { id: 'driftwood', name: 'Driftwood', grade: '5+' },
      { id: 'coralcrack', name: 'Coral Crack', grade: '6A+' },
      { id: 'gullspath', name: "Gull's Path", grade: '6B' },
      { id: 'oceandrive', name: 'Ocean Drive', grade: '6C' },
      { id: 'shorething', name: 'Shore Thing', grade: '6A' },
      { id: 'anchorpoint', name: 'Anchor Point', grade: '6B+' },
    ],
  },
  {
    id: 'turtlerock',
    name: 'Turtle Rock',
    routes: [
      { id: 'slowclimb', name: 'Slow Climb', grade: '5' },
      { id: 'shellshock', name: 'Shell Shock', grade: '6A' },
      { id: 'islandhopper', name: 'Island Hopper', grade: '6B' },
      { id: 'bluelagoon', name: 'Blue Lagoon', grade: '6B+' },
      { id: 'reefrunner', name: 'Reef Runner', grade: '6C' },
    ],
  },
  {
    id: 'kampongslab',
    name: 'Kampong Slab',
    routes: [
      { id: 'ricepaper', name: 'Rice Paper', grade: '5' },
      { id: 'sataystick', name: 'Satay Stick', grade: '6A' },
      { id: 'slabcity', name: 'Slab City', grade: '6A+' },
      { id: 'orchidline', name: 'Orchid Line', grade: '6B' },
      { id: 'chilicrab', name: 'Chili Crab', grade: '6C' },
    ],
  },
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
