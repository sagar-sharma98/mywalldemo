import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SvgUri } from "react-native-svg";
import { signIn, signUp, signOut } from "aws-amplify/auth";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { generateTempPassword } from "../../../utility/helper";
import { setAuthUser } from "../../../store/slice/authSlice";
import { useDispatch } from "react-redux";

export default function SignInScreen({ navigation }) {
  const [phone, setPhone] = useState("+91");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSendOtp = useCallback(async () => {
    if (phone.length !== 13) {
      Alert.alert("Invalid number", "Enter a valid WhatsApp number");
      return;
    }

    setLoading(true);

    try {
      // 👇 Force logout if already logged in
      try {
        await signOut({ global: true });
      } catch (e) {
        // ignore if not logged in
      }

      // Try signup first (for new users)
      try {
        await signUp({
          username: phone,
          password: generateTempPassword(),
          options: {
            userAttributes: {
              phone_number: phone,
            },
          },
        });
      } catch (signupError) {
        // Ignore if user already exists
      }

      // 👇 This will ALWAYS trigger OTP now
      const result = await signIn({
        username: phone,
        options: {
          authFlowType: "CUSTOM_WITHOUT_SRP",
        },
      });

      dispatch(setAuthUser(result));

      if (
        result?.nextStep?.signInStep === "CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE"
      ) {
        navigation.navigate("Otp", { phone });
      }
    } catch (error) {
      Alert.alert("Error", error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [phone, navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            {/* TOP IMAGE SECTION */}
            <View style={styles.topImageWrapper}>
              <SvgUri
                uri="https://mywall.me/assets/svg/signInPage.svg"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                style={StyleSheet.absoluteFillObject}
              />

              <LinearGradient
                colors={["rgba(125, 52, 241, 0.05)", "rgba(4, 0, 14, 0.43)"]}
                locations={[0.2212, 0.7596]}
                style={styles.gradient}
              />
            </View>

            {/* SIGN IN CONTENT */}
            <View style={styles.signInCard}>
              <SvgUri
                uri="https://mywall.me/assets/svg/myWallTop.svg"
                width={100}
                height={44}
              />

              <Text style={styles.heading}>India's #1 Creator Lifestyle App</Text>
              <Text style={styles.subHeading}>Sign Up or Log In</Text>

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Enter Your WhatsApp Number</Text>

                <View style={styles.phoneInputContainer}>
                  <View style={styles.flagContainer}>
                    <SvgUri
                      uri="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1ee-1f1f3.svg"
                      width={24}
                      height={24}
                    />
                  </View>

                  <TextInput
                    style={styles.phoneInput}
                    placeholder="Enter WhatsApp number"
                    placeholderTextColor="#999"
                    keyboardType="number-pad"
                    value={phone}
                    onChangeText={setPhone}
                    maxLength={13}
                  />
                </View>

                <Text style={styles.infoText}>
                  We will send you a code to confirm your number
                </Text>
              </View>

              <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>

              <Text style={styles.footerText}>
                By continuing, you agree to our T&amp;C
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  topImageWrapper: {
    height: "50%",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#fff",
  },

  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  signInCard: {
    backgroundColor: "#fff",
    marginTop: -50,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingHorizontal: 24,
    paddingTop: 36,
    // paddingBottom: 40,
    alignItems: "center",
  },

  heading: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 20,
    textAlign: "center",
  },

  subHeading: {
    fontSize: 14,
    color: "#555",
    marginBottom: 24,
    textAlign: "center",
  },

  inputWrapper: {
    width: "100%",
    marginBottom: 20,
  },

  label: {
    fontSize: 12,
    color: "#333",
    marginBottom: 6,
  },

  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    height: 48,
    width: "100%",
  },

  flagContainer: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },

  phoneInput: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 10,
    fontSize: 14,
  },

  infoText: {
    marginTop: 6,
    fontSize: 11,
    color: "rgba(0, 51, 230, 0.9)",
    textAlign: "center",
  },

  button: {
    width: "100%",
    height: 48,
    backgroundColor: "rgba(0, 51, 230, 0.9)",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },

  footerText: {
    fontSize: 12,
    color: "#333",
    marginTop: 12,
    textAlign: "center",
  },
});
