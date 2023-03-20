import {AppState} from '../reducer';
import {MoviesReducerState} from '../reducers/movies.reducer';

export const moviesSelector = (state: AppState): MoviesReducerState => state.moviesReducer;
