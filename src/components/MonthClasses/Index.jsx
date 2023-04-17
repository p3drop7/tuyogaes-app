import React from "react";
import ClassCalendar from "./ClassCalendar";
import { StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { filterDayClasses, getClasses } from "../../store/actions/classes.actions";

const Index = ({ navigation }) => {

  const classes = useSelector((state) => state.classes.classes);
  const dispatch = useDispatch();

  // Get classes from Firebase and return them from state.classes
  React.useEffect(() => {
    dispatch(getClasses());
  }, []);

  // Function to return classes on the day selected
  const onSelectDay = (daySelected) => {
    dispatch( filterDayClasses(daySelected) );
    
    // Check if there are classes available in such day
    let available = classes.monthClasses.find( (item) => item.dateString === daySelected.dateString );
    
    // If available classes exist, navigate to next screen to select a class
    available &&
      navigation.navigate("DayClassesScreen", {
         daySelected: daySelected,
      });
  };

  return (
    <>
      {classes === null ? (
        <Text>...Cargando</Text>
      ) : (
        <ClassCalendar classes={classes} onSelectDay={onSelectDay} />
      )}
    </>
  );
};

export default Index;

const styles = StyleSheet.create({});
