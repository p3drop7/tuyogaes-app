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

  //Funtion to return classes on the day selected
  const onSelectDay = (daySelected) => {
    dispatch(filterDayClasses(daySelected));

    //Check if there are classes available in such day
    let available = classes.find(
      (item) => item.dateString === daySelected.dateString
    );
    
    //IF available, navigate to next screen to select a class
    available &&
      navigation.navigate("DayClassesScreen", {
        daySelected: daySelected,
      });
  };

  return (
    <>
      {classes.length === 0 ? (
        <Text>...Cargando</Text>
      ) : (
        <ClassCalendar classes={classes} onSelectDay={onSelectDay} />
      )}
    </>
  );
};

export default Index;

const styles = StyleSheet.create({});
