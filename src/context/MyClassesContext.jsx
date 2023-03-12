import React from "react";

export const MyClassesContext = React.createContext();

const MyClassesContextProvider = ({ children }) => {
  const [myClassList, setMyClassList] = React.useState([]);

  const addClass = (selectedClass) => {
    setMyClassList([...myClassList, selectedClass]);
  };

  const deleteClass = (selectedClass) => {
    const newClassArray = myClassList.filter(
      (item) => item.key === !selectedClass.key
    );
    setMyClassList(newClassArray);
  };

  React.useEffect(() => {
    console.log(myClassList);
  }, [myClassList]);

  return (
    <MyClassesContext.Provider
      value={{ myClassList, setMyClassList, addClass, deleteClass }}
    >
      {children}
    </MyClassesContext.Provider>
  );
};

export default MyClassesContextProvider;
