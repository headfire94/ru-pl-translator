import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import rootReducer from './reducers/rootReducer';

export default function configureStore(onCompletion) {
    const enhancer = composeWithDevTools(
        applyMiddleware(thunk),
        autoRehydrate()
    );

    const store = createStore(rootReducer, enhancer);
    persistStore(store, { storage: AsyncStorage }, onCompletion);

    return store;
}
