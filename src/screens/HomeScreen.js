import { Animated, View, Text } from "react-native";
import { useState, useRef, useLayoutEffect } from "react";
import HomeHeader from "../components/HomeHeader";
import HomeSearchSection from "../components/HomeSearchSection";
import ExploreContent from "../components/ExploreContent";
import BarterContent from "../components/BarterContent";

export default function HomeScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState("1"); // 1=Explore, 2=Barter, 3=Affiliate, 4=Paid, 5=UGC
  const scrollY = useRef(new Animated.Value(0)).current;

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <HomeHeader scrollY={scrollY} />,
    });
  }, [navigation]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  

  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false },
      )}
    >
      <HomeSearchSection 
        activeCategory={activeTab} 
        onTabChange={handleTabChange}
      />
      {activeTab === '1' && <ExploreContent />}

      {activeTab === '2' && <BarterContent />}

      {activeTab === '3' && (
        <View style={{ padding: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>Affiliate Content</Text>
          <Text style={{ marginTop: 12, fontSize: 14, color: '#666' }}>
            Affiliate opportunities and commissions will appear here.
          </Text>
        </View>
      )}

      {activeTab === '4' && (
        <View style={{ padding: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>Paid Collaborations</Text>
          <Text style={{ marginTop: 12, fontSize: 14, color: '#666' }}>
            Paid collaboration opportunities will appear here.
          </Text>
        </View>
      )}

      {activeTab === '5' && (
        <View style={{ padding: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>User Generated Content</Text>
          <Text style={{ marginTop: 12, fontSize: 14, color: '#666' }}>
            UGC opportunities and campaigns will appear here.
          </Text>
        </View>
      )}
    </Animated.ScrollView>
  );
}
