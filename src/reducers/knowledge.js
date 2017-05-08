import {handleActions} from 'redux-actions';
import {addToLearn, removeFromLearn} from '../actions/knowledge';
import uuid from 'uuid/v4';

const knowledge = handleActions({
    [addToLearn]: (state, action) => [...state, {id: uuid(), text: action.payload}],
    [removeFromLearn]: (state, action) => state.filter(item => item.id !== action.payload)
}, []);

export default knowledge;