import { View, Text, FlatList, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const DATA = [
  {
    id: "1",
    image:
      "https://mywall-master.b-cdn.net/public/custom/images/summer-hotels.png?optimizer=image",
  },
  {
    id: "2",
    image:
      "https://mywall-master.b-cdn.net/public/custom/images/free-salon.png?optimizer=image",
  },
  {
    id: "3",
    image:
      "https://mywall-master.b-cdn.net/public/custom/images/pick-your-food.png?optimizer=image",
  },
];

export default function HomeCarouselSection() {
  return (
    <View style={{ marginTop: 24 }}>
      {/* HEADING */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 24,
          marginBottom: 16,
        }}
      >
        {/* LEFT LINE */}
        <LinearGradient
          colors={["#f8f8f8", "#4701e3"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            flex: 1,
            height: 2,
            marginRight: 12,
          }}
        />

        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            color: "#111",
            letterSpacing: 1,
          }}
        >
          TOP PICKS THIS WEEK
        </Text>

        {/* RIGHT LINE */}
        <LinearGradient
          colors={["#4701e3", "#f8f8f8"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            flex: 1,
            height: 2,
            marginLeft: 12,
          }}
        />
      </View>

      {/* CAROUSEL */}
      <FlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.8 + 16}
        decelerationRate="fast"
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingHorizontal: 24,
        }}
        renderItem={({ item }) => (
          <View
            style={{
              width: width * 0.88,
              marginRight: 16,
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: "100%",
                height: 180,
              }}
              resizeMode="contain"
            />
          </View>
        )}
      />
    </View>
  );
}
