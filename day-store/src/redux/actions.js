import { GET_CIUDADES, GET_CITY, RESET, TYPE_VIEWS, TYPE_VIEWS_TRUE } from "./actions.types";
import axios from 'axios';


export const getAllCities = () => {
    return async (dispatch) => {
        try {
            const ciudades = await axios.get("http://localhost:5000/daystore-bcd8f/us-central1/app/appDayStore/ciudades");
            return dispatch({
                type: GET_CIUDADES,
                payload: ciudades.data,
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export const getCity = (id) => {
    return {
        type: GET_CITY,
        payload: id,
    }
}

export const reset = () => {
    return {
        type: RESET,
    }
}

export const typeViews = () => {
    return {
        type: TYPE_VIEWS,
    }
}

export const viewsTrue = () => {
    return {
        type: TYPE_VIEWS_TRUE,
    }
}
