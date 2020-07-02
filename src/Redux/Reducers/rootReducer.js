import { combineReducers } from 'redux';
import shapeReducer from './shapeReducer';
import shapeDetailReducer from './shapeDetailReducer';

const rootReducer = combineReducers({
    shapeReducer,
    shapeDetailReducer,
});

export default rootReducer;