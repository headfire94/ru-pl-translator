import { combineReducers } from 'redux';
import translator from './translator';
import knowledge from './knowledge';

const rootReducer = combineReducers({
    translator,
    knowledge
});

export default rootReducer;