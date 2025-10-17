import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountriesScreen from '../screens/routes/CountriesScreen';
import AreasScreen from '../screens/routes/AreasScreen';
import RoutesScreen from '../screens/routes/RoutesScreen';
import RouteDetailScreen from '../screens/routes/RouteDetailScreen';
import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator();

export default function RoutesNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.surface },
        headerTintColor: colors.text,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="Countries" component={CountriesScreen} options={{ title: 'Routes' }} />
      <Stack.Screen name="Areas" component={AreasScreen} />
      <Stack.Screen name="RoutesList" component={RoutesScreen} options={({ route }) => ({ title: route.params?.areaName || 'Area' })} />
      <Stack.Screen name="RouteDetail" component={RouteDetailScreen} options={({ route }) => ({ title: route.params?.title || 'Route' })} />
    </Stack.Navigator>
  );
}
