import { View, Text } from "react-native";
import CategoryWrapper from "../components/CategoryWrapper";

export default function AffiliateScreen({ navigation }) {
  return (
    <CategoryWrapper navigation={navigation} activeCategory="3">
      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Affiliate Content</Text>
        <Text style={{ marginTop: 12, fontSize: 14, color: "#666" }}>
          Affiliate opportunities and commissions will appear here.
        </Text>
      </View>
    </CategoryWrapper>
  );
}
