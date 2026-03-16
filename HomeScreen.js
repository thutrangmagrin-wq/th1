import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";

export default function HomeScreen({navigation}) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>

      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>

        <Image
          source={require("./assets/images/Mask Group.png")}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.title}>Your Insights</Text>

      <View style={styles.grid}>

        {/* Scan new */}
        <TouchableOpacity 
          style={styles.card}
        onPress={() => navigation.navigate("Scan")}
        >
          <Image 
            source={require("./assets/images/Scanned483.png")} 
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Scan new</Text>
          <Text style={styles.cardSub}>Scanned 483</Text>
        </TouchableOpacity>

        {/* Counterfeits */}
        <TouchableOpacity style={styles.card}>
          <Image 
            source={require("./assets/images/Counterfeited32.png")} 
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardSub}>Counterfeited 32</Text>
        </TouchableOpacity>

        {/* Success */}
        <TouchableOpacity style={styles.card}>
          <Image 
            source={require("./assets/images/Checkouts8.png")} 
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Success</Text>
          <Text style={styles.cardSub}>Checkouts 8</Text>
        </TouchableOpacity>

        {/* Directory */}
        <TouchableOpacity style={styles.card}>
          <Image 
            source={require("./assets/images/26.png")} 
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Directory</Text>
          <Text style={styles.cardSub}>History 26</Text>
        </TouchableOpacity>

      </View>

      {/* Explore More */}
      <View style={styles.exploreHeader}>
        <Text style={styles.title}>Explore More</Text>
        <Text style={styles.arrow}>→</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.exploreRow}>
        <View style={styles.exploreCard}>
          <Image source={require("./assets/images/cay.png")} style={styles.exploreImg} />
        </View>
        <View style={styles.exploreCard}>
          <Image source={require("./assets/images/sữa.png")} style={styles.exploreImg} />
        </View>
        <View style={styles.exploreCard}>
          <Image source={require("./assets/images/tay.png")} style={styles.exploreImg} />
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    paddingTop: 60,
    paddingHorizontal: 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  hello: {
    fontSize: 22,
    fontWeight: "bold"
  },

  name: {
    color: "#666",
    marginTop: 4
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

  title: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: "600"
  },

  grid: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  card: {
    width: "47%",
    height: 140,
    backgroundColor: "#e9e9e9",
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
    resizeMode:"contain"
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "600"
  },

  cardSub: {
    fontSize: 12,
    color: "#777",
    marginTop: 4
  },

  exploreHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  arrow: {
    fontSize: 18,
    color: "#333",
  },
  exploreRow: {
    flexDirection: "row",
  },
  exploreCard: {
    width: 110,
    height: 110,
    borderRadius: 16,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  exploreImg: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
});