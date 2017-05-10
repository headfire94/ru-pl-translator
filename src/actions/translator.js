// @flow
import {createAction} from 'redux-actions';
import throttle from 'lodash/debounce';
import {RUSSIAN, ENGLISH, POLISH} from '../constants/languages';
export const updateSearchValue = createAction('UPDATE_SEARCH_INPUT_VALUE');
export const handleSearchRequest = createAction('RUSSIAN_SEARCH_REQUEST');
export const handleSearchSuccess = createAction('RUSSIAN_SEARCH_SUCCESS');
export const handleSearchFailure = createAction('RUSSIAN_SEARCH_FAILURE');

import api from '../utils/api';
type Dispatch = () => void;

const LANGUAGES = [RUSSIAN, ENGLISH, POLISH];

const translate = (from, text, dispatch): void => {
    LANGUAGES.forEach(lang => {
        if (lang === from) {return}

        api(from, lang, text)
            .then(res => dispatch(handleSearchSuccess({
                language: lang,
                value: res
            })))
            .catch(err => dispatch(handleSearchFailure(err)))
    });
};

const throttledTranslate = throttle(translate, 150);

export const searchHandler = (language: string) => (data: string) => (dispatch: Dispatch) => {
    dispatch(updateSearchValue({
        language: language,
        value: data
    }));

    if (!data || !data.trim()) {
        return
    }

    dispatch(handleSearchRequest({
        from: language,
        text: data
    }));

    throttledTranslate(language, data, dispatch)
};