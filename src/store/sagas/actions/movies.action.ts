import {
    FETCH_MOVIE_FOR_DETAILS,
    FETCH_NEWEST_MOVIES,
    FETCH_POPULAR_CRIME_MOVIES,
    FETCH_POPULAR_DOCUMENTARY_MOVIES,
    FETCH_POPULAR_MYSTERY_MOVIES,
    IFetchMovieForDetailsAction,
    IFetchNewestMoviesAction,
    IFetchPopularCrimeMoviesAction,
    IFetchPopularDocumentaryMoviesAction,
    IFetchPopularMysteryMoviesAction,
    ISearchMoviesAction,
    ISetMovieAsFavoriteAction,
    SEARCH_MOVIES,
    SET_MOVIE_AS_FAVORITE,
} from '../types/movies.types';
import {IMovie} from '../../../types/IMovie';

export const setMovieAsFavoriteAction = (movie: IMovie): ISetMovieAsFavoriteAction => ({
    type: SET_MOVIE_AS_FAVORITE,
    movie,
});

export const fetchMovieForDetailsAction = (movieId: number): IFetchMovieForDetailsAction => ({
    type: FETCH_MOVIE_FOR_DETAILS,
    movieId,
});

export const fetchNewestMoviesAction = (): IFetchNewestMoviesAction => ({
    type: FETCH_NEWEST_MOVIES,
});

export const fetchPopularDocumentaryMoviesAction = (): IFetchPopularDocumentaryMoviesAction => ({
    type: FETCH_POPULAR_DOCUMENTARY_MOVIES,
});

export const fetchPopularMysteryMoviesAction = (): IFetchPopularMysteryMoviesAction => ({
    type: FETCH_POPULAR_MYSTERY_MOVIES,
});

export const fetchPopularCrimeMoviesAction = (): IFetchPopularCrimeMoviesAction => ({
    type: FETCH_POPULAR_CRIME_MOVIES,
});

export const searchMoviesAction = (searchTerm: string): ISearchMoviesAction => ({
    type: SEARCH_MOVIES,
    searchTerm,
});
