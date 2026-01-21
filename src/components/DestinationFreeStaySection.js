import { View, Text, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SvgUri } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const DATA = [
  {
    title: "Bali",
    image:
      "https://mywall-master.b-cdn.net/public/custom/images/bali.svg?optimizer=image",
  },
  {
    title: "Maldives",
    image:
      "https://mywall-master.b-cdn.net/public/custom/images/maldives.svg?optimizer=image",
  },
  {
    title: "Thailand",
    image:
      "https://mywall-master.b-cdn.net/public/custom/images/thailand.svg?optimizer=image",
  },
  {
    title: "Dubai",
    image:
      "https://mywall-master.b-cdn.net/public/custom/images/dubai.svg?optimizer=image",
  },
];

const GAP = 16;

/* ⬇️ MORE WIDTH GIVEN HERE */
const CARD_WIDTH = (width - 24 * 2 - GAP) / 2;
const CARD_HEIGHT = 120;

export default function DestinationFreeStaySection() {
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
          EXPLORE DESTINATIONS
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
              marginBottom: GAP + 12,
            }}
          >
            {/* IMAGE */}
            <View
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "40%", // slightly reduced to give text more space
                height: CARD_HEIGHT + 24,
                zIndex: 2,
              }}
            >
              <SvgUri
                uri={item.image}
                width="100%"
                height="100%"
                preserveAspectRatio="none"
              />
            </View>

            {/* CARD */}
            <View
              style={{
                height: CARD_HEIGHT,
                backgroundColor: "#fff",
                flexDirection: "row",
                elevation: 3,
                overflow: "visible",
              }}
            >
              {/* IMAGE SPACE */}
              <View style={{ width: "40%" }} />

              {/* TEXT SECTION */}
              <View
                style={{
                  flex: 1,
                  padding: 10,
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "700",
                      color: "#111",
                    }}
                  >
                    {item.title}
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 4,
                    }}
                  >
                    <Ionicons name="business-outline" size={14} color="#111" />
                  </View>
                </View>

                {/* BUTTON */}
                <View
                  style={{
                    alignSelf: "flex-start",
                    backgroundColor: "#eef4ff",
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 8,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "700",
                      color: "#1d4ed8",
                    }}
                  >
                    FREE STAY
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
