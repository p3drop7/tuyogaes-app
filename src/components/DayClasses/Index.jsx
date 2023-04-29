import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from '@expo/vector-icons';
import FONTS from "../../constants/Fonts";
import DayClassItem from "./DayClassItem";
import AddModal from "./AddModal";
import { addClass , selectClass } from "../../store/actions/myClasses.actions";
import COLORS from "../../constants/Colors";

const DayClasses = ({navigation, route}) => {
  
  // Classes filtered on day selected 
  const filteredClasses = useSelector( state => state.classes.filteredClasses )
  const classes = useSelector( state => state.classes.classes)

  // MyClasses and user details to add to Firebase
  const myClasses = useSelector( state => state.myClasses.myClasses )
  const userEmail = useSelector( state => state.auth.userEmail )
  const userId = useSelector( state => state.auth.userId )

  // Selected class to be added to pop-up modal, then to state.myClasses
  const selectedClass = useSelector( state => state.myClasses.selectedClass )

  // State for pop-up modal
	const [addModalVisible, setAddModalVisible] = React.useState(false);
  
  // Day selected to be shown on screen title
  const daySelected = route.params.daySelected

  const dispatch = useDispatch()

  // Function to open modal
  const modalHandler =(classItem)=>{
    const newClassItem = {
      ...classItem, 
      dayString: filteredClasses.dayString,
      monthName: classes.monthString,
      day: filteredClasses.day,
      month: classes.monthNumber
    }

    dispatch( selectClass(newClassItem) )
    setAddModalVisible(!addModalVisible)
  }

  // Function to add class to state.myClasses from pop-up modal
  const addClassModal =(selectedClass)=>{
    dispatch( addClass( selectedClass ) )
    dispatch( selectClass( null ) )
    setAddModalVisible(!addModalVisible)
  }

  return (
    <View style={styles.dayClassesContainer}>
      <View style={styles.dateContainer}>
        <Ionicons name="chevron-back-outline" size={30} color="green" onPress={()=>{
          navigation.navigate('MonthClassesScreen')
        }}/>
        <View style={styles.dateTextContainer}>
          <Text style={styles.dateText}>{classes.monthString} {daySelected.day} ({filteredClasses.dayString})</Text>
        </View>
      </View>

      <Text style={styles.selectText}>Selecciona una clase:</Text>

      <View style={styles.classItemsContainer}>
        {filteredClasses.classes.map((item) => {
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
    alignItems: "center"
  },

  dateContainer: {
    width: "100%",
    paddingRight: '6%',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  dateTextContainer: {
    width: '80%',
    alignItems: 'center',
  },

  dateText: {
    fontFamily: FONTS.comfortaaBold,
    fontSize: 20,
    color: COLORS.darkGreen
  },

  selectText: {
    marginVertical: 10,
    fontFamily: FONTS.comfortaaBold,
    fontSize: 16,
  },

  classItemsContainer: {
    width: "100%",
    alignItems: "center",
  },
});