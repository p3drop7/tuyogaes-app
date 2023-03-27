import { Image, Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import ShadowBox from '../../wrappers/ShadowBox'
import COLORS from "../../constants/Colors";
import FONTS from "../../constants/Fonts";

const DayClassItem = ({ classItem, addModalHandler }) => {

  const status = classItem.status.toUpperCase();

  return (
    <ShadowBox style={styles.classContainer}>
      <Pressable
        style={styles.classPressableContainer}
        onPress={() => {
          addModalHandler(classItem);
        }}
      >
        <Image
          source={require("../../../assets/images/anahata.png")}
          style={styles.image}
        />
        <Text style={styles.hour}>{classItem.time} hrs</Text>
        <Text style={styles.classStatus}>{status}</Text>
      </Pressable>
    </ShadowBox>
  );
};

export default DayClassItem;

const styles = StyleSheet.create({
  classContainer: {
    width: "70%",
    marginVertical: 12,
    backgroundColor: COLORS.lightGreen,
  },

  classPressableContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: COLORS.lightGreen,
  },

  image: {
    height: 40,
    width: 40,
    position: "relative",
    left: -13,
  },

  hour: {
    paddingBottom: 5,
    fontFamily: FONTS.comfortaaSemiBold,
    fontSize: 20,
  },

  classStatus: {
    marginLeft: 20,
    fontFamily: FONTS.comfortaaLight,
    fontSize: 13,
    color: COLORS.darkGreen,
  },
});