import { View, Text, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const DATA = [
  {
    title: "Romantic",
    image:
      "https://mywall-master.b-cdn.net/public/custom/images/romantic.jpeg?optimizer=image",
  },
  {
    title: "Cafe",
    image:
      "https://mywall-master.b-cdn.net/public/custom/images/cafe.png?optimizer=image",
  },
  {
    title: "Luxury Dinner",
    image:
      "https://mywall-master.b-cdn.net/public/custom/images/luxury-dinner.jpeg?optimizer=image",
  },
  {
    title: "Bar",
    image:
      "https://mywall-master.b-cdn.net/public/custom/images/bar.jpeg?optimizer=image",
  },
  {
    title: "Rooftop",
    image:
      "https://mywall-master.b-cdn.net/public/custom/images/rooftop.png?optimizer=image",
  },
  {
    title: "Multi Cuisine",
    image:
      "https://mywall-master.b-cdn.net/public/custom/images/multi-cuisine.jpeg?optimizer=image",
  },
];

// spacing math
const CONTAINER_PADDING = 24 * 2;
const GAP = 12;
const CARD_WIDTH = (width - CONTAINER_PADDING - GAP * 2) / 3;
const CARD_HEIGHT = CARD_WIDTH * 1.15;

export default function FoodMoodSection() {
  return (
    <View style={{ marginTop: 32 }}>
      {/* HEADING */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 24,
          marginBottom: 20,
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
          WHAT’S YOUR FOOD MOOD?
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

      {/* GRID */}
      <View
        style={{
          paddingHorizontal: 24,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {DATA.map((item, index) => (
            <View
              key={index}
              style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                marginBottom: GAP,
                borderRadius: 16,
                overflow: "hidden",
                backgroundColor: "#fff",
                elevation: 4,
              }}
            >
              {/* IMAGE */}
              <Image
                source={{ uri: item.image }}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />

              {/* TEXT OVER IMAGE */}
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  paddingVertical: 6,
                  backgroundColor: "rgba(0,0,0,0.45)",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
