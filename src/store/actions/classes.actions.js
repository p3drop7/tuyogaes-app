import { API_URL } from '../../constants/data'
export const GET_CLASSES = 'GET_CLASSES'
export const FILTER_DAY_CLASSES = 'FILTER_DAY_CLASSES'

export const getClasses = () => {

  const monthNow = new Date().getMonth() + 1;
  const monthString = monthNow.toString();
  const yearNow = new Date().getFullYear();
  const yearString = yearNow.toString();
  const dateNow = monthString + yearString;

  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}classesDB/${dateNow}.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resData = await response.json();

      dispatch({
        type: GET_CLASSES,
        classes: resData,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const filterDayClasses = (daySelected) => ({
    type: FILTER_DAY_CLASSES,
    daySelected
})