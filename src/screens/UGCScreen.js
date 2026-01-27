import { View, Text } from "react-native";
import CategoryWrapper from "../components/CategoryWrapper";

export default function UGCScreen({ navigation }) {
  return (
    <CategoryWrapper navigation={navigation} activeCategory="5">
      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>User Generated Content</Text>
        <Text style={{ marginTop: 12, fontSize: 14, color: "#666" }}>
          UGC opportunities and campaigns will appear here.
        </Text>
      </View>
    </CategoryWrapper>
  );
}
