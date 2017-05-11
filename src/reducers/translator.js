// @flow
import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';
import {RUSSIAN, ENGLISH, POLISH} from '../constants/languages';

import {
    handleSearchSuccess,
    updateSearchValue
} from '../actions/translator';

type Translator = {
    russian: string,
    english: string,
    polish: string
}

const languageReducer = (lang: string):string => handleActions({
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

const translator:Translator = combineReducers({
    russian: languageReducer(RUSSIAN),
    english: languageReducer(ENGLISH),
    polish: languageReducer(POLISH)
});

export default translator;