import {IMovie} from '../../../types/IMovie';
import {ICast} from '../../../types/ICast';

export const SET_FAVORITE_MOVIES = 'SET_FAVORITE_MOVIES';
export const UPDATE_SELECTED_MOVIE_FOR_DETAILS = 'UPDATE_SELECTED_MOVIE_FOR_DETAILS';
export const UPDATE_MOVIE_CAST = 'UPDATE_MOVIE_CAST';
export const SET_NEWEST_MOVIES = 'SET_NEWEST_MOVIES';
export const MOVIES_SEARCH_TERM = 'MOVIES_SEARCH_TERM';
export const SET_SEARCH_RESULT_MOVIES = 'SET_SEARCH_RESULT_MOVIES';

export interface ISetFavoriteMoviesAction {
    type: typeof SET_FAVORITE_MOVIES;
    movies: IMovie[];
}

export interface IUpdateSelectedMovieForDetailsAction {
    type: typeof UPDATE_SELECTED_MOVIE_FOR_DETAILS;
    movie: IMovie;
}

export interface IUpdateMovieCastAction {
    type: typeof UPDATE_MOVIE_CAST;
    movieCast: ICast[];
}

export interface ISetNewestMoviesAction {
    type: typeof SET_NEWEST_MOVIES;
    movies: IMovie[];
}

export interface ISetMovieSearchTermAction {
    type: typeof MOVIES_SEARCH_TERM;
    searchTerm: string;
}

export interface ISetSearchResultMoviesAction {
    type: typeof SET_SEARCH_RESULT_MOVIES;
    movies: IMovie[];
}

export type MoviesReducerType =
    | ISetFavoriteMoviesAction
    | IUpdateSelectedMovieForDetailsAction
    | IUpdateMovieCastAction
    | ISetNewestMoviesAction
    | ISetMovieSearchTermAction
    | ISetSearchResultMoviesAction;
