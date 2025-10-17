import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import RoutesNavigator from './src/navigation/RoutesNavigator';
import { colors } from './src/theme/colors';

const Tab = createBottomTabNavigator();

function PlaceholderScreen({ title }) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: colors.text, fontSize: 18 }}>{title}</Text>
    </View>
  );
}

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background,
      card: colors.surface,
      text: colors.text,
      primary: colors.green,
      border: '#D1D5DB',
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.green,
          tabBarInactiveTintColor: '#9CA3AF',
          tabBarStyle: { backgroundColor: colors.surface, borderTopColor: '#E5E7EB' },
          tabBarIcon: ({ color, size }) => {
            const iconMap = {
              Home: 'home',
              Activity: 'pulse',
              Map: 'map',
              Forums: 'chatbubbles',
              Routes: 'trending-up',
            };
            const name = iconMap[route.name] || 'ellipse';
            return <Ionicons name={name} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" children={() => <PlaceholderScreen title="Home" />} />
        <Tab.Screen name="Activity" children={() => <PlaceholderScreen title="Activity" />} />
        <Tab.Screen name="Map" children={() => <PlaceholderScreen title="Map" />} />
        <Tab.Screen name="Forums" children={() => <PlaceholderScreen title="Forums" />} />
        <Tab.Screen name="Routes" component={RoutesNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
