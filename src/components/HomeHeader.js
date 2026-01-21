import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

export default function HomeHeader({ scrollY }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const listener = scrollY.addListener(({ value }) => {
      setScrolled(value > 60);
    });

    return () => {
      scrollY.removeListener(listener);
    };
  }, []);

  const bgOpacity = scrollY.interpolate({
    inputRange: [0, 120],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  return (
    <View>
      {/* GRADIENT HEADER */}
      <LinearGradient
        colors={["#7807d0", "#0e30ab"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 110,
        }}
      />

      {/* WHITE HEADER ON SCROLL */}
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 110,
          backgroundColor: "#fff",
          opacity: bgOpacity,
          borderBottomWidth: scrolled ? 1 : 0,
          borderBottomColor: "#e5e5e5",
        }}
      />

      {/* HEADER CONTENT */}
      <View
        style={{
          paddingTop: 48,
          paddingBottom: 12,
          paddingHorizontal: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150" }}
            style={{ width: 44, height: 44, borderRadius: 22 }}
          />
          <Text
            style={{
              marginLeft: 12,
              fontSize: 18,
              fontWeight: "600",
              color: scrolled ? "#000" : "#fff",
            }}
          >
            Urban Finch
          </Text>
        </View>

        {/* RIGHT ICONS */}
        <View style={{ flexDirection: "row" }}>
          {["mail-outline", "wallet-outline", "person-add-outline"].map(
            (icon, i) => (
              <TouchableOpacity
                key={i}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 21,
                  borderWidth: 1,
                  borderColor: scrolled ? "#e5e5e5" : "#fff",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 12,
                }}
                activeOpacity={0.8}
              >
                <Ionicons
                  name={icon}
                  size={20}
                  color={scrolled ? "#000" : "#fff"}
                />
              </TouchableOpacity>
            )
          )}
        </View>
      </View>
    </View>
  );
}
