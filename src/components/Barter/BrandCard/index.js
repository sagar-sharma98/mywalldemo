import { View, Text, Image, TouchableOpacity } from 'react-native';

const RightArrowIcon = () => (
  <Text style={{ fontSize: 20, color: '#fff', fontWeight: '300' }}>→</Text>
);

export default function BrandCard({ brand }) {
  const bannerHeight = 220; // increased
  const bottomSectionHeight = 130; // increased

  return (
    <View
      style={{
        marginHorizontal: 16,
        marginVertical: 12,
        borderRadius: 16,
        backgroundColor: '#fff',
        overflow: 'hidden',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
      }}
    >
      {/* Banner Image with padding */}
      <View style={{ paddingHorizontal: 12, paddingTop: 12 }}>
        <Image
          source={{ uri: brand.banner }}
          style={{
            width: '100%',
            height: bannerHeight,
            backgroundColor: '#f0f0f0',
            borderRadius: 12,
          }}
          resizeMode="cover"
        />
      </View>

      {/* Bottom Section - Transparent */}
      <View
        style={{
          height: bottomSectionHeight,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: 'transparent',
        }}
      >
        {/* Left Side: Logo, Name, URL */}
        <View style={{ flex: 1 }}>
          {/* Instagram Logo and Followers */}
          <View style={{ marginBottom: 8 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../../../../assets/icons/instagram.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 6,
                }}
              />
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#333' }}>
                {brand.instagramFollowers}
              </Text>
            </View>
          </View>

          {/* Company Logo and Info Row */}
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            {/* Logo Circle */}
            {brand.logo ? (
              <Image
                source={{ uri: brand.logo }}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 28,
                  backgroundColor: '#f0f0f0',
                  marginRight: 12,
                }}
                resizeMode="cover"
              />
            ) : (
              <View
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 28,
                  backgroundColor: '#e0e0e0',
                  marginRight: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 28, color: '#999' }}>🏢</Text>
              </View>
            )}

            {/* Company Info */}
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  color: '#333',
                  marginBottom: 3,
                }}
                numberOfLines={1}
              >
                {brand.name}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#666',
                  marginBottom: 6,
                }}
                numberOfLines={1}
              >
                {brand.companyUrl}
              </Text>

              {/* Instagram Followers Below URL - Removed */}
            </View>
          </View>
        </View>

        {/* Right: Circular Arrow Button - Smaller */}
        <TouchableOpacity
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            backgroundColor: '#000',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 12,
          }}
        >
          <RightArrowIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}
