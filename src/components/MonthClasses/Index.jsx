import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { ClassesContext } from "../../context/ClassesContext";
import ClassCalendar from "./ClassCalendar";

const Index = ({navigation}) => {

  const classes = useContext(ClassesContext);

  const onSelectDay = (day) => {

    let currentDayClasses = classes.filter(
      (item) => item.dateString === day.dateString
    );
    
    let available = classes.find((item) => item.dateString === day.dateString);

    if(available){
      navigation.navigate('DayClassesScreen', {
        daySelected: currentDayClasses
      })
    }
  };

  return <ClassCalendar classes={classes} onSelectDay={onSelectDay} />;
};

export default Index;

const styles = StyleSheet.create({});
