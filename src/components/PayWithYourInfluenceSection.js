import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { GradientText } from "./text/GradientText";

export default function PayWithInfluenceSection() {
  return (
    <LinearGradient
      colors={["#914bfc", "#1a47e8"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      {/* LEFT ICON */}
      <Ionicons
        name="videocam"
        size={32}
        color="#000"
        style={styles.leftIcon}
      />

      {/* RIGHT ICON */}
      <Ionicons
        name="add-circle"
        size={32}
        color="#000"
        style={styles.rightIcon}
      />

      {/* TITLE */}
      <Text style={styles.title}>PAY WITH YOUR INFLUENCE</Text>

      {/* STATS */}
      <View style={styles.row}>
        <StatBox title="Creators" value="1K+" subtitle="Active" />
        <StatBox title="Followers" value="50K+" subtitle="Reach" />
        <StatBox title="Brands" value="300+" subtitle="Trusted" />
      </View>
    </LinearGradient>
  );
}

function StatBox({ title, value, subtitle }) {
  return (
    <View style={styles.box}>
      <GradientText style={styles.smallText}>{title}</GradientText>
      <GradientText style={styles.bigText}>{value}</GradientText>
      <GradientText style={styles.smallText}>{subtitle}</GradientText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 36,
    paddingVertical: 36,
    borderRadius: 26,
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 28,
  },

  leftIcon: {
    position: "absolute",
    left: 18,
    top: 16,
    transform: [{ rotate: "-15deg" }],
  },

  rightIcon: {
    position: "absolute",
    right: 18,
    top: 16,
    transform: [{ rotate: "15deg" }],
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 12,
  },

  box: {
    width: "32%", // controls size
    aspectRatio: 1, // ⬅️ MAKES IT PERFECT SQUARE
    backgroundColor: "#fff",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },

  smallText: {
    fontSize: 13,
    fontWeight: "600",
  },

  bigText: {
    fontSize: 30,
    fontWeight: "800",
    marginVertical: 6,
  },
});
