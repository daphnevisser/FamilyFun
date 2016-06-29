import {GET_CAKES} from '../actions/index';

export default function cakeReducer(state = [], action) {
    switch (action.type) {
        case GET_CAKES:
            return [action.payload.data, ...state];
    }
    return state;
}
