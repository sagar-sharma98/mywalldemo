import { View, Text, FlatList, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

/* =======================
   DATA
======================= */
const STAY_DATA = [
  {
    id: "1",
    video:
      "https://mywall-master.b-cdn.net/public/listing/gif.mp4-1761291151365?optimizer=image",
    title: "Elivaas Amber Royale",
    location: "Udaipur, Rajasthan",
    price: 17000,
    insta: "120K",
  },
  {
    id: "2",
    video:
      "https://mywall-master.b-cdn.net/public/listing/fairfieldgoacalangute_.mp4-1744738248040?optimizer=image",
    title: "Fairfield by Marriott Goa Calangute",
    location: "Calangute, Goa",
    price: 5376,
    insta: "85K",
  },
  {
    id: "3",
    video:
      "https://mywall-master.b-cdn.net/public/listing/St. Regis.mp4-1744739778182?optimizer=image",
    title: "The St. Regis Goa Resort",
    location: "Cavelossim, Goa",
    price: 23000,
    insta: "210K",
  },
  {
    id: "4",
    video:
      "https://mywall-master.b-cdn.net/public/listing/Singing Tree by Nirvana.mp4-1744739980937?optimizer=image",
    title: "The Singing Tree By Nirvana Hotels",
    location: "Vagator, Goa",
    price: 3000,
    insta: "65K",
  },
];

export default function PlanYourStaySection() {
  return (
    <View style={{ marginTop: 32 }}>
      {/* ================= HEADING ================= */}
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
          PLAN YOUR STAY WITH MYWALL
        </Text>

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

      {/* ================= HORIZONTAL LIST ================= */}
      <FlatList
        data={STAY_DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        renderItem={({ item }) => (
          <View
            style={{
              width: width * 0.82,
              borderRadius: 20,
              overflow: "hidden",
              backgroundColor: "#fff",
              marginRight: 16,
            }}
          >
            {/* VIDEO */}
            <View style={{ height: 220 }}>
              <Video
                source={{ uri: item.video }}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
                shouldPlay
                isLooping
                isMuted
              />

              {/* TAG */}
              <View
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  paddingHorizontal: 10,
                  paddingVertical: 6,
                  borderRadius: 20,
                }}
              >
                <Ionicons name="sunny-outline" size={16} color="#6c5ce7" />
                <Text
                  style={{
                    marginLeft: 6,
                    fontSize: 12,
                    fontWeight: "600",
                    color: "#6c5ce7",
                  }}
                >
                  2 Nights · 3 Days
                </Text>
              </View>
            </View>

            {/* INFO */}
            <View style={{ padding: 16 }}>
              {/* TITLE + PRICE */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flex: 1, paddingRight: 8 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "700",
                      color: "#0f172a",
                    }}
                    numberOfLines={1}
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
                    <Ionicons
                      name="location-outline"
                      size={14}
                      color="#6b7280"
                    />
                    <Text
                      style={{
                        marginLeft: 4,
                        fontSize: 12,
                        color: "#6b7280",
                      }}
                      numberOfLines={1}
                    >
                      {item.location}
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    color: "#0f172a",
                    textDecorationLine: "line-through",
                  }}
                >
                  ₹{item.price}
                </Text>
              </View>

              {/* ACTIONS */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 16,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "#e5e7eb",
                    borderRadius: 20,
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                  }}
                >
                  <Ionicons name="logo-instagram" size={16} color="#e11d48" />
                  <Text
                    style={{
                      marginLeft: 6,
                      fontSize: 12,
                      fontWeight: "600",
                      color: "#111",
                    }}
                  >
                    {item.insta}
                  </Text>
                </View>

                <LinearGradient
                  colors={["#9c2cf3", "#1a47e8"]}
                  style={{
                    paddingHorizontal: 22,
                    paddingVertical: 8,
                    borderRadius: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: "700",
                      color: "#fff",
                    }}
                  >
                    FREE
                  </Text>
                </LinearGradient>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
