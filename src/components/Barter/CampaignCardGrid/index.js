import { View, Text, Image, FlatList } from 'react-native';

export default function CampaignCardGrid({ items = [] }) {
  const renderItem = ({ item }) => (
    <View
      style={{
        flex: 1,
        marginHorizontal: 8,
        marginVertical: 8,
        alignItems: 'center',
      }}
    >
      {/* Square Image Box */}
      <Image
        source={{ uri: item.image }}
        style={{
          width: '100%',
          aspectRatio: 1,
          borderRadius: 12,
          backgroundColor: '#f0f0f0',
        }}
        resizeMode="cover"
      />

      {/* Title Below */}
      <Text
        style={{
          marginTop: 8,
          fontSize: 12,
          fontWeight: '600',
          color: '#333',
          textAlign: 'center',
          width: '100%',
        }}
        numberOfLines={2}
      >
        {item.title}
      </Text>
    </View>
  );

  return (
    <View style={{ paddingHorizontal: 0 }}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
        scrollEnabled={false}
        columnWrapperStyle={{
          paddingHorizontal: 8,
        }}
      />
    </View>
  );
}
