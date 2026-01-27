import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const CATEGORY_DATA = [
  { id: '1', title: 'Explore', icon: 'compass-outline' },
  { id: '2', title: 'Barter', icon: 'swap-horizontal-outline' },
  { id: '3', title: 'Affiliate', icon: 'link-outline' },
  { id: '4', title: 'Paid', icon: 'cash-outline' },
  { id: '5', title: 'UGC', icon: 'videocam-outline' },
];

export default function HomeSearchSection({ activeCategory = '1', onTabChange }) {
  const [activeId, setActiveId] = useState(activeCategory);

  useEffect(() => {
    setActiveId(activeCategory);
  }, [activeCategory]);

  return (
    <LinearGradient
      colors={['#7807d0', '#0e30ab']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{
        paddingHorizontal: 16,
        paddingVertical: 20,
      }}
    >
      {/* CATEGORY ROW */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 18,
        }}
      >
        {CATEGORY_DATA.map((item) => {
          const isActive = item.id === activeId;

          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                setActiveId(item.id);
                if (onTabChange) {
                  onTabChange(item.id);
                }
              }}
              activeOpacity={0.8}
              style={{
                alignItems: 'center',
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: '#ffffff',
                backgroundColor: isActive ? '#ffffff' : 'transparent',
                width: '18%', // fits 5 boxes nicely
              }}
            >
              <Ionicons
                name={item.icon}
                size={22}
                color={isActive ? '#0e30ab' : '#ffffff'}
              />

              <Text
                style={{
                  marginTop: 6,
                  fontSize: 11,
                  fontWeight: '600',
                  color: isActive ? '#0e30ab' : '#ffffff',
                }}
                numberOfLines={1}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* SEARCH BOX */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          borderRadius: 22,
          paddingHorizontal: 16,
          height: 48,
        }}
      >
        <Ionicons
          name="search-outline"
          size={20}
          color="#b0b0b0"
          style={{ marginRight: 10 }}
        />

        <TextInput
          placeholder="Search brands, collabs, location"
          placeholderTextColor="#b0b0b0"
          style={{
            flex: 1,
            fontSize: 14,
            color: '#000',
          }}
        />
      </View>
    </LinearGradient>
  );
}
