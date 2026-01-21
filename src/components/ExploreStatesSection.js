import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const STATES = [
  { id: "1", name: "Maharashtra" },
  { id: "2", name: "Delhi" },
  { id: "3", name: "Karnataka" },
  { id: "4", name: "Telangana" },
  { id: "5", name: "Gujarat" },
  { id: "6", name: "Rajasthan" },
  { id: "7", name: "West Bengal" },
  { id: "8", name: "Uttar Pradesh" },
];

export default function ExploreStatesSection() {
  const [expanded, setExpanded] = useState(false);

  const visibleStates = expanded ? STATES : STATES.slice(0, 4);

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
          EXPLORE STATES
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

      {/* STATES GRID */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          paddingHorizontal: 24,
          justifyContent: "space-between",
        }}
      >
        {visibleStates.map((item) => (
          <View
            key={item.id}
            style={{
              width: "22%", // 4 per row
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <View
              style={{
                width: 54,
                height: 54,
                borderRadius: 27,
                borderWidth: 1,
                borderColor: "#e5e5e5",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 6,
              }}
            >
              {/* SVG-LIKE ICON */}
              <Ionicons name="location-outline" size={26} color="#4701e3" />
            </View>

            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: "#111",
                textAlign: "center",
              }}
              numberOfLines={2}
            >
              {item.name}
            </Text>
          </View>
        ))}
      </View>

      {/* SHOW MORE / LESS */}
      <TouchableOpacity
        onPress={() => setExpanded(!expanded)}
        style={{ alignSelf: "center", marginTop: 8, borderWidth: 1, borderColor: "#4701e3", padding: 10, borderRadius: 18 }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: "#4701e3",
          }}
        >
          {expanded ? "Show less" : "Show more"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
