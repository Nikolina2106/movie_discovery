import {
    FETCH_MOVIES,
    IFetchMoviesAction,
    ISearchMoviesAction,
    ISelectMovieForDetailsAction,
    ISetMovieAsFavoriteAction,
    SEARCH_MOVIES,
    SELECT_MOVIE_FOR_DETAILS,
    SET_MOVIE_AS_FAVORITE,
} from '../types/movies.types';
import {IMovie} from '../../../types/IMovie';

export const setMovieAsFavoriteAction = (movie: IMovie): ISetMovieAsFavoriteAction => ({
    type: SET_MOVIE_AS_FAVORITE,
    movie,
});

export const selectMovieForDetailsAction = (movieId: number): ISelectMovieForDetailsAction => ({
    type: SELECT_MOVIE_FOR_DETAILS,
    movieId,
});

export const fetchMoviesAction = (query: string): IFetchMoviesAction => ({
    type: FETCH_MOVIES,
    query,
});

export const searchMoviesAction = (searchTerm: string): ISearchMoviesAction => ({
    type: SEARCH_MOVIES,
    searchTerm,
});
