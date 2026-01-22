import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../../screens/auth/SignInScreen";
import OtpScreen from "../../screens/auth/OtpScreen";

const Stack = createNativeStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
    </Stack.Navigator>
  );
}
