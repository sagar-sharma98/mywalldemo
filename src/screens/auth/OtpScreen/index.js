import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SvgUri } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OtpScreen({ route }) {
  const { phone } = route.params || {};
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length < 6) {
      Alert.alert("Error", "Please enter complete OTP");
      return;
    }

    setLoading(true);

    // 🔹 Frontend OTP check (mock)
    setTimeout(() => {
      setLoading(false);

      if (enteredOtp !== EXPECTED_OTP) {
        Alert.alert("Invalid OTP", "Please enter the correct OTP");
        return;
      }

      // ✅ Save user data in Redux
      dispatch(
        setUserDetails({
          phone,
          name: null, // you can update later
        }),
      );

      Alert.alert("Success", "OTP verified successfully");

      // 🔜 Navigate to next screen later
      // navigation.replace("Home");
    }, 800);
  };

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 40}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            {/* TOP IMAGE */}
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
                style={styles.gradient}
              />
            </View>

            {/* OTP CARD */}
            <View style={styles.otpCard}>
              <SvgUri
                uri="https://mywall.me/assets/svg/myWallTop.svg"
                width={100}
                height={44}
              />

              <Text style={styles.heading}>OTP Verification</Text>
              <Text style={styles.subHeading}>
                We have sent a verification code on your WhatsApp
              </Text>

              {/* PHONE */}
              <View style={styles.phoneRow}>
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
                  }}
                  style={styles.whatsappIcon}
                />
                <Text style={styles.phoneText}>{phone}</Text>
              </View>

              {/* OTP INPUTS */}
              <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    style={styles.otpBox}
                    keyboardType="number-pad"
                    maxLength={1}
                    value={digit}
                    onChangeText={(value) => handleOtpChange(value, index)}
                    returnKeyType="done"
                  />
                ))}
              </View>

              {/* BUTTON */}
              <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
                <Text style={styles.buttonText}>Verify OTP</Text>
              </TouchableOpacity>

              <Text style={styles.didntGet}>Didn’t get the OTP?</Text>
              <Text style={styles.resendLink}>Resend OTP</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },

  container: { flex: 1 },

  topImageWrapper: {
    height: 300,
    width: "100%",
    position: "relative",
    overflow: "hidden",
  },

  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  otpCard: {
    backgroundColor: "#fff",
    marginTop: -60,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingHorizontal: 24,
    paddingTop: 36,
    paddingBottom: 40,
    alignItems: "center",
  },

  heading: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 16,
    textAlign: "center",
  },

  subHeading: {
    fontSize: 14,
    color: "#747197",
    marginTop: 6,
    textAlign: "center",
  },

  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    gap: 6,
  },

  whatsappIcon: {
    width: 18,
    height: 18,
  },

  phoneText: {
    fontSize: 14,
    color: "#1f0b48",
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 30,
  },

  otpBox: {
    width: 46,
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    textAlign: "center",
    fontSize: 18,
  },

  button: {
    width: "100%",
    height: 48,
    backgroundColor: "rgba(0, 51, 230, 0.9)",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },

  didntGet: {
    fontSize: 13,
    color: "#333",
    marginTop: 16,
  },

  resendLink: {
    fontSize: 13,
    color: "#0033E6",
    fontWeight: "500",
    marginTop: 4,
  },
});
