import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ClassesContext } from "../../context/ClassesContext";
import ClassCalendar from "./ClassCalendar";
import DailyClasses from "./DailyClasses";

const Index = () => {

  const classes = useContext(ClassesContext);

  const [daySelected, setDaySelected] = useState([]);
  const [calendarSwitch, setCalendarSwitch] = useState(false);

  const selectDay = (day) => {
    let currentDayClasses = classes.filter(
      (item) => item.dateString === day.dateString
    );
    setDaySelected(currentDayClasses);

    let available = classes.find(
      (item) => item.dateString === day.dateString
    );
    available && setCalendarSwitch(!calendarSwitch);
  };

  const goBack = () => {
    setCalendarSwitch(!calendarSwitch);
    setDaySelected([]);
  };

  return (
    <View>
      {!calendarSwitch ? (
        <ClassCalendar
          classes={classes}
          selectDay={selectDay}
        />
      ) : (
        <DailyClasses daySelected={daySelected} goBack={goBack} />
      )}
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});