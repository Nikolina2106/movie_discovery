import {IMovie} from '../../types/IMovie';
import {ICast} from '../../types/ICast';
import {
    MOVIES_SEARCH_TERM,
    MoviesReducerType,
    SET_FAVORITE_MOVIES,
    SET_NEWEST_MOVIES,
    SET_SEARCH_RESULT_MOVIES,
    UPDATE_MOVIE_CAST,
    UPDATE_SELECTED_MOVIE_FOR_DETAILS,
} from './types/movies.action.type';

export interface MoviesReducerState {
    selectedMovie: IMovie;
    selectedMovieCast: ICast[];
    favoriteMovies: IMovie[];
    newestMovies: IMovie[];
    movieSearchTerm: string;
    searchResultMovies: IMovie[];
}

export const preloadedState = {
    selectedMovie: {} as IMovie,
    selectedMovieCast: [],
    favoriteMovies: JSON.parse(localStorage.getItem('favorites') || '[]'),
    newestMovies: [],
    movieSearchTerm: '',
    searchResultMovies: [],
};

export const moviesReducer = (state: MoviesReducerState = preloadedState, action: MoviesReducerType): MoviesReducerState => {
    switch (action.type) {
        case UPDATE_SELECTED_MOVIE_FOR_DETAILS:
            return {...state, selectedMovie: action.movie};
        case UPDATE_MOVIE_CAST:
            return {...state, selectedMovieCast: action.movieCast};
        case SET_FAVORITE_MOVIES:
            return {...state, favoriteMovies: action.movies};
        case SET_NEWEST_MOVIES:
            return {...state, newestMovies: action.movies};
        case MOVIES_SEARCH_TERM:
            return {...state, movieSearchTerm: action.searchTerm};
        case SET_SEARCH_RESULT_MOVIES:
            return {...state, searchResultMovies: action.movies};
        default:
            return {...state};
    }
};
