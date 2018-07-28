import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
        )
    )
}