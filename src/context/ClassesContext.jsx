import React from "react";
import {CLASSES} from '../data/classes'

export const ClassesContext = React.createContext()

const ClassesContextProvider =({children})=> {
  
  const [classes, setClasses] = React.useState([])

  const getMonth = (monthNum) => {
    let months = {
      1: "Enero",
      2: "Febrero",
      3: "Marzo",
      4: "Abril",
      5: "Mayo",
      6: "Junio",
      7: "Julio",
      8: "Agosto",
      9: "Septiembre",
      10: "Octubre",
      11: "Noviembre",
      12: "Diciembre",
    };
    return months[monthNum];
  };

  React.useEffect(() => {
    let counter = 0;
    
    const fetchedClasses = CLASSES.map((item) => {
      counter++;
      return {...item, monthName: getMonth(item.month), key: Date.now() + counter };
    })

    setClasses(fetchedClasses)
  }, [])
  
  return (
    <ClassesContext.Provider value={classes}>
      {children}
    </ClassesContext.Provider>
  );
}

export default ClassesContextProvider