import { GET_CITY, GET_CIUDADES, RESET } from "./actions.types";

const initialState = {
    ciudades: [],
    city: [],
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
            }
        default: return state;
    }
}

