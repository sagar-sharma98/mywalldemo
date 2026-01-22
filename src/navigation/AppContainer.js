import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "./BottomTabs";
import AuthScreen from "./auth";

const Stack = createNativeStackNavigator();

export default function AppContainer() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade",
        animationDuration: 300,
      }}
    >
      <Stack.Screen name="auth" component={AuthScreen} />
      <Stack.Screen name="main" component={BottomTabs} />
    </Stack.Navigator>
  );
}
