import { View, Text, Dimensions, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Video } from "expo-av";
import { useRef, useState } from "react";
import { FlatList } from "react-native";

const { width } = Dimensions.get("window");

const VIDEOS = [
  "https://mywall-master.b-cdn.net/public/homepage/w-goa.mp4?optimizer=image",
  "https://mywall-master.b-cdn.net/public/homepage/stay-elivas.mp4?optimizer=image",
  "https://mywall-master.b-cdn.net/public/homepage/looks-salon.mp4?optimizer=image",
  "https://mywall-master.b-cdn.net/public/homepage/mhk.mp4?optimizer=image",
  "https://mywall-master.b-cdn.net/public/homepage/opulence-luxury-salon.mp4?optimizer=image",
  "https://mywall-master.b-cdn.net/public/homepage/novotel-goa-panjim.mp4?optimizer=image",
];

const CARD_WIDTH = width * 0.3;
const CARD_HEIGHT = 190;
const GAP = 14;
const INDICATOR_WIDTH = 40;

export default function TopCreatorStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems?.length) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  const translateX = scrollX.interpolate({
    inputRange: [0, (VIDEOS.length - 1) * (CARD_WIDTH + GAP)],
    outputRange: [0, width - 48 - INDICATOR_WIDTH],
    extrapolate: "clamp",
  });

  return (
    <View style={{ marginTop: 32 }}>
      {/* HEADING */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 24,
          marginBottom: 16,
        }}
      >
        <LinearGradient
          colors={["#f8f8f8", "#4701e3"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            flex: 1,
            height: 2,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            marginHorizontal: 12,
            color: "#111",
          }}
        >
          TOP CREATOR STORIES
        </Text>
        <LinearGradient
          colors={["#4701e3", "#f8f8f8"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            flex: 1,
            height: 2,
          }}
        />
      </View>

      {/* VIDEO LIST */}
      <Animated.FlatList
        data={VIDEOS}
        horizontal
        keyExtractor={(_, i) => i.toString()}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + GAP}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 24 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 70 }}
        onViewableItemsChanged={onViewableItemsChanged}
        renderItem={({ item, index }) => (
          <View
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              marginRight: GAP,
              borderRadius: 16,
              overflow: "hidden",
              backgroundColor: "#000",
            }}
          >
            <Video
              source={{ uri: item }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
              shouldPlay={index === activeIndex}
              isLooping
              isMuted
            />
          </View>
        )}
      />

      {/* SMALL ANIMATED SCROLL BAR */}
      <View
        style={{
          height: 1.5,
          backgroundColor: "#e5e7eb",
          marginHorizontal: 24,
          marginTop: 14,
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Animated.View
          style={{
            width: INDICATOR_WIDTH,
            height: "100%",
            backgroundColor: "#4701e3",
            borderRadius: 2,
            transform: [{ translateX }],
          }}
        />
      </View>
    </View>
  );
}
