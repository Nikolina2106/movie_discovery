import {combineReducers} from 'redux';
import {pageLoaderReducer, PageLoaderReducerState, preloadedState as pageLoaderPreloadedState} from './reducers/pageLoader.reducer';
import {moviesReducer, MoviesReducerState, preloadedState as moviesPreloadedState} from './reducers/movies.reducer';

export interface AppState {
    pageLoaderReducer: PageLoaderReducerState;
    moviesReducer: MoviesReducerState;
}

const reducer = combineReducers({
    pageLoaderReducer,
    moviesReducer,
});

export const reducerPreloadedState: AppState = {
    pageLoaderReducer: pageLoaderPreloadedState,
    moviesReducer: moviesPreloadedState,
};

export default reducer;
