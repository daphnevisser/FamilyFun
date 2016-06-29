import { combineReducers } from 'redux';
import cakeReducer from './cake_reducer';
import detailReducer from './detail_reducer';

const rootReducer = combineReducers({
    cakes: cakeReducer,
    details: detailReducer
});

export default rootReducer;
