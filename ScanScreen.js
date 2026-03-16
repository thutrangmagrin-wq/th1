import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* nút back */}
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}
      >
        <Text style={{fontSize:18}}>{"<"}</Text>
      </TouchableOpacity>

      {/* ảnh chai */}
      <Image
        source={require("./assets/images/Juice.png")}
        style={styles.image_main}
      />

      {/* khung scan */}
      <Image
        source={require("./assets/images/Taget.png")}
        style={styles.scanFrame}
      />

      {/* card dưới */}
      <View style={styles.bottomCard}>

        <Image
          source={require("./assets/images/Juice.png")}
          style={styles.smallImg}
        />

        <View style={{flex:1, marginLeft:10}}>
          <Text style={styles.brand}>Lauren's</Text>
          <Text style={styles.product}>Orange Juice</Text>
        </View>

        <TouchableOpacity style={styles.plus} onPress={() => navigation.navigate("Cart")}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#d8c8b5",
    justifyContent:"center",
    alignItems:"center"
  },

  back:{
    position:"absolute",
    top:60,
    left:20,
    backgroundColor:"white",
    width:40,
    height:40,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    elevation:3,
    zIndex:1,
  },

  image_main:{
    widtm:700,
    height:750,
    resizeMode:"contain",
    
  },

  scanFrame:{
    position:"absolute",
    width:300,
    height:420,
    resizeMode:"contain",
    
  },

  bottomCard:{
    position:"absolute",
    bottom:90,
    width:"85%",
    height:80,
    backgroundColor:"white",
    borderRadius:20,
    flexDirection:"row",
    alignItems:"center",
    paddingHorizontal:15,
    elevation:5
  },

  smallImg:{
    width:50,
    height:50,
    borderRadius:10,
    resizeMode:"contain"
  },

  brand:{
    color:"#888",
    fontSize:12
  },

  product:{
    fontSize:18,
    fontWeight:"600"
  },

  plus:{
    width:40,
    height:40,
    backgroundColor:"#5b6cff",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  },

  plusText:{
    color:"white",
    fontSize:22
  }

});