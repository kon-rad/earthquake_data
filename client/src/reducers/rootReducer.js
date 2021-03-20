import earthquakeData from './earthquakeData';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  earthquakeData,
});

export default rootReducer;
