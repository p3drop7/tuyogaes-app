import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MyClassesContext } from "../../context/MyClassesContext";
import FONTS from "../../constants/Fonts";
import DayClassItem from "./DayClassItem";
import AddModal from "./AddModal";

const DayClasses = ({ route }) => {
  
  const { daySelected } = route.params
  
  const { addClass } = React.useContext(MyClassesContext);

  const [itemAdd, setItemAdd] = React.useState({});
	const [addModalVisible, setAddModalVisible] = React.useState(false);

  const addModalHandler =(classItem)=>{
    setItemAdd(classItem)
    setAddModalVisible(!addModalVisible)
  }

  const addClassModal =(itemAdd)=>{
    addClass(itemAdd)
    setItemAdd({})
    setAddModalVisible(!addModalVisible)
  }

  const goBack =()=>{
    setItemAdd({})
    setAddModalVisible(!addModalVisible)
  }

  const month = daySelected[0].monthName;
  const day = daySelected[0].day;

  return (
    <View style={styles.dayClassesContainer}>
      <View style={styles.dateContainer1}>
        
        <Pressable
          style={styles.goBackPressable}
          onPress={() => {
            goBack();
          }}
        >
          <Text style={styles.goBackText}>Volver </Text>
        </Pressable>

        <View style={styles.dateContainer2}>
          <Text style={styles.dateText}>{month}</Text>
          <Text style={styles.dateText}> {day}</Text>
        </View>
      </View>

      <Text style={styles.selectText}>Selecciona una clase:</Text>

      <View style={styles.classItemsContainer}>
        {daySelected.map((item) => {
          return (
            <DayClassItem
              classItem={item}
              addModalHandler={addModalHandler}
              key={item.key}
            />
          );
        })}
      </View>

      <AddModal
        addModalHandler={addModalHandler}
        addClassModal={addClassModal}
        itemAdd={itemAdd}
        addModalVisible={addModalVisible}
      />
    </View>
  );
};

export default DayClasses;

const styles = StyleSheet.create({
  dayClassesContainer: {
    width: "100%",
    marginTop: 10,
    alignItems: "center",
  },

  dateContainer1: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  dateContainer2: {
    flexDirection: "row",
    justifyContent: "center",
  },

  goBackText: {
    fontFamily: FONTS.comfortaaLight,
    fontSize: 20,
    color: "gray",
  },

  dateText: {
    fontFamily: FONTS.comfortaaBold,
    fontSize: 20,
  },

  selectText: {
    marginTop: 10,
    fontFamily: FONTS.comfortaaBold,
    fontSize: 15,
  },

  classItemsContainer: {
    width: "100%",
    alignItems: "center",
  },
});