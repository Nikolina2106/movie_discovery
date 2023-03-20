import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer, {reducerPreloadedState} from './reducer';
import {watchMoviesSaga} from './sagas/movies.saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, reducerPreloadedState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchMoviesSaga);
