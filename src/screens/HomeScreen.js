import React from 'react';
import { View, ScrollView, Image, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import AppText from '../components/AppText';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { IconButton } from '../components/IconButton';
import { SearchBar } from '../components/SearchBar';
import ListItem from '../components/ListItem';

/**
 * HomeScreen is a presentational component driven entirely by props.
 * All content, strings, and data are provided via props.
 */
export const HomeScreen = ({
  headerTitle,
  onOpenMenu,
  onOpenProfile,
  searchValue,
  onChangeSearch,
  searchPlaceholder,
  banner, // { textLeft, ctaText, onPressCta }
  rankings, // { title, rows: [{ rank, name, routes }], onPressSeeFull }
  trendingSpots, // array of { id, name, imageSource }
  onPressSpot,
  onNavigateTab // function(tabKey)
}) => {
  const theme = useTheme();

  const renderTrendingItem = ({ item }) => (
    <Card style={{ width: 220, marginRight: theme.spacing.lg }}>
      {/* Placeholder image area; consumer passes actual source in item.imageSource */}
      <View
        style={{
          height: 100,
          backgroundColor: theme.colors.surfaceElevated,
          borderRadius: theme.radius.sm,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: theme.spacing.md
        }}
      >
        {item.imageSource ? (
          <Image source={item.imageSource} style={{ width: '100%', height: '100%', borderRadius: theme.radius.sm }} />
        ) : (
          <View style={{ width: 32, height: 32, backgroundColor: theme.colors.accent, borderRadius: 6 }} />
        )}
      </View>
      <AppText variant="subtitle">{item.name}</AppText>
    </Card>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Header with side buttons and search */}
      <View style={{ padding: theme.spacing.lg, paddingBottom: theme.spacing.md }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: theme.spacing.md }}>
          <IconButton accessibilityLabel="Open menu" onPress={onOpenMenu} renderIcon={({ color }) => <View style={{ width: 18, height: 2, backgroundColor: color }} />} />
          <IconButton accessibilityLabel="Open profile" onPress={onOpenProfile} renderIcon={({ color }) => <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: color }} />} />
        </View>
        <SearchBar
          value={searchValue}
          onChangeText={onChangeSearch}
          placeholder={searchPlaceholder}
          leading={<View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: theme.colors.accent }} />}
        />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: theme.spacing.xxl }}>
        {/* Banner Upgrade Card */}
        {banner && (
          <View style={{ paddingHorizontal: theme.spacing.lg, marginBottom: theme.spacing.lg }}>
            <Card style={{ padding: theme.spacing.md, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <AppText variant="subtitle" color={theme.colors.textPrimary}>
                {banner.textLeft}
              </AppText>
              <Button title={banner.ctaText} onPress={banner.onPressCta} />
            </Card>
          </View>
        )}

        {/* Rankings Section */}
        {rankings && (
          <View style={{ paddingHorizontal: theme.spacing.lg, marginBottom: theme.spacing.lg }}>
            <Card>
              <AppText variant="subtitle" style={{ marginBottom: theme.spacing.sm }}>
                {rankings.title}
              </AppText>
              <View style={{ borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: theme.colors.border }} />
              <View style={{ marginTop: theme.spacing.sm }}>
                {rankings.rows?.slice(0, 10).map((row) => (
                  <ListItem
                    key={row.rank}
                    left={<AppText color={theme.colors.textSecondary}>{row.rank}. {row.name}</AppText>}
                    title=""
                    right={<AppText color={theme.colors.textSecondary}>{row.routes} Routes</AppText>}
                  />
                ))}
              </View>
              <Button style={{ marginTop: theme.spacing.sm }} title={rankings.ctaText || 'See Full List'} onPress={rankings.onPressSeeFull} />
            </Card>
          </View>
        )}

        {/* Trending Spots */}
        {Array.isArray(trendingSpots) && trendingSpots.length > 0 && (
          <View style={{ paddingLeft: theme.spacing.lg, marginBottom: theme.spacing.xxl }}>
            <AppText variant="subtitle" style={{ marginBottom: theme.spacing.md }}>
              Trending Spots
            </AppText>
            <FlatList
              data={trendingSpots}
              renderItem={renderTrendingItem}
              keyExtractor={(item) => String(item.id)}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        )}
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: theme.colors.border,
          backgroundColor: theme.colors.surface,
          paddingVertical: theme.spacing.sm,
          paddingHorizontal: theme.spacing.lg
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {[
            { key: 'home', label: 'Home' },
            { key: 'activity', label: 'Activity' },
            { key: 'map', label: 'Map' },
            { key: 'profile', label: 'Profile' },
            { key: 'routes', label: 'Routes' }
          ].map((tab) => (
            <View key={tab.key} style={{ alignItems: 'center', gap: 4 }}>
              <IconButton size={36} accessibilityLabel={tab.label} onPress={() => onNavigateTab && onNavigateTab(tab.key)} renderIcon={({ color }) => <View style={{ width: 18, height: 18, borderRadius: 4, backgroundColor: color }} />} />
              <AppText variant="caption" color={theme.colors.textSecondary}>
                {tab.label}
              </AppText>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 }
});

export default HomeScreen;
