import { GET_CIUDADES } from "./actions.types";

const initialState = {
    ciudades: [],
}

export const ciudadesReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case GET_CIUDADES:
            return {
                ...state,
                ciudades: actions.payload
            }
        default: return state;
    }
}