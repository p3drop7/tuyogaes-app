import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import COLORS from "../../constants/Colors";
import React from "react";
import ShadowBox from "../../wrappers/ShadowBox";

const ClassItem = ({ itemData, onHandlerModal }) => {

  return (
    <ShadowBox style={styles.itemContainer}>
      <Image
        source={require("../../../assets/images/anahata.png")}
        style={styles.itemImage}
      />
      <View style={styles.itemDescription}>
        <View>
          <Text style={styles.itemText}>
			{itemData.item.monthName} {itemData.item.day}  -  {itemData.item.time}hrs 
		  </Text>
        </View>
        <Pressable
          style={styles.cancelButton}
          onPress={() => {
            onHandlerModal(itemData.item.key);
          }}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </Pressable>
      </View>
    </ShadowBox>
  );
};
export default ClassItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: "90%",
    margin: 10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLORS.lightGreen,
  },

  itemImage: {
    height: 50,
    width: 50,
  },

  itemDescription: {
    minWidth: 230,
    alignItems: "center",
  },

  itemText: {
    fontFamily: "comfortaa-bold",
    fontSize: 20,
  },

  cancelButton: {
    height: 35,
    width: 80,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightRed,
    borderStyle: "solid",
    borderRadius: 5,
    overflow: "hidden",
  },

  cancelButtonText: {
    color: "white",
    fontFamily: "comfortaa-bold",
  },
});