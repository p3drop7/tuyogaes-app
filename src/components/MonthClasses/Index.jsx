import React from "react";
import ClassCalendar from "./ClassCalendar";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { filterDayClasses, getCLasses } from '../../store/actions/classes.actions';

const Index = ({navigation}) => {

  const classes = useSelector( state => state.classes.classes )
  const dispatch = useDispatch()

  // React.useEffect(() => {
  //   console.log('classes in component', classes)
  //   dispatch(getCLasses())
  // }, [])
  

  //Funtion to return classes on the day selected
  const onSelectDay = (daySelected) => {
    dispatch( filterDayClasses(daySelected) )

    let available = classes.find((item) => item.dateString === daySelected.dateString);
    available && navigation.navigate('DayClassesScreen', {
      daySelected: daySelected
    })
  };

  return <ClassCalendar classes={classes} onSelectDay={onSelectDay} />;
};

export default Index;

const styles = StyleSheet.create({});
