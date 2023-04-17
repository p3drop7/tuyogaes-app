import React from 'react'
import { StyleSheet } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import COLORS from '../../constants/Colors';

const ClassCalendar = ({classes, onSelectDay}) => {

  let calendarClasses = {}
  
  classes.monthClasses.forEach( item => {
    calendarClasses[item.dateString] = { selected: true, selectedColor: COLORS.darkGreen }
  })
  
  // dates[item.dateString] = { selected: true, selectedColor: COLORS.darkGreen }
  // console.log('DATESTRINGS', dates)

  // const monthNow = new Date().getMonth() +1
  // const monthString = monthNow.toString()
  // const yearNow = new Date().getFullYear()
  // const yearString = yearNow.toString()

  // const dateNow = monthString + yearString
 
  // classes.find(item => item.)
  
  // console.log(classes.forEach(element => {
  //   console.log()
  // }))

  
  // console.log(yearNow)
  // console.log(yearNow)

  // classes.map(item => {
  //   item.monthClasses
  // console.log(item)
  // calendarClasses[item.dateString] = { selected: true, selectedColor: COLORS.darkGreen }
  // })
  
  LocaleConfig.locales['es'] = {
    monthNames: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ],
    monthNamesShort: ['Ene.', 'Feb.', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Ago.', 'Sept.', 'Oct.', 'Nov.', 'Dic.'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sab.'],
    today: "Hoy"
  };

  LocaleConfig.defaultLocale = 'es';

  return (
      <Calendar
        onDayPress={(day) => {
          onSelectDay(day)
        }}
        
        markedDates={calendarClasses}
        enableSwipeMonths={true}
        theme={{
          arrowColor: COLORS.darkGreen,
          "stylesheet.calendar.header": {
            dayTextAtIndex1: {
              color: "black",
            },
            dayTextAtIndex2: {
              color: "black",
            },
            dayTextAtIndex3: {
              color: "black",
            },
            dayTextAtIndex4: {
              color: "black",
            },
          },
        }}
      />
  );
}

export default ClassCalendar

const styles = StyleSheet.create({})