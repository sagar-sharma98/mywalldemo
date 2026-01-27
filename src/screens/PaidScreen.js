import { View, Text } from "react-native";
import CategoryWrapper from "../components/CategoryWrapper";

export default function PaidScreen({ navigation }) {
  return (
    <CategoryWrapper navigation={navigation} activeCategory="4">
      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Paid Collaborations</Text>
        <Text style={{ marginTop: 12, fontSize: 14, color: "#666" }}>
          Paid collaboration opportunities will appear here.
        </Text>
      </View>
    </CategoryWrapper>
  );
}
