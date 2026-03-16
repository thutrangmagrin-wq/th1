import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Ảnh lớn trên cùng */}
      <Image
        source={require("./assets/Splash/Mask Group (1).png")}
        style={styles.illustration}
        resizeMode="contain"
      />

      {/* Text */}
      <Text style={styles.title}>Scan, Pay & Enjoy!</Text>
      <Text style={styles.subtitle}>
        scan products you want to buy at your{"\n"}
        favorite store and pay by your phone &{"\n"}
        enjoy happy, friendly Shopping!
      </Text>

      {/* Dots */}
      <View style={styles.dotsRow}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.dotActive]} />
      </View>

      {/* Spacer + tap anywhere to continue */}
      <TouchableOpacity
        style={styles.tapArea}
        onPress={() => navigation.replace("Main")}
      />

      {/* Get Started button */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.replace("Main")}
      >
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff5f0",
    alignItems: "center",
  },

  illustration: {
    width: 300,
    height: 300,
    marginTop: 60,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    marginTop: 32,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    lineHeight: 22,
    marginTop: 12,
    paddingHorizontal: 30,
  },

  dotsRow: {
    flexDirection: "row",
    marginTop: 40,
    gap: 8,
    alignItems: "center",
  },
  dot: {
    width: 8, height: 8,
    borderRadius: 4,
    backgroundColor: "#f4b8c1",
  },
  dotActive: {
    backgroundColor: "#5b6cff",
    width: 20,
  },

  tapArea: {
    flex: 1,
    width: "100%",
  },

  btn: {
    backgroundColor: "#5b6cff",
    borderRadius: 16,
    paddingVertical: 16,
    width: "85%",
    alignItems: "center",
    marginBottom: 40,
  },
  btnText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
});
