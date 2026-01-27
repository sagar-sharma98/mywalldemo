import { View, Text } from 'react-native';
import BarterCampaignPrompt from '../BarterCampaignPrompt';
import CampaignCardGrid from '../CampaignCardGrid';
import { mockCampaignData } from '../../../services/mockCampaignData';

export default function HotelCampaignSection() {
  return (
    <View style={{ backgroundColor: '#f9f9f9', paddingVertical: 16 }}>
      <BarterCampaignPrompt />
      
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 12 }}>
          Hotel Campaigns
        </Text>
        
        <CampaignCardGrid items={mockCampaignData.HOTELS} />
      </View>
    </View>
  );
}
