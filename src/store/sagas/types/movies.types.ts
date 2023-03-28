import {IMovie} from '../../../types/IMovie';

export const SET_MOVIE_AS_FAVORITE = 'SET_MOVIE_AS_FAVORITE';
export const FETCH_MOVIE_FOR_DETAILS = 'FETCH_MOVIE_FOR_DETAILS';
export const FETCH_NEWEST_MOVIES = 'FETCH_NEWEST_MOVIES';
export const FETCH_POPULAR_DOCUMENTARY_MOVIES = 'FETCH_POPULAR_DOCUMENTARY_MOVIES';
export const FETCH_POPULAR_MYSTERY_MOVIES = 'FETCH_POPULAR_MYSTERY_MOVIES';
export const FETCH_POPULAR_CRIME_MOVIES = 'FETCH_POPULAR_CRIME_MOVIES';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';

export interface ISetMovieAsFavoriteAction {
    type: typeof SET_MOVIE_AS_FAVORITE;
    movie: IMovie;
}

export interface IFetchMovieForDetailsAction {
    type: typeof FETCH_MOVIE_FOR_DETAILS;
    movieId: number;
}

export interface IFetchNewestMoviesAction {
    type: typeof FETCH_NEWEST_MOVIES;
}

export interface IFetchPopularDocumentaryMoviesAction {
    type: typeof FETCH_POPULAR_DOCUMENTARY_MOVIES;
}

export interface IFetchPopularMysteryMoviesAction {
    type: typeof FETCH_POPULAR_MYSTERY_MOVIES;
}

export interface IFetchPopularCrimeMoviesAction {
    type: typeof FETCH_POPULAR_CRIME_MOVIES;
}

export interface ISearchMoviesAction {
    type: typeof SEARCH_MOVIES;
    searchTerm: string;
}
