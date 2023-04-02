import { API_URL } from '../../constants/data'
export const GET_CLASSES = 'GET_CLASSES'
export const FILTER_DAY_CLASSES = 'FILTER_DAY_CLASSES'

export const getCLasses = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${API_URL}classes.json`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const resData = await response.json()
            console.log('RESPONSE', response)
            // const classes = Object.keys(resData).map(key => {
            //     return {
            //         id: key,
            //         ...resData[key]
            //     }
            // });

            // console.log('classes', classes)

            dispatch({
                type: GET_CLASSES,
                resData
            })
        
        } catch(error) {
            console.log(error)
        }
    }
}

export const filterDayClasses = (daySelected) => ({
    type: FILTER_DAY_CLASSES,
    daySelected
})