import { View, Text, TouchableOpacity } from 'react-native';

export default function BarterCampaignPrompt() {
  const handleApply = () => {
    // Handle apply action
    console.log('Apply pressed');
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        padding: 6,
        backgroundColor: '#f4fbf7',
        borderWidth: 1,
        borderColor: '#d1f9df',
        borderRadius: 12,
        marginVertical: 16,
        marginHorizontal: 16,
      }}
    >
      <Text
        style={{
          flex: 1,
          fontSize: 14,
          fontWeight: '400',
          color: '#333',
        }}
      >
        Do you want barter campaigns?
      </Text>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleApply}
        style={{
          backgroundColor: '#1849d6',
          paddingVertical: 8,
          paddingHorizontal: 20,
          borderRadius: 6,
        }}
      >
        <Text
          style={{
            color: '#ffffff',
            fontSize: 14,
            fontWeight: '600',
          }}
        >
          Apply
        </Text>
      </TouchableOpacity>
    </View>
  );
}
