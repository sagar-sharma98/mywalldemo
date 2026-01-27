import { View, Text } from "react-native";
import CategoryWrapper from "../components/CategoryWrapper";
import ExploreCampaignCategories from "../components/ExploreCampaignCategories";

export default function BarterScreen({ navigation }) {
  return (
    <CategoryWrapper navigation={navigation} activeCategory="2">
      <ExploreCampaignCategories />
      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Barter Content</Text>
        <Text style={{ marginTop: 12, fontSize: 14, color: "#666" }}>
          Barter opportunities and deals will appear here.
        </Text>
      </View>
    </CategoryWrapper>
  );
}
