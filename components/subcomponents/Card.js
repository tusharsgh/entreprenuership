import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";

const { width } = Dimensions.get("screen");
const cardWidth = width / 1.1;

function Card({ doctor, index }) {
  return (
    <View style={styles.card}>
      <Image
        source={doctor.image}
        style={[styles.cardImage, styles.shadowProp]}
      />
      <View style={styles.cardTitle}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          {doctor.firstname } {doctor.lastname}
        </Text>
        {/* <Text style={{ fontWeight: "bold", fontSize: 14, color: "grey" }}>
          {doctor.title}
        </Text> */}
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    flex:1,
    height: 380,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: "#ADD8E6",
  },
  cardImage: {
    height: 290,
    width: "90%",
    marginTop: "auto",
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: 15,
    paddingVertical:20
  },
  cardTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    marginTop: 20,
    marginBottom:20,
    marginLeft: 8,
    marginRight: 8,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
