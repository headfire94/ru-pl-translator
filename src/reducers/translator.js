import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';
import {RUSSIAN, ENGLISH, POLISH} from '../constants/languages';

import {
    handleSearchSuccess,
    updateSearchValue
} from '../actions/translator';

const languageReducer = lang => handleActions({
    [updateSearchValue]: (state, action) => {
        if (action.payload.language === lang) {
            return action.payload.value
        }

        return state;
    },
    [handleSearchSuccess]: (state, action) => {
        if (action.payload.language === lang) {
            return action.payload.value;
        }
        return state
    }
}, '');

const translator = combineReducers({
    russian: languageReducer(RUSSIAN),
    english: languageReducer(ENGLISH),
    polish: languageReducer(POLISH)
});

export default translator;