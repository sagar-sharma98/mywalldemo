import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ExploreCampaignCategories from './Barter/ExploreCampaignCategories';
import HotelCampaignSection from './Barter/HotelCampaignSection';
import RestaurantCampaignSection from './Barter/RestaurantCampaignSection';
import ProductCampaignSection from './Barter/ProductCampaignSection';
import SalonCampaignSection from './Barter/SalonCampaignSection';

export default function BarterContent() {
  const [selectedCategory, setSelectedCategory] = useState('HOTELS');

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ExploreCampaignCategories 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      {selectedCategory === 'HOTELS' && <HotelCampaignSection />}
      {selectedCategory === 'RESTAURANTS' && <RestaurantCampaignSection />}
      {selectedCategory === 'PRODUCTS' && <ProductCampaignSection />}
      {selectedCategory === 'SALONS' && <SalonCampaignSection />}

      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Barter Content</Text>
        <Text style={{ marginTop: 12, fontSize: 14, color: '#666' }}>
          Barter opportunities and deals will appear here.
        </Text>
      </View>
    </ScrollView>
  );
}
