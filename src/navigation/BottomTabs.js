import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import MyCollabsScreen from "../screens/MyCollabsScreen";
import LinkInBioScreen from "../screens/LinkInBioScreen";
import AnalyticsScreen from "../screens/AnalyticsScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ size = 24 }) => {
          let iconName;

          if (route.name === "Home") iconName = "home-outline";
          if (route.name === "MyCelebs") iconName = "people-outline";
          if (route.name === "LinkInBio") iconName = "link-outline";
          if (route.name === "Analytics") iconName = "bar-chart-outline";

          return <Ionicons name={iconName} size={size} color="black" />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: true }}
      />
      <Tab.Screen name="MyCelebs" component={MyCollabsScreen} />
      <Tab.Screen name="LinkInBio" component={LinkInBioScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
    </Tab.Navigator>
  );
}
