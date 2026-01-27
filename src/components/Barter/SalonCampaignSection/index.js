import { View, Text, ScrollView } from 'react-native';
import BarterCampaignPrompt from '../BarterCampaignPrompt';
import CampaignCardGrid from '../CampaignCardGrid';
import SalonCard from '../SalonCard';
import SalonSlider from '../SalonSlider';
import { mockCampaignData } from '../../../services/mockCampaignData';
import { mockSalonData, mockSalonSliderData } from '../../../services/mockSalonData';
import SectionHeading from '../../common/SectionHeading';

export default function SalonCampaignSection() {
  return (
    <View style={{ backgroundColor: '#f9f9f9', flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BarterCampaignPrompt />
        
        <View style={{ paddingHorizontal: 16 }}>
          <CampaignCardGrid items={mockCampaignData.SALONS} />
        </View>

        {/* Salon Slider Section */}
        <SalonSlider salons={mockSalonSliderData} />

        {/* Featured Salons Section with BARTER Heading */}
        <View style={{ paddingVertical: 16, paddingBottom: 30 }}>
          <SectionHeading title="BARTER" />
          
          {mockSalonData.map((salon) => (
            <SalonCard key={salon.id} salon={salon} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
