import React from 'react';
import { View, FlatList } from 'react-native';
import ListItem from '../../components/ListItem';

export default function RoutesScreen({ navigation, route }) {
  const { routes = [], areaName = 'Area' } = route.params || {};

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={routes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            title={`${item.name}, ${item.grade}`}
            onPress={() => navigation.navigate('RouteDetail', { title: `${item.name}, ${item.grade}`, routeData: item })}
          />
        )}
      />
    </View>
  );
}
