// @flow
import {handleActions} from 'redux-actions';
import {addToLearn, removeFromLearn} from '../actions/knowledge';
import uuid from 'uuid/v4';

type KnowledgeItem = {
    +id: string,
    +text: string
}

type Knowledge = Array<KnowledgeItem>

const knowledge: Knowledge = handleActions({
    [addToLearn]: (state, action) => [...state, {id: uuid(), text: action.payload}],
    [removeFromLearn]: (state, action) => state.filter(item => item.id !== action.payload)
}, []);

export default knowledge;