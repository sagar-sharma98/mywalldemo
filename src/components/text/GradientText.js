import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

export function GradientText({ children, style }) {
  return (
    <MaskedView
      maskElement={
        <Text style={[style, { backgroundColor: "transparent" }]}>
          {children}
        </Text>
      }
    >
      <LinearGradient
        colors={["#9c2cf3", "#1a47e8"]}
        start={{ x: 0.5, y: 1 }}   // ⬅️ 177deg approx
        end={{ x: 0.5, y: 0 }}
      >
        <Text style={[style, { opacity: 0 }]}>{children}</Text>
      </LinearGradient>
    </MaskedView>
  );
}
