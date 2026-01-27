import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SalonCard({ salon }) {
  const getServicesDisplay = () => {
    if (salon.services) {
      const value = salon.services / 1000;
      return `Up to ${value}k`;
    }
    return null;
  };

  return (
    <View
      style={{
        marginHorizontal: 16,
        marginVertical: 12,
        borderRadius: 12,
        backgroundColor: '#fff',
        overflow: 'hidden',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
      }}
    >
      {/* Banner Section with Overlays */}
      <View style={{ position: 'relative', height: 200 }}>
        {/* Banner Image */}
        {salon.banner ? (
          <Image
            source={{ uri: salon.banner }}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#f0f0f0',
            }}
            resizeMode="cover"
          />
        ) : (
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#e8e8e8',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 40 }}>🏪</Text>
          </View>
        )}

        {/* Top Left Badge - Removed */}

        {/* Top Right Badge - Fast Approval - Smaller */}
        {salon.approval && (
          <View style={{ position: 'absolute', top: 12, right: 12 }}>
            <View
              style={{
                paddingVertical: 8,
                paddingHorizontal: 10,
                borderRadius: 8,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 14, marginRight: 4 }}>⌚</Text>
              <Text style={{ color: '#fff', fontSize: 12, fontWeight: '700' }}>
                {salon.approval}
              </Text>
            </View>
          </View>
        )}
      </View>

      {/* Bottom Section - Transparent */}
      <View
        style={{
          paddingHorizontal: 12,
          paddingVertical: 12,
          backgroundColor: 'transparent',
        }}
      >
        {/* Instagram Followers */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <View style={{
            width: 20,
            height: 20,
            backgroundColor: '#E4405F',
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 6,
          }}>
            <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'bold' }}>📷</Text>
          </View>
          <Text style={{ color: '#333', fontSize: 12, fontWeight: '600' }}>
            {salon.instagramFollowers}
          </Text>
        </View>

        {/* Logo, Name, Location */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
          {/* Logo Circle */}
          {salon.logo ? (
            <Image
              source={{ uri: salon.logo }}
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: '#f0f0f0',
                marginRight: 10,
              }}
              resizeMode="cover"
            />
          ) : (
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: '#e0e0e0',
                marginRight: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 20, color: '#999' }}>🏢</Text>
            </View>
          )}

          {/* Company Name and Location */}
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                color: '#333',
                marginBottom: 3,
              }}
              numberOfLines={1}
            >
              {salon.name}
            </Text>

            {/* Location with Icon */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 11, marginRight: 4, color: '#666' }}>◉</Text>
              <Text
                style={{
                  fontSize: 11,
                  color: '#666',
                }}
                numberOfLines={1}
              >
                {salon.location}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
