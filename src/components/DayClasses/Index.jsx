import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import FONTS from "../../constants/Fonts";
import DayClassItem from "./DayClassItem";
import AddModal from "./AddModal";
import { addClass , selectClass } from "../../store/actions/myClasses.actions";


const DayClasses = ({route}) => {
  
  // Classes filtered on day selected 
  const filteredClasses = useSelector( state => state.classes.filteredClasses )

  // Selected class to be added to pop-up modal, then to state.myClasses
  const selectedClass = useSelector( state => state.myClasses.selectedClass )

  // State for pop-up modal
	const [addModalVisible, setAddModalVisible] = React.useState(false);
  
  // Day selected to be shown on screen title
  const daySelected = route.params.daySelected
  
  const dispatch = useDispatch()

  // Function to open modal
  const modalHandler =(classItem)=>{
    dispatch( selectClass(classItem) )
    setAddModalVisible(!addModalVisible)
  }

  // Function to add class to state.myClasses from pop-up modal
  const addClassModal =(selectedClass)=>{
    dispatch( addClass( selectedClass ) )
    dispatch( selectClass( null ) )
    setAddModalVisible(!addModalVisible)
  }

  // Function to cancel and go back to select another class
  const goBack =()=>{
    dispatch( selectClass( null ) )
    setAddModalVisible(!addModalVisible)
  }

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
          <Text style={styles.dateText}>{ daySelected.month }</Text>
          <Text style={styles.dateText}> { daySelected.day }</Text>
        </View>
      </View>

      <Text style={styles.selectText}>Selecciona una clase:</Text>

      <View style={styles.classItemsContainer}>
        {filteredClasses.map((item) => {
          return (
            <DayClassItem
              classItem={item}
              modalHandler={modalHandler}
              key={item.key}
            />
          );
        })}
      </View>

      <AddModal
        modalHandler={modalHandler}
        addClassModal={addClassModal}
        selectedClass={selectedClass}
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