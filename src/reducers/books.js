import {ADD_BOOK} from "../constants";

const initialState = [{id: 0, title: "Тихий Дон"}];
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}
