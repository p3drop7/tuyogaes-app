import React from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { filterDayClasses, getClasses } from "../../store/actions/classes.actions";

import ClassCalendar from "./ClassCalendar";

import FONTS from '../../constants/Fonts'

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
      <Text style={styles.text}>Selecciona un día del mes:</Text>
      {classes === null ? (
        <Text>...Cargando</Text>
      ) : (
        <ClassCalendar classes={classes} onSelectDay={onSelectDay} />
      )}
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  text: {
    fontSize: Dimensions.get('screen').width * 0.05,
    fontFamily: FONTS.comfortaaSemiBold,
    alignSelf: 'center',
    marginVertical: 10
  }
});
