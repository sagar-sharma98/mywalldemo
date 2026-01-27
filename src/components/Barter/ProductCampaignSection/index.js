import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useState, useCallback, useEffect } from 'react';
import BarterCampaignPrompt from '../BarterCampaignPrompt';
import CampaignCardGrid from '../CampaignCardGrid';
import BrandCard from '../BrandCard';
import { mockCampaignData } from '../../../services/mockCampaignData';
import { mockBrandData } from '../../../services/mockBrandData';
import { filterCampaignAPI } from '../../../services/handleApi';
import SectionHeading from '../../common/SectionHeading';

export default function ProductCampaignSection() {
  const [campaignsData, setCampaignsData] = useState({
    featured: [],
    isLoadingFeatured: false,
    isLoadingMoreFeatured: false,
    hasMoreFeatured: false,
    pageFeatured: 1,
  });

  const fetchFeaturedCampaigns = useCallback(
    async (page = 1, isLoadMore = false) => {
      try {
        setCampaignsData(prev => ({
          ...prev,
          isLoadingFeatured: page === 1,
          isLoadingMoreFeatured: page > 1,
        }));

        const payload = {
          type: 'BARTER',
          category: 'PRODUCTS',
          isFeatured: true,
        //   sortBy: 'campaignRollingScore',
        //   crmTags: ['INTERNAL'],
          size: 20,
          page: page,
        };

        const { items = [], pagination = {} } = await filterCampaignAPI(payload);

        console.log('Fetched featured product campaigns:', items);

        // const transformedFeaturedCampaigns = items.flatMap(campaign => {
        //   return (campaign.storesData || []).map(store => ({
        //     ...campaign,
        //     storeData: store,
        //   }));
        // });

        // setCampaignsData(prev => ({
        //   ...prev,
        //   featured: isLoadMore
        //     ? [...prev.featured, ...transformedFeaturedCampaigns]
        //     : transformedFeaturedCampaigns,
        //   hasMoreFeatured: page < pagination?.totalPages,
        //   pageFeatured: page,
        //   isLoadingFeatured: false,
        //   isLoadingMoreFeatured: false,
        // }));
      } catch (error) {
        console.error('Error fetching campaigns:', error);
        setCampaignsData(prev => ({
          ...prev,
          isLoadingFeatured: false,
          isLoadingMoreFeatured: false,
        }));
      }
    },
    []
  );

  useEffect(() => {
    fetchFeaturedCampaigns(1, false);
  }, [fetchFeaturedCampaigns]);

  return (
    <View style={{ backgroundColor: '#f9f9f9', flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BarterCampaignPrompt />
        
        <View style={{ paddingHorizontal: 16 }}>
          
          {campaignsData.isLoadingFeatured ? (
            <ActivityIndicator size="large" color="#1849d6" style={{ paddingVertical: 20 }} />
          ) : (
            <CampaignCardGrid items={mockCampaignData.PRODUCTS} />
          )}
        </View>

        {/* Brand Cards Section with BARTER Heading */}
        <View style={{ paddingVertical: 16, paddingBottom: 30 }}>
          <SectionHeading title="BARTER" />
          
          {mockBrandData.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
