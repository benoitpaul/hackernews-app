import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(
        )
    )
}