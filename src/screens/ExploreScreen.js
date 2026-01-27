import { View, Text } from "react-native";
import CategoryWrapper from "../components/CategoryWrapper";
import HomeCarouselSection from "../components/HomeCarouselSection";
import TopExperienceSection from "../components/TopExperienceSection";
import ExploreStatesSection from "../components/ExploreStatesSection";
import PlanYourStaySection from "../components/PlanYourStaySection";
import TopCreatorStoriesSection from "../components/TopCreatorStoriesSection";
import BrandsYoullLoveSection from "../components/BrandsYoullLoveSection";
import PayWithYourInfluenceSection from "../components/PayWithYourInfluenceSection";
import FoodMoodSection from "../components/FoodMoodSection";
import DestinationFreeStaySection from "../components/DestinationFreeStaySection";

export default function ExploreScreen({ navigation }) {
  return (
    <CategoryWrapper navigation={navigation} activeCategory="1">
      <HomeCarouselSection />
      <TopExperienceSection />
      <ExploreStatesSection />
      <PlanYourStaySection />
      <TopCreatorStoriesSection />
      <BrandsYoullLoveSection />
      <PayWithYourInfluenceSection />
      <FoodMoodSection />
      <DestinationFreeStaySection />

      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Explore Content</Text>
      </View>
    </CategoryWrapper>
  );
}
