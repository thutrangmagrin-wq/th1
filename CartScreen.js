import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

const cartItems = [
  { id: 1, brand: "Lauren's", name: "Orange Juice", price: 149, qty: 1, img: require("./assets/Cart/Rectangle 311.png") },
  { id: 2, brand: "Boakinz", name: "Skimmed Milk", price: 129, qty: 1, img: require("./assets/Cart/Rectangle 31.png") },
  { id: 3, brand: "Marley's", name: "Aloe Vera Lotion", price: 1249, qty: 1, img: require("./assets/Cart/Rectangle 45.png") },
];

export default function CartScreen({ navigation }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <View style={styles.container}>

      {/* Back */}
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Text style={styles.backIcon}>{"<"}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Your Cart 👍🏻</Text>

      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
        {cartItems.map(item => (
          <View key={item.id} style={styles.card}>
            <Image source={item.img} style={styles.img} />
            <View style={styles.info}>
              <Text style={styles.brand}>{item.brand}</Text>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>₹ {item.price}</Text>
            </View>
            <View style={styles.qtyRow}>
              <TouchableOpacity style={styles.qtyBtn}><Text style={styles.qtyText}>−</Text></TouchableOpacity>
              <Text style={styles.qty}>{item.qty}</Text>
              <TouchableOpacity style={styles.qtyBtn}><Text style={styles.qtyText}>+</Text></TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Total */}
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalAmount}>₹ {total.toLocaleString()}</Text>
      </View>

      {/* Checkout button */}
      <TouchableOpacity
        style={styles.checkoutBtn}
        onPress={() => navigation.navigate("Payment")}
      >
        <Text style={styles.checkoutText}>Proceed to checkout</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 70,
    paddingHorizontal: 20,
  },

  back: {
    position: "absolute",
    top: 60, left: 20,
    backgroundColor: "#f3f3f3",
    width: 40, height: 40,
    borderRadius: 10,
    justifyContent: "center", alignItems: "center",
  },
  backIcon: { fontSize: 22, color: "#e07b39", fontWeight: "700" },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111",
    marginBottom: 20,
    marginTop: 50,
  },

  list: { flex: 1 },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    borderRadius: 16,
    padding: 12,
    marginBottom: 14,
  },
  img: {
    width: 60, height: 60,
    borderRadius: 10,
    resizeMode: "contain",
    backgroundColor: "#eee",
  },
  info: { flex: 1, marginLeft: 12 },
  brand: { fontSize: 11, color: "#999" },
  name: { fontSize: 15, fontWeight: "600", color: "#111", marginTop: 2 },
  price: { fontSize: 14, color: "#e07b39", marginTop: 4, fontWeight: "600" },

  qtyRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  qtyBtn: {
    width: 28, height: 28,
    borderRadius: 8,
    backgroundColor: "#eee",
    justifyContent: "center", alignItems: "center",
  },
  qtyText: { fontSize: 16, color: "#333" },
  qty: { fontSize: 15, fontWeight: "600", minWidth: 16, textAlign: "center" },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  totalLabel: { fontSize: 18, fontWeight: "600", color: "#111" },
  totalAmount: { fontSize: 20, fontWeight: "700", color: "#e07b39" },

  checkoutBtn: {
    backgroundColor: "#e07b39",
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
    marginBottom: 80,
  },
  checkoutText: { color: "#fff", fontSize: 17, fontWeight: "700" },
});
