import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SectionHeading({ title }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 24,
        marginBottom: 16,
      }}
    >
      <LinearGradient
        colors={["#f8f8f8", "#4701e3"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          flex: 1,
          height: 2,
          marginRight: 12,
        }}
      />

      <Text style={{ fontSize: 16, fontWeight: "700", color: "#111" }}>
        {title}
      </Text>
      <LinearGradient
        colors={["#4701e3", "#f8f8f8"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          flex: 1,
          height: 2,
          marginLeft: 12,
        }}
      />
    </View>
  );
}
