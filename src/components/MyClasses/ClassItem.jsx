import { Image, Pressable, StyleSheet, Text, View, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import COLORS from "../../constants/Colors";
import React from "react";
import ShadowBox from "../../wrappers/ShadowBox";
import FONTS from "../../constants/Fonts";

const ClassItem = ({ itemData, onHandlerModal }) => {

  return (
    <ShadowBox style={styles.itemContainer}>
      <View style={styles.itemDescription}>
        <Image
          source={require("../../../assets/images/anahatalight.png")}
          style={styles.itemImage}
        />
        <View>
          <Text style={styles.itemText}>{itemData.item.day} {itemData.item.monthName} - {itemData.item.time}hrs</Text>
        </View>
      </View>

      <Pressable
          style={styles.cancelButton}
          onPress={() => {
            onHandlerModal(itemData.item.key);
          }}
        >
          <Ionicons name="trash-outline" size={24} color="red" />
        </Pressable>
    </ShadowBox>
  );
};
export default ClassItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: Dimensions.get('screen').width * 0.9,
    height: Dimensions.get('screen').width * 0.15,
    margin: 10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLORS.darkGreen,
  },

  itemDescription: {
    width: '80%',
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'flex-start',
  },

  itemImage: {
    width: '14%',
    marginRight: 10,
    aspectRatio: 1/1
  },

  itemText: {
    fontFamily: FONTS.comfortaaBold,
    fontSize: Dimensions.get('screen').width * 0.05,
    color: 'white'
  },

  cancelButton: {
    height: '90%',
    aspectRatio: 1/1,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightRed,
    borderStyle: "solid",
    borderRadius: 5,
    overflow: "hidden",
  }
});