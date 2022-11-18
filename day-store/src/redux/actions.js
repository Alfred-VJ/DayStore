import { GET_CIUDADES, GET_CITY, RESET, TYPE_VIEWS, TYPE_VIEWS_TRUE } from "./actions.types";
import axios from 'axios';
/* 
{
  ciudad: data.ciudad,
  servicio: data.servicio,
  meta: data.meta
}
*/

export const getAllCities = () => {
    // return async (dispatch) => {
    //     try {
    //         const ciudades = await axios.get("https://us-central1-daystore-bcd8f.cloudfunctions.net/app/appDayStore/ciudades");
    //         return dispatch({
    //             type: GET_CIUDADES,
    //             payload: ciudades.data,
    //         })
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    return {
        type: GET_CIUDADES,
        payload: [{
            id:1,
            ciudad: "México",
            servicio: 15,
            meta: 20
          },
          {
            id:2,
            ciudad: "Monterrey",
            servicio: 9,
            meta: 18
          },
          {
            id:3,
            ciudad: "Puebla",
            servicio: 5,
            meta: 10
          },
          {
            id:4,
            ciudad: "Guerrero",
            servicio: 7,
            meta: 15
          },
          {
            id:5,
            ciudad: "Quintanarro",
            servicio: 3,
            meta: 8
          },
          {
            id:6,
            ciudad: "Yucatan",
            servicio: 4,
            meta: 6
          },
          {
            id:7,
            ciudad: "Coahuila",
            servicio: 4,
            meta: 12
          },
          {
            id:8,
            ciudad: "Nayarit",
            servicio: 4,
            meta: 4
          }]
    }
}

export const getCity = (id) => {
    console.log(id)
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
