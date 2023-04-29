import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ShadowBox from '../../wrappers/ShadowBox'
import COLORS from "../../constants/Colors";
import FONTS from "../../constants/Fonts";

const DayClassItem = ({ classItem, modalHandler }) => {
  
  return (
    <ShadowBox style={styles.classContainer}>
      <Pressable style={styles.classPressableContainer} onPress={()=>modalHandler(classItem)}>

        <View style={styles.timeContainer}>
          <Image
            source={require("../../../assets/images/anahata.png")}
            style={styles.image}
          />
          <Text style={styles.hour}>{classItem.time} hrs</Text>
        </View>

        <Text style={styles.classStatus}>{classItem.status}</Text>
      </Pressable>
    </ShadowBox>
  );
};

export default DayClassItem;

const styles = StyleSheet.create({
  classContainer: {
    width: "80%",
    height: 47,
    marginVertical: 11,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightGreen,
  },

  classPressableContainer: {
    height: '100%',
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  timeContainer: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: '15%',
    marginHorizontal: 10,
    aspectRatio: 1/1,
  },

  hour: {
    paddingBottom: 5,
    fontFamily: FONTS.comfortaaSemiBold,
    fontSize: Dimensions.get('screen').width * 0.06,
  },

  classStatus: {
    fontFamily: FONTS.comfortaaLight,
    fontSize: Dimensions.get('screen').width * 0.04,
    color: COLORS.darkGreen,
  },
});