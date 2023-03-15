import {applyMiddleware, createStore} from "redux";
import reducer, {reducerPreloadedState} from "./reducer";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, reducerPreloadedState, applyMiddleware(sagaMiddleware));
