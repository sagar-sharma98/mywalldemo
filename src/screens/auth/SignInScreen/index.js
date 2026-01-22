import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SvgUri } from "react-native-svg";
import { Auth } from "aws-amplify";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen({ navigation }) {
  const [phone, setPhone] = useState("+91");

  const handleSendOtp = async () => {
    try {
      if (phone.length < 13) {
        Alert.alert("Invalid number", "Enter a valid phone number");
        return;
      }

      // existing user login
      await Auth.signIn(phone);
      navigation.navigate("Otp", { phone });
    } catch (error) {
      // user does not exist
      if (error.code === "UserNotFoundException") {
        try {
          await Auth.signUp({
            username: phone,
            password: Math.random().toString(36) + "Aa1!",
            attributes: {
              phone_number: phone,
            },
          });

          navigation.navigate("Otp", { phone });
        } catch (signupError) {
          Alert.alert("Signup Error", signupError.message);
        }
      } else {
        Alert.alert("Error", error.message);
      }
    }
  };

  const continueHandler = () => {
    navigation.navigate("Otp", { phone });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
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
    height: "48%",
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
    flex: 1,
    backgroundColor: "#fff",
    marginTop: -60,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingHorizontal: 24,
    paddingTop: 36,
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
