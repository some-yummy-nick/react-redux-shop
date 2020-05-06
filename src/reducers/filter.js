import {SET_FILTER, SET_QUERY} from "../constants";

const initialState = {
    query: "",
    filterBy: {
        name: "",
        isReversed: false
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filterBy: {
                    name: action.payload,
                    isReversed: !state.filterBy.isReversed
                }
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
