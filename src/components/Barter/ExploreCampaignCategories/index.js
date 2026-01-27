import { View, Text, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { icons } from "../../../../assets/icons/index.jsx";
import { CAMPAIGN_CATEGORIES as COMMON_CATEGORIES } from "../../../utility/common.js";
import { SvgUri } from "react-native-svg";

// map common ids to project icons
const ICON_MAP = {
  HOTELS: icons.HotelIcon,
  RESTAURANTS: icons.RestaurantIcon,
  PRODUCTS: icons.ProductIcon,
  SALONS: icons.SalonIcon,
  FOR_YOU: icons.ProductIcon,
};

export default function ExploreCampaignCategories({ selectedCategory, onSelectCategory }) {
  const categories = COMMON_CATEGORIES || [];

  return (
    <View
      style={{
        paddingVertical: 12,
        backgroundColor: "#0e30ab",
      }}
    >
      {/* Categories row (non-scrollable) */}
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 16,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {categories
          .filter((c) => c.id !== "FOR_YOU")
          .slice(0, 4)
          .map((category, idx) => {
            const isSelected = category.id === selectedCategory;

            return (
              <Pressable
                key={category.id}
                onPress={() => onSelectCategory(category.id)}
                style={{
                  flex: 1,
                  marginHorizontal: 3,
                  borderRadius: 12,
                  //   overflow: 'hidden',
                  elevation: isSelected ? 8 : 0,
                  shadowColor: isSelected ? "#000" : "transparent",
                  shadowOffset: isSelected
                    ? { width: 0, height: 2 }
                    : { width: 0, height: 0 },
                  shadowOpacity: isSelected ? 0.25 : 0,
                  shadowRadius: isSelected ? 3.84 : 0,
                }}
              >
                {(() => {
                  const IconComp = ICON_MAP[category.id] || category.icon;

                  const content = (
                    <View
                      style={{
                        alignItems: "center",
                        paddingVertical: 12,
                        paddingHorizontal: 8,
                      }}
                    >
                      {/* icon */}
                      {typeof IconComp === "function" ? (
                        <IconComp
                          width={24}
                          height={24}
                          style={{ marginBottom: 6 }}
                        />
                      ) : typeof IconComp === "string" ? (
                        <SvgUri
                          uri={IconComp}
                          width={24}
                          height={24}
                          style={{ marginBottom: 6 }}
                        />
                      ) : typeof IconComp === "number" ? (
                        (() => {
                          try {
                            const resolved = Image.resolveAssetSource(IconComp);
                            if (resolved && resolved.uri) {
                              return (
                                <SvgUri
                                  uri={resolved.uri}
                                  width={24}
                                  height={24}
                                  style={{ marginBottom: 6 }}
                                />
                              );
                            }
                          } catch (e) {
                            return null;
                          }
                          return null;
                        })()
                      ) : null}

                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: isSelected ? "700" : "500",
                          color: "#ffffff",
                          marginTop: 4,
                          textAlign: "center",
                        }}
                      >
                        {category.label}
                      </Text>
                    </View>
                  );

                  return isSelected ? (
                    <LinearGradient
                      colors={["#5922ff", "#3522b8"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      style={{ borderRadius: 12 }}
                    >
                      {content}
                    </LinearGradient>
                  ) : (
                    content
                  );
                })()}
              </Pressable>
            );
          })}
      </View>

      {/* Content area stays inside gradient (no white background) */}
      {/* <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#ffffff', marginBottom: 8 }}>
          {categoryNames[selectedCategory]} Campaigns
        </Text>
        <Text style={{ fontSize: 14, color: '#e6e6e6' }}>
          Here are the {categoryNames[selectedCategory].toLowerCase()} campaigns available for you.
        </Text>
      </View> */}
    </View>
  );
}
