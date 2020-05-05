import {SET_FILTER, SET_QUERY} from "../constants";

const initialState = {
    query: "",
    filterBy: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filterBy: action.payload
            };
        case SET_QUERY:
            return {
                ...state,
                query: action.payload
            };
        default:
            return state;
    }
}
