import { Animated, View, Text } from "react-native";
import { useRef, useLayoutEffect } from "react";
import HomeHeader from "../components/HomeHeader";
import HomeCarouselSection from "../components/HomeCarouselSection";
import HomeSearchSection from "../components/HomeSearchSection";
import TopExperienceSection from "../components/TopExperienceSection";
import ExploreStatesSection from "../components/ExploreStatesSection";
import PlanYourStaySection from "../components/PlanYourStaySection";
import TopCreatorStoriesSection from "../components/TopCreatorStoriesSection";
import BrandsYoullLoveSection from "../components/BrandsYoullLoveSection";
import PayWithYourInfluenceSection from "../components/PayWithYourInfluenceSection";
import FoodMoodSection from "../components/FoodMoodSection";
import DestinationFreeStaySection from "../components/DestinationFreeStaySection";

export default function HomeScreen({ navigation }) {
  const scrollY = useRef(new Animated.Value(0)).current;

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <HomeHeader scrollY={scrollY} />,
    });
  }, [navigation]);

  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false },
      )}
    >
      <HomeSearchSection />
      <HomeCarouselSection />
      <TopExperienceSection />
      <ExploreStatesSection />
      <PlanYourStaySection />
      <TopCreatorStoriesSection />
      <BrandsYoullLoveSection/>
      <PayWithYourInfluenceSection/>
      <FoodMoodSection/>
      <DestinationFreeStaySection/>

      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Page Content</Text>
      </View>
    </Animated.ScrollView>
  );
}
