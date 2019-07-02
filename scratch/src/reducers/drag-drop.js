import { DRAG_START, DRAG_END, DROP_SUCCESS } from "../actions";
import {data} from "../data.js";

const initialState = {
    data: data,
    draggingObj: null,
    horizObj: [],
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {

        case DRAG_START:
            const obj = state.data.find(obj => obj.id === action.payload);
            console.log(obj);
            return {
                ...state,
                draggingObj: obj,
            }

        case DRAG_END:
            return {
                ...state,
                draggingObj: null,
            }

        case DROP_SUCCESS:
            // Only run this code if the obj doesn't already exist in the store
            if (state.horizObj.findIndex(obj => obj.id === action.payload.id) === -1) {
                console.log(action.payload);
                return {
                    ...state,
                    draggingObj: null,
                    horizObj: [...state.horizObj, action.payload],
                }
            } else {return state}

        default:
            return state;
    }
}