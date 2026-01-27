import { View, Text, Image, Dimensions } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';

const screenWidth = Dimensions.get('window').width;
const cardWidth = screenWidth * 0.85; // 85% of screen width

export default function SalonSliderCard({ salon, isFocused = false }) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Proper video cleanup
    return () => {
      if (videoRef.current) {
        videoRef.current.unloadAsync().catch(() => {});
      }
    };
  }, []);

  useEffect(() => {
    // Handle video playback based on focus
    if (videoRef.current) {
      if (isFocused) {
        videoRef.current.playAsync().catch(() => {});
      } else {
        videoRef.current.pauseAsync().catch(() => {});
      }
    }
  }, [isFocused]);

  const getServicesDisplay = () => {
    if (salon.services) {
      const value = salon.services / 1000;
      return `FREE UP TO ₹${salon.services.toLocaleString()}`;
    }
    return null;
  };

  return (
    <View
      style={{
        marginRight: 12,
        borderRadius: 12,
        backgroundColor: '#fff',
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 3,
        width: cardWidth,
        height: 320,
      }}
    >
      {/* Banner/Video Container */}
      <View style={{ position: 'relative', flex: 1 }}>
        {/* Video Content */}
        {salon.bannerVideo ? (
          <Video
            ref={videoRef}
            source={{ uri: salon.bannerVideo }}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#000',
            }}
            rate={1.0}
            volume={1.0}
            isMuted={true}
            resizeMode="cover"
            isLooping
            shouldPlay={isFocused}
            useNativeControls={false}
            onError={(error) => console.warn('Video error:', error)}
            onLoad={() => console.log('Video loaded')}
            onReadyForDisplay={() => {
              if (isFocused && videoRef.current) {
                videoRef.current.playAsync().catch(() => {});
              }
            }}
          />
        ) : salon.banner ? (
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
            <Text style={{ fontSize: 30 }}>🎬</Text>
          </View>
        )}

        {/* Top Left Instagram Badge */}
        <View style={{ position: 'absolute', top: 8, left: 8 }}>
          <View
            style={{
              paddingVertical: 6,
              paddingHorizontal: 8,
              borderRadius: 12,
              backgroundColor: '#fff',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              source={require('../../../../assets/icons/instagram.png')}
              style={{
                width: 14,
                height: 14,
                marginRight: 4,
              }}
            />
            <Text style={{ color: '#333', fontSize: 11, fontWeight: '700' }}>
              {salon.instagramFollowers}
            </Text>
          </View>
        </View>

        {/* Bottom Gradient Overlay with Info */}
        <LinearGradient
          colors={[
            '#00145b',
            'rgba(7, 61, 255, 0.78)',
            'rgba(91, 127, 255, 0.48)',
            'rgba(117, 148, 255, 0)',
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 10,
            paddingVertical: 10,
            minHeight: 95,
            justifyContent: 'flex-end',
          }}
        >
          {/* Logo and Info Row */}
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            {/* Logo Circle */}
            {salon.logo ? (
              <Image
                source={{ uri: salon.logo }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  marginRight: 10,
                }}
                resizeMode="cover"
              />
            ) : (
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  marginRight: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 18, color: '#fff' }}>🏢</Text>
              </View>
            )}

            {/* Title and Location */}
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  color: '#fff',
                  marginBottom: 3,
                }}
                numberOfLines={1}
              >
                {salon.name}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                <Text style={{ fontSize: 11, marginRight: 4, color: '#fff' }}>◉</Text>
                <Text
                  style={{
                    fontSize: 11,
                    color: '#fff',
                  }}
                  numberOfLines={1}
                >
                  {salon.location}
                </Text>
              </View>

              {/* Divider */}
              <View style={{ height: 1, backgroundColor: 'rgba(255, 255, 255, 0.3)', marginBottom: 8 }} />

              {/* Services Info */}
              {salon.services && (
                <View>
                  <Text style={{ fontSize: 11, fontWeight: '700', color: '#fff', marginBottom: 2 }}>
                    SERVICE
                  </Text>
                  <Text style={{ fontSize: 11, fontWeight: '700', color: '#fff' }}>
                    {getServicesDisplay()}
                  </Text>
                </View>
              )}
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}
