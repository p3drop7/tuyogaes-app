// NOT IN USE ... TO BE ERASED

// import React from "react";

// export const MyClassesContext = React.createContext();

// const MyClassesContextProvider = ({ children }) => {
//   const [myClassList, setMyClassList] = React.useState([]);

//   const addClass = (selectedClass) => {
//     if( !myClassList.some( item => item.key === selectedClass.key)) {
//       setMyClassList([...myClassList, selectedClass]);
//     }
//   };
  
//   const deleteClass = (selectedClass) => {
//     setMyClassList(
//       myClassList.filter((item) => {
//         return item.key !== selectedClass.key;
//       })
//     );
//   };

//   return (
//     <MyClassesContext.Provider
//       value={{ myClassList, setMyClassList, addClass, deleteClass }}
//     >
//       {children}
//     </MyClassesContext.Provider>
//   );
// };

// export default MyClassesContextProvider;
