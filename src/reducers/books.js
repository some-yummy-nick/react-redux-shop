import {SET_BOOKS,SET_FILTER} from "../constants";

const initialState = {
    isReady: false,
    items: null,
    filterBy: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                items: action.payload,
                isReady: true
            };
            case SET_FILTER:
            return {
                ...state,
                filterBy: action.payload
            };
        default:
            return state;
    }
}
