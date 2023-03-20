import {IMovie} from '../../../types/IMovie';

export const SET_MOVIE_AS_FAVORITE = 'SET_MOVIE_AS_FAVORITE';
export const SELECT_MOVIE_FOR_DETAILS = 'SELECT_MOVIE_FOR_DETAILS';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';

export interface ISetMovieAsFavoriteAction {
    type: typeof SET_MOVIE_AS_FAVORITE;
    movie: IMovie;
}

export interface ISelectMovieForDetailsAction {
    type: typeof SELECT_MOVIE_FOR_DETAILS;
    movieId: number;
}

export interface IFetchMoviesAction {
    type: typeof FETCH_MOVIES;
    query: string;
}

export interface ISearchMoviesAction {
    type: typeof SEARCH_MOVIES;
    searchTerm: string;
}
