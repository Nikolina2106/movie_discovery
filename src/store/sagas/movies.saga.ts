import {call, ForkEffect, put, select, takeLatest} from 'redux-saga/effects';
import {
    FETCH_MOVIES,
    IFetchMoviesAction,
    ISearchMoviesAction,
    ISelectMovieForDetailsAction,
    ISetMovieAsFavoriteAction,
    SEARCH_MOVIES,
    SELECT_MOVIE_FOR_DETAILS,
    SET_MOVIE_AS_FAVORITE,
} from './types/movies.types';
import {AppState} from '../reducer';
import {
    setFavoriteMoviesAction,
    setNewestMoviesAction,
    setSearchResultMoviesAction,
    updateMovieCastAction,
    updateSelectedMovieForDetailsAction,
} from '../reducers/actions/movies.action';
import {
    startPageLoaderAction,
    startSearchLoaderAction,
    stopPageLoaderAction,
    stopSearchLoaderAction,
} from '../reducers/actions/pageLoader.action';
import {getRequest} from '../../helpers/apiHelper';
import {IMovie} from '../../types/IMovie';

export function* setMovieAsFavoriteSaga(action: ISetMovieAsFavoriteAction): Generator<void> | void {
    const state: AppState = yield select();

    const {favoriteMovies} = state.moviesReducer;
    const isFavorite = favoriteMovies.some((movie) => movie.id === action.movie.id);

    const movie = yield call(getRequest, `movie/${action.movie.id}`);

    if (!isFavorite) {
        const newStorageItem = [...favoriteMovies, action.movie];
        const updatedFavoriteMovies = [...favoriteMovies, movie.data];
        yield put(setFavoriteMoviesAction(updatedFavoriteMovies));
        localStorage.setItem('favorites', JSON.stringify(newStorageItem));
    } else {
        const newStorageItem = favoriteMovies.filter((savedMovie: IMovie) => savedMovie.id !== action.movie.id);
        const updatedFavoriteMovies = favoriteMovies.filter((savedMovie: IMovie) => savedMovie.id !== movie.data.id);
        yield put(setFavoriteMoviesAction(updatedFavoriteMovies));
        localStorage.setItem('favorites', JSON.stringify(newStorageItem));
    }
}

export function* selectMovieForDetailsSaga(action: ISelectMovieForDetailsAction): Generator<void> | void {
    yield put(startPageLoaderAction());

    const movieForDetails: any = yield call(getRequest, `movie/${action.movieId}`);
    if (movieForDetails.success) {
        yield put(updateSelectedMovieForDetailsAction(movieForDetails.data));
    }

    const movieCast: any = yield call(getRequest, `/movie/${action.movieId}/credits`);
    if (movieCast.success) {
        yield put(updateMovieCastAction(movieCast.data.cast));
    }

    yield put(stopPageLoaderAction());
}

export function* fetchMovies(action: IFetchMoviesAction): Generator<void> | void {
    yield put(startPageLoaderAction());

    const newestMovies: any = yield call(getRequest, `discover/movie`, action.query);
    if (newestMovies.success) {
        yield put(setNewestMoviesAction(newestMovies.data.results));
    }

    yield put(stopPageLoaderAction());
}

export function* searchMovies(action: ISearchMoviesAction): Generator<void> | void {
    yield put(startSearchLoaderAction());

    const searchResult: any = yield call(getRequest, `search/movie`, `&query=${action.searchTerm}`);
    if (searchResult.success) {
        yield put(setSearchResultMoviesAction(searchResult.data.results));
    }

    yield put(stopSearchLoaderAction());
}

export function* watchMoviesSaga(): Generator<ForkEffect<never>, void> {
    yield takeLatest(SET_MOVIE_AS_FAVORITE, setMovieAsFavoriteSaga);
    yield takeLatest(SELECT_MOVIE_FOR_DETAILS, selectMovieForDetailsSaga);
    yield takeLatest(FETCH_MOVIES, fetchMovies);
    yield takeLatest(SEARCH_MOVIES, searchMovies);
}
