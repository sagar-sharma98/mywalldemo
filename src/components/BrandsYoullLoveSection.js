import { View, Text, FlatList, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const BRANDS = [
  {
    id: "1",
    name: "Astra Coda",
    logo: "https://mywall-master.b-cdn.net/public/brandLogo/Product%20Brand%20logo%20.png-1760091936574?optimizer=image",
  },
  {
    id: "2",
    name: "Brewmash",
    logo: "https://mywall-master.b-cdn.net/public/brandLogo/Screenshot%202025-11-13%20124746.png-1763018510649?optimizer=image",
  },
  {
    id: "3",
    name: "A & A Luxury",
    logo: "https://mywall-master.b-cdn.net/public/brandLogo/Product%20Brand%20logo%20%20(1).jpg-1760601748773?optimizer=image",
  },
  {
    id: "4",
    name: "Lesenso",
    logo: "https://mywall-master.b-cdn.net/public/brandLogo/Product%20Brand%20logo%20.jpg-1763554176233?optimizer=image",
  },
  {
    id: "5",
    name: "Prevek",
    logo: "https://mywall-master.b-cdn.net/public/brandLogo/Screenshot%202026-01-09%20at%202.28.53%E2%80%AFPM.png-1767949148547?optimizer=image",
  },
  {
    id: "6",
    name: "Snowlys",
    logo: "https://mywall-master.b-cdn.net/public/brandLogo/Screenshot%202025-12-12%20at%2012.06.08%E2%80%AFPM.png-1765521488024?optimizer=image",
  },
  {
    id: "7",
    name: "Saba Jewels",
    logo: "https://mywall-master.b-cdn.net/public/brandLogo/Product%20Brand%20logo%20%20(1).jpg-1762519004755?optimizer=image",
  },
  {
    id: "8",
    name: "7/12 Fashion Studio",
    logo: "https://mywall-master.b-cdn.net/public/brandLogo/logo.jpg-1765523202560?optimizer=image",
  },
  {
    id: "9",
    name: "Radiome",
    logo: "https://mywall-master.b-cdn.net/public/brandLogo/logo.jpg-1756297727619?optimizer=image",
  },
  {
    id: "10",
    name: "Indo Bio Organics",
    logo: "https://mywall-master.b-cdn.net/public/brandLogo/Product%20Brand%20logo%20.png-1760091936574?optimizer=image",
  },
];

export default function BrandsYouLoveSection() {
  return (
    <View style={{ marginTop: 32 }}>
      {/* HEADING */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 24,
          marginBottom: 20,
        }}
      >
        <LinearGradient
          colors={["#f8f8f8", "#4701e3"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            flex: 1,
            height: 2,
          }}
        />

        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            color: "#111",
            marginHorizontal: 12,
            letterSpacing: 1,
          }}
        >
          BRANDS YOU’LL LOVE
        </Text>

        <LinearGradient
          colors={["#4701e3", "#f8f8f8"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            flex: 1,
            height: 2,
          }}
        />
      </View>

      {/* BRAND LIST */}
      <FlatList
        data={BRANDS}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        renderItem={({ item }) => (
          <View
            style={{
              alignItems: "center",
              marginRight: 24,
              width: 140,
            }}
          >
            {/* BIG CIRCLE */}
            <View
              style={{
                width: 128,
                height: 128,
                borderRadius: 64,
                backgroundColor: "#ffffff",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <Image
                source={{ uri: item.logo }}
                style={{
                  width: 150,
                  height: 150,
                }}
                resizeMode="cover"
              />
            </View>

            {/* BRAND NAME */}
            <Text
              style={{
                marginTop: 10,
                fontSize: 14,
                fontWeight: "500",
                color: "#111",
                textAlign: "center",
              }}
              numberOfLines={2}
            >
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
