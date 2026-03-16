import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";

export default function PaymentScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      {/* Back */}
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Text style={styles.backIcon}>{"<"}</Text>
      </TouchableOpacity>

      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>Checkout 💳</Text>
        <View style={styles.totalBox}>
          <Text style={styles.totalAmount}>₹ 1,527</Text>
          <Text style={styles.totalSub}>Including GST (18%)</Text>
        </View>
      </View>

      {/* Payment method tabs */}
      <View style={styles.tabRow}>
        <TouchableOpacity style={[styles.tab, styles.tabActive]}>
          <Image source={require("./assets/Payment/Card Icon.png")} style={styles.tabIcon} />
          <Text style={styles.tabActiveText}>  Credit card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={require("./assets/Payment/Apple icon.png")} style={styles.tabIcon} />
          <Text style={styles.tabText}>  Apple Pay</Text>
        </TouchableOpacity>
      </View>

      {/* Card number */}
      <Text style={styles.label}>Card number</Text>
      <View style={styles.inputRow}>
        <TextInput style={[styles.input, { flex: 1 }]} value="5261  4141  0151  8472" editable={false} />
        <View style={styles.cardIcons}>
          <View style={[styles.cardDot, { backgroundColor: "#eb001b" }]} />
          <View style={[styles.cardDot, { backgroundColor: "#f79e1b", marginLeft: -8 }]} />
        </View>
      </View>

      {/* Cardholder name */}
      <Text style={styles.label}>Cardholder name</Text>
      <TextInput style={styles.input} value="Christie Doe" editable={false} />

      {/* Expiry + CVV */}
      <View style={styles.row}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <Text style={styles.label}>Expiry date</Text>
          <TextInput style={styles.input} value="06 / 2024" editable={false} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>CVV / CVC</Text>
          <View style={styles.cvvRow}>
            <TextInput style={[styles.input, { flex: 1 }]} value="915" editable={false} />
            <Image source={require("./assets/Payment/Hint.png")} style={styles.hintIcon} />
          </View>
        </View>
      </View>

      {/* Note */}
      <Text style={styles.note}>
        We will send you an order details to your email after the successfull payment
      </Text>

      {/* Pay button */}
      <TouchableOpacity style={styles.payBtn} onPress={() => navigation.navigate("Success")}>
        <Text style={styles.payBtnText}>🔒  Pay for the order</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { paddingTop: 100, paddingHorizontal: 24, paddingBottom: 40 },

  back: {
    position: "absolute", top: 60, left: 20,
    backgroundColor: "#f3f3f3",
    width: 40, height: 40, borderRadius: 10,
    justifyContent: "center", alignItems: "center", zIndex: 1,
  },
  backIcon: { fontSize: 22, color: "#4CAF50", fontWeight: "700" },

  headerRow: {
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "flex-start", marginTop: 10, marginBottom: 24,
  },
  title: { fontSize: 24, fontWeight: "700", color: "#111" },
  totalBox: { alignItems: "flex-end" },
  totalAmount: { fontSize: 20, fontWeight: "700", color: "#4CAF50" },
  totalSub: { fontSize: 11, color: "#999", marginTop: 2 },

  tabRow: {
    flexDirection: "row", backgroundColor: "#f3f3f3",
    borderRadius: 14, padding: 4, marginBottom: 24,
  },
  tab: {
    flex: 1, paddingVertical: 12, borderRadius: 12,
    alignItems: "center", flexDirection: "row", justifyContent: "center",
  },
  tabActive: { backgroundColor: "#4CAF50" },
  tabIcon: { width: 20, height: 20, resizeMode: "contain" },
  tabActiveText: { color: "#fff", fontWeight: "600", fontSize: 15 },
  tabText: { color: "#333", fontWeight: "500", fontSize: 15 },

  label: { fontSize: 13, color: "#555", marginBottom: 6, marginTop: 14 },
  input: {
    backgroundColor: "#f7f7f7", borderRadius: 12,
    paddingHorizontal: 16, paddingVertical: 14,
    fontSize: 15, color: "#222",
  },
  inputRow: {
    flexDirection: "row", alignItems: "center",
    backgroundColor: "#f7f7f7", borderRadius: 12, paddingRight: 12,
  },
  cardIcons: { flexDirection: "row", alignItems: "center" },
  cardDot: { width: 22, height: 22, borderRadius: 11 },

  row: { flexDirection: "row" },
  cvvRow: {
    flexDirection: "row", alignItems: "center",
    backgroundColor: "#f7f7f7", borderRadius: 12, paddingRight: 12,
  },
  hintIcon: { width: 20, height: 20, resizeMode: "contain", marginLeft: 6 },

  note: {
    textAlign: "center", color: "#aaa", fontSize: 12,
    marginTop: 24, marginBottom: 20, lineHeight: 18,
  },
  payBtn: {
    backgroundColor: "#4CAF50", borderRadius: 16,
    paddingVertical: 18, alignItems: "center",
  },
  payBtnText: { color: "#fff", fontSize: 17, fontWeight: "700" },
});
