import { View, Text, ScrollView, Dimensions } from 'react-native';
import { useState } from 'react';
import SalonSliderCard from '../SalonSliderCard';
import SectionHeading from '../../common/SectionHeading';

const screenWidth = Dimensions.get('window').width;

export default function SalonSlider({ salons = [] }) {
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const cardWidth = screenWidth * 0.85 + 12; // card width + margin
    const index = Math.round(contentOffsetX / cardWidth);
    setFocusedIndex(Math.max(0, Math.min(index, salons.length - 1)));
  };

  return (
    <View style={{ paddingVertical: 16 }}>
      <SectionHeading title="FEATURED BARTER" />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 16 }}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        snapToInterval={screenWidth * 0.85 + 12}
        decelerationRate="fast"
      >
        {salons.map((salon, index) => (
          <SalonSliderCard 
            key={salon.id} 
            salon={salon} 
            isFocused={index === focusedIndex}
          />
        ))}
      </ScrollView>
    </View>
  );
}
