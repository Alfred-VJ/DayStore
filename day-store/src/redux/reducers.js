import { GET_CITY, GET_CIUDADES, RESET, TYPE_VIEWS, TYPE_VIEWS_TRUE } from "./actions.types";

const initialState = {
    ciudades: [],
    city: [],
    views: true,
}

export const ciudadesReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case GET_CIUDADES:
            return {
                ...state,
                ciudades: actions.payload.ciudades
            };
        case GET_CITY:
            return {
                ...state,
                city: state.ciudades.filter(e => e.id === actions.payload)
            };
        case RESET:
            return {
                ...state,
                city: [],
            };
        case TYPE_VIEWS:
            return {
                ...state,
                views: false,
            };
        case TYPE_VIEWS_TRUE:
            return {
                ...state,
                views: true,
            };
        default: return state;
    }
}

