import { combineReducers } from 'redux';
import cakeReducer from './cake_reducer';
import detailReducer from './detail_reducer';
import photoReducer from './photo_reducer';

const rootReducer = combineReducers({
    cakes: cakeReducer,
    details: detailReducer,
    photos: photoReducer
});

export default rootReducer;
