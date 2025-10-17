import React, { useMemo } from 'react';
import { View, Image, Dimensions, FlatList } from 'react-native';
import Svg, { Polyline, Circle } from 'react-native-svg';
import { colors } from '../../theme/colors';
import ListItem from '../../components/ListItem';

const sampleImage = { uri: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop' };

export default function RouteDetailScreen({ route, navigation }) {
  const { routeData, allRoutes = [] } = route.params || {};
  const width = Dimensions.get('window').width - 24;
  const height = Math.min(360, width * 0.9);

  // Mock path points in percentage coordinates
  const pointsPct = useMemo(() => [
    [0.52, 0.85], [0.50, 0.72], [0.46, 0.62], [0.45, 0.49], [0.48, 0.35], [0.45, 0.22]
  ], []);

  const svgPoints = pointsPct.map(([px, py]) => `${px * width},${py * height}`).join(' ');

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <View style={{ backgroundColor: colors.surface, borderRadius: 12, overflow: 'hidden', borderColor: colors.divider, borderWidth: 1 }}>
        <Image source={sampleImage} style={{ width, height }} resizeMode="cover" />
        <Svg width={width} height={height} style={{ position: 'absolute', left: 0, top: 0 }}>
          <Polyline points={svgPoints} stroke={colors.green} strokeWidth={4} fill="none" strokeLinejoin="round" strokeLinecap="round" />
          {pointsPct.map(([px, py], idx) => (
            <Circle key={idx} cx={px * width} cy={py * height} r={4} fill={colors.green} />
          ))}
        </Svg>
      </View>

      {/* Other routes list */}
      <View style={{ marginTop: 16, backgroundColor: colors.surface, borderRadius: 12, overflow: 'hidden', borderColor: colors.divider, borderWidth: 1 }}>
        <FlatList
          data={allRoutes.filter((r) => r.id !== routeData?.id)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListItem
              title={`${item.name}, ${item.grade}`}
              onPress={() =>
                navigation.replace('RouteDetail', {
                  title: `${item.name}, ${item.grade}`,
                  routeData: item,
                  allRoutes,
                })
              }
            />
          )}
          ListHeaderComponent={
            <View style={{ paddingHorizontal: 16, paddingVertical: 10, borderBottomColor: colors.divider, borderBottomWidth: 1 }}>
              <View>
                <Image accessibilityIgnoresInvertColors={true} style={{ width: 0, height: 0 }} />
              </View>
            </View>
          }
        />
      </View>
    </View>
  );
}
