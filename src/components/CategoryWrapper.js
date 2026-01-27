import { Animated, View } from "react-native";
import { useRef, useLayoutEffect } from "react";
import HomeHeader from "./HomeHeader";
import HomeSearchSection from "./HomeSearchSection";

export default function CategoryWrapper({ navigation, children, activeCategory }) {
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
      <HomeSearchSection navigation={navigation} activeCategory={activeCategory} />
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </Animated.ScrollView>
  );
}
