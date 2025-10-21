// Example entry point to showcase HomeScreen usage. Consumers should wire to their navigator.
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from './theme/ThemeProvider';
import HomeScreen from './screens/HomeScreen';

export const App = () => {
  const themeOverride = undefined; // can pass custom overrides in runtime

  const rankingsRows = Array.from({ length: 10 }).map((_, i) => ({
    rank: i + 1,
    name: `Climber ${i + 1}`,
    routes: 30 - i
  }));

  return (
    <ThemeProvider theme={themeOverride}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <HomeScreen
          headerTitle=""
          onOpenMenu={() => {}}
          onOpenProfile={() => {}}
          searchValue={''}
          onChangeSearch={() => {}}
          searchPlaceholder={'Find Routes...'}
          banner={{ textLeft: 'tentative  Upgrade to Climb+', ctaText: 'Upgrade', onPressCta: () => {} }}
          rankings={{ title: 'Monthly Rankings (Tops)', rows: rankingsRows, onPressSeeFull: () => {}, ctaText: 'See Full List' }}
          trendingSpots={[{ id: 1, name: 'Fontainebleau' }, { id: 2, name: 'Joshua Tree Ntl. Pk' }]}
          onNavigateTab={() => {}}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
