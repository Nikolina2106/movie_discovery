import {
    ISelectMovieIdForDetailsAction,
    ISetFavoriteMoviesAction,
    ISetMovieSearchTermAction,
    ISetNewestMoviesAction,
    ISetPopularCrimeMovies,
    ISetPopularDocumentaryMovies,
    ISetPopularMysteryMovies,
    ISetSearchResultMoviesAction,
    IUpdateMovieCastAction,
    IUpdateSelectedMovieForDetailsAction,
    MOVIES_SEARCH_TERM,
    SELECT_MOVIE_ID_FOR_DETAILS,
    SET_FAVORITE_MOVIES,
    SET_NEWEST_MOVIES,
    SET_POPULAR_CRIME_MOVIES,
    SET_POPULAR_DOCUMENTARY_MOVIES,
    SET_POPULAR_MYSTERY_MOVIES,
    SET_SEARCH_RESULT_MOVIES,
    UPDATE_MOVIE_CAST,
    UPDATE_SELECTED_MOVIE_FOR_DETAILS,
} from '../types/movies.action.type';
import {IMovie} from '../../../types/IMovie';
import {ICast} from '../../../types/ICast';

export const setFavoriteMoviesAction = (movies: IMovie[]): ISetFavoriteMoviesAction => ({
    type: SET_FAVORITE_MOVIES,
    movies,
});

export const updateSelectedMovieForDetailsAction = (movie: IMovie): IUpdateSelectedMovieForDetailsAction => ({
    type: UPDATE_SELECTED_MOVIE_FOR_DETAILS,
    movie,
});

export const updateMovieCastAction = (movieCast: ICast[]): IUpdateMovieCastAction => ({
    type: UPDATE_MOVIE_CAST,
    movieCast,
});

export const setNewestMoviesAction = (movies: IMovie[]): ISetNewestMoviesAction => ({
    type: SET_NEWEST_MOVIES,
    movies,
});

export const setPopularDocumentaryMoviesAction = (movies: IMovie[]): ISetPopularDocumentaryMovies => ({
    type: SET_POPULAR_DOCUMENTARY_MOVIES,
    movies,
});

export const setPopularMysteryMoviesAction = (movies: IMovie[]): ISetPopularMysteryMovies => ({
    type: SET_POPULAR_MYSTERY_MOVIES,
    movies,
});

export const setPopularCrimeMoviesAction = (movies: IMovie[]): ISetPopularCrimeMovies => ({
    type: SET_POPULAR_CRIME_MOVIES,
    movies,
});

export const setMovieSearchTermAction = (searchTerm: string): ISetMovieSearchTermAction => ({
    type: MOVIES_SEARCH_TERM,
    searchTerm,
});

export const setSearchResultMoviesAction = (movies: IMovie[]): ISetSearchResultMoviesAction => ({
    type: SET_SEARCH_RESULT_MOVIES,
    movies,
});

export const selectMovieIdForDetailsAction = (movieId: number): ISelectMovieIdForDetailsAction => ({
    type: SELECT_MOVIE_ID_FOR_DETAILS,
    movieId,
});
