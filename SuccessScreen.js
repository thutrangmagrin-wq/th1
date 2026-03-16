import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function SuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Back */}
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Text style={styles.backIcon}>{"<"}</Text>
      </TouchableOpacity>

      {/* Illustration */}
      <View style={styles.illustrationWrap}>
        <View style={styles.circle} />
        <Image
          source={require("./assets/images/Addjust.png")}
          style={styles.illustration}
          resizeMode="contain"
        />
        <View style={styles.checkBadge}>
          <Text style={styles.checkMark}>✓</Text>
        </View>
      </View>

      {/* Text */}
      <Text style={styles.title}>Payment Success, Yayy!</Text>
      <Text style={styles.subtitle}>
        we will send order details and invoice in{"\n"}
        your contact no. and registered email
      </Text>

      {/* Check Details link */}
      <TouchableOpacity
        style={styles.detailsRow}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.detailsText}>Check Details</Text>
        <Text style={styles.detailsArrow}> →</Text>
      </TouchableOpacity>

      {/* Download Invoice button */}
      <TouchableOpacity style={styles.invoiceBtn}>
        <Text style={styles.invoiceBtnText}>Download Invoice</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  back: {
    position: "absolute",
    top: 60, left: 20,
    backgroundColor: "#f3f3f3",
    width: 40, height: 40,
    borderRadius: 10,
    justifyContent: "center", alignItems: "center",
  },
  backIcon: { fontSize: 18, color: "#333" },

  illustrationWrap: {
    width: 220, height: 220,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 36,
  },
  circle: {
    position: "absolute",
    width: 200, height: 200,
    borderRadius: 100,
    backgroundColor: "#e8f5f5",
  },
  illustration: {
    width: 160, height: 160,
  },
  checkBadge: {
    position: "absolute",
    bottom: 10, right: 10,
    width: 44, height: 44,
    borderRadius: 22,
    backgroundColor: "#4CAF50",
    justifyContent: "center", alignItems: "center",
    borderWidth: 3, borderColor: "#fff",
    elevation: 4,
  },
  checkMark: { color: "#fff", fontSize: 20, fontWeight: "700" },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 13,
    color: "#999",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 28,
  },

  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
  },
  detailsText: { color: "#5b6cff", fontSize: 15, fontWeight: "600" },
  detailsArrow: { color: "#5b6cff", fontSize: 15 },

  invoiceBtn: {
    backgroundColor: "#5b6cff",
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 60,
    alignItems: "center",
    width: "100%",
  },
  invoiceBtnText: { color: "#fff", fontSize: 17, fontWeight: "700" },
});
