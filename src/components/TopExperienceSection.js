import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const TABS = [
  { id: "restaurants", label: "Restaurants" },
  { id: "salons", label: "Salons" },
  { id: "resorts", label: "Resorts" },
  { id: "products", label: "Products" },
];

const DATA = {
  restaurants: [
    {
      id: "1",
      name: "Bahadur Momos",
      location: "Hyderabad, Telangana",
      insta: "12.4k",
      image: "https://picsum.photos/600/400?food=1",
      logo: "https://picsum.photos/80/80?logo=1",
    },
    {
      id: "2",
      name: "Hot & Tasty",
      location: "Bengaluru, Karnataka",
      insta: "21.8k",
      image: "https://picsum.photos/600/400?food=2",
      logo: "https://picsum.photos/80/80?logo=2",
    },
    {
      id: "3",
      name: "Vibes & Bites Cafe",
      location: "Thane West, Maharashtra",
      insta: "9.6k",
      image: "https://picsum.photos/600/400?food=3",
      logo: "https://picsum.photos/80/80?logo=3",
    },
    {
      id: "4",
      name: "Big Scope Cafe",
      location: "Pune, Maharashtra",
      insta: "34.2k",
      image: "https://picsum.photos/600/400?food=4",
      logo: "https://picsum.photos/80/80?logo=4",
    },
  ],
};

export default function HomeTopExperienceSection() {
  const [activeTab, setActiveTab] = useState("restaurants");

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
            marginRight: 12,
          }}
        />

        <Text style={{ fontSize: 16, fontWeight: "700", color: "#111" }}>
          TOP EXPERIENCE
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

      {/* TABS */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 24,
          marginBottom: 20,
        }}
      >
        {TABS.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <TouchableOpacity
              key={tab.id}
              onPress={() => setActiveTab(tab.id)}
              style={{
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 12,
                backgroundColor: isActive ? "#E1F0FA" : "transparent",
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "600",
                  color: isActive ? "#0e30ab" : "#555",
                }}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* CARDS */}
      <FlatList
        data={DATA[activeTab]}
        keyExtractor={(item) => item.id}
        horizontal
        removeClippedSubviews={false} // 🔥 CRITICAL FIX
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        renderItem={({ item }) => (
          <View
            style={{
              width: width * 0.75,
              height: 230,
              marginRight: 16,
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            {/* Background Image */}
            <Image
              source={{ uri: item.image }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />

            {/* Instagram Badge */}
            <View
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 12,
              }}
            >
              <MaterialCommunityIcons name="instagram" size={14} color="#000" />
              <Text style={{ marginLeft: 6, fontSize: 12, fontWeight: "600" }}>
                {item.insta}
              </Text>
            </View>

            {/* Bottom Info */}
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.8)"]}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: 12,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={{ uri: item.logo }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: "#fff",
                  }}
                />

                <View style={{ marginLeft: 10 }}>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 14,
                      fontWeight: "700",
                    }}
                  >
                    {item.name}
                  </Text>

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialCommunityIcons
                      name="map-marker-outline"
                      size={12}
                      color="#fff"
                    />
                    <Text
                      style={{
                        color: "#ddd",
                        fontSize: 12,
                        marginLeft: 4,
                      }}
                    >
                      {item.location}
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
        )}
      />
    </View>
  );
}
