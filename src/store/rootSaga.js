import news from './news/sagas';

const sagas = [
    news
];

export const initSagas = (sagaMiddleware) =>
  sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware))