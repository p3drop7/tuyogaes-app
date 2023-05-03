import { API_URL } from '../../constants/data'

export const ADD_CLASS = 'ADD_CLASS'
export const SELECT_CLASS = 'SELECT_CLASS'
export const DELETE_CLASS = 'DELETE_CLASS'
export const LOAD_FIREBASE = 'LOAD_FIREBASE'
export const UPDATE_FIREBASE = 'UPDATE_FIREBASE'
export const CLEAN_CLASSES = 'CLEAN_CLASSES'

export const addClass = (selectedClass) => ({
    type: ADD_CLASS,
    selectedClass
})

export const selectClass = (classItem) => ({
    type: SELECT_CLASS,
    classItem
})

export const deleteClass = (selectedClass) => ({
    type: DELETE_CLASS,
    selectedClass
})

// Function to load the classes from Firebase
export const loadFirebase = (userId) => {

  return async (dispatch) => {
    try {
      const response = await fetch(API_URL + "myClasses/" + userId + ".json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if( result === null ) {
        dispatch({
            type: LOAD_FIREBASE,
            classesInFB: [],
          });

      } else if ( !result.classes ) {
          dispatch({
              type: LOAD_FIREBASE,
              classesInFB: [],
            });

      } else {
        dispatch({
            type: LOAD_FIREBASE,
            classesInFB: result.classes,
          });
      }

    } catch (error) {
      console.log(error);
    }
  };
};

// Funtion to modify classes to Firebase
export const updateFirebase = (myClasses, userEmail, userId) => {

    return async dispatch => {
        try {
          const response = await fetch(
            API_URL + "myClasses/" + userId + ".json", {
              method: 'PUT',
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                date: new Date(),
                classes: myClasses,
                user: userEmail
              })
            }
          );

          // const result = await response.json();

        } catch (error) {
          console.error(error);
        }
    }
  // }
}

//Function to clean classes perssistance when logging out
export const cleanClasses = () => ({
  type: CLEAN_CLASSES
})