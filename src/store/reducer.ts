import {combineReducers} from 'redux';
import {pageLoaderReducer, pageLoaderReducerPreloadedState, PageLoaderReducerState} from "./reducers/pageLoaderReducer";

export interface AppState {
    pageLoaderReducer: PageLoaderReducerState;
}

const reducer = combineReducers({
    pageLoaderReducer
});

export const reducerPreloadedState: AppState = {
    pageLoaderReducer: pageLoaderReducerPreloadedState
};

export default reducer;
