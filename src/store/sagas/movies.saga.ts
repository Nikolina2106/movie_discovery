import {call, ForkEffect, put, select, takeLatest} from 'redux-saga/effects';
import {toast} from 'react-toastify';
import {
    FETCH_MOVIE_FOR_DETAILS,
    FETCH_NEWEST_MOVIES,
    FETCH_POPULAR_CRIME_MOVIES,
    FETCH_POPULAR_DOCUMENTARY_MOVIES,
    FETCH_POPULAR_MYSTERY_MOVIES,
    IFetchMovieForDetailsAction,
    ISearchMoviesAction,
    ISetMovieAsFavoriteAction,
    SEARCH_MOVIES,
    SET_MOVIE_AS_FAVORITE,
} from './types/movies.types';
import {AppState} from '../reducer';
import {
    setFavoriteMoviesAction,
    setNewestMoviesAction,
    setPopularCrimeMoviesAction,
    setPopularDocumentaryMoviesAction,
    setPopularMysteryMoviesAction,
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
import {IMovie} from '../../types/IMovie';
import {getMonthFromDate} from '../../helpers/utils';
import cache from '../cache';
import {
    fetchMovie,
    fetchMovieCast,
    fetchNewestMovies,
    fetchPopularCrimeMovies,
    fetchPopularDocumentaryMovies,
    fetchPopularMysteryMovies,
    searchMovies,
} from '../service/movies.service';

export function* setMovieAsFavoriteSaga(action: ISetMovieAsFavoriteAction): Generator<void> | void {
    const state: AppState = yield select();

    const {favoriteMovies} = state.moviesReducer;
    const isFavorite = favoriteMovies.some((movie) => movie.id === action.movie.id);

    const movie = yield call(fetchMovie, action.movie.id);

    if (movie.error) {
        toast.error('Nešto je pošlo po krivu');
    }

    if (!isFavorite) {
        const newStorageItem = [...favoriteMovies, action.movie];
        const updatedFavoriteMovies = [...favoriteMovies, movie];
        yield put(setFavoriteMoviesAction(updatedFavoriteMovies));
        localStorage.setItem('favorites', JSON.stringify(newStorageItem));
    } else {
        const newStorageItem = favoriteMovies.filter((savedMovie: IMovie) => savedMovie.id !== action.movie.id);
        const updatedFavoriteMovies = favoriteMovies.filter((savedMovie: IMovie) => savedMovie.id !== movie.id);
        yield put(setFavoriteMoviesAction(updatedFavoriteMovies));
        localStorage.setItem('favorites', JSON.stringify(newStorageItem));
    }
}

export function* fetchMovieForDetailsSaga(action: IFetchMovieForDetailsAction): Generator<void> | void {
    yield put(startPageLoaderAction());

    const movieDetails = cache.get(`movie-details-${action.movieId}`);

    if (movieDetails) {
        yield put(updateSelectedMovieForDetailsAction(movieDetails));
    } else {
        const movieForDetails: any = yield call(fetchMovie, action.movieId);
        if (movieForDetails.error) {
            toast.error('Nešto je pošlo po krivu');
        }
        if (movieForDetails) {
            cache.set(`movie-details-${action.movieId}`, movieForDetails);
            yield put(updateSelectedMovieForDetailsAction(movieForDetails));
        }
    }

    const movieCast = cache.get(`movie-cast-${action.movieId}`);

    if (movieCast) {
        yield put(updateMovieCastAction(movieCast));
    } else {
        const movieCast: any = yield call(fetchMovieCast, action.movieId);
        if (movieCast.error) {
            toast.error('Nešto je pošlo po krivu');
        }
        if (movieCast) {
            cache.set(`movie-cast-${action.movieId}`, movieCast.cast);
            yield put(updateMovieCastAction(movieCast.cast));
        }
    }

    yield put(stopPageLoaderAction());
}

export function* fetchNewestMoviesSaga(): Generator<void> | void {
    yield put(startPageLoaderAction());

    const currentDate = new Date();
    const date = `${currentDate.getFullYear()}-${getMonthFromDate(currentDate)}-${currentDate.getDate()}`;

    const newestMovies = cache.get('newest-movies');

    if (newestMovies) {
        yield put(setNewestMoviesAction(newestMovies));
    } else {
        const newestMovies: any = yield call(fetchNewestMovies, date);
        if (newestMovies.error) {
            toast.error('Nešto je pošlo po krivu');
        }
        if (newestMovies) {
            cache.set('newest-movies', newestMovies.results);
            yield put(setNewestMoviesAction(newestMovies.results));
        }
    }

    yield put(stopPageLoaderAction());
}

export function* fetchPopularDocumentaryMoviesSaga(): Generator<void> | void {
    yield put(startPageLoaderAction());

    const popularDocumentaryMovies = cache.get('popular-documentary-movies');

    if (popularDocumentaryMovies) {
        yield put(setPopularDocumentaryMoviesAction(popularDocumentaryMovies));
    } else {
        const popularDocumentaryMovies: any = yield call(fetchPopularDocumentaryMovies);
        if (popularDocumentaryMovies.error) {
            toast.error('Nešto je pošlo po krivu');
        }
        if (popularDocumentaryMovies) {
            cache.set('popular-documentary-movies', popularDocumentaryMovies.results);
            yield put(setPopularDocumentaryMoviesAction(popularDocumentaryMovies.results));
        }
    }

    yield put(stopPageLoaderAction());
}

export function* fetchPopularMysteryMoviesSaga(): Generator<void> | void {
    yield put(startPageLoaderAction());

    const popularMysteryMovies = cache.get('popular-mystery-movies');

    if (popularMysteryMovies) {
        yield put(setPopularMysteryMoviesAction(popularMysteryMovies));
    } else {
        const popularMysteryMovies: any = yield call(fetchPopularMysteryMovies);
        if (popularMysteryMovies.error) {
            toast.error('Nešto je pošlo po krivu');
        }
        if (popularMysteryMovies) {
            cache.set('popular-mystery-movies', popularMysteryMovies.results);
            yield put(setPopularMysteryMoviesAction(popularMysteryMovies.results));
        }
    }

    yield put(stopPageLoaderAction());
}

export function* fetchPopularCrimeMoviesSaga(): Generator<void> | void {
    yield put(startPageLoaderAction());

    const popularCrimeMovies = cache.get('popular-crime-movies');

    if (popularCrimeMovies) {
        yield put(setPopularCrimeMoviesAction(popularCrimeMovies));
    } else {
        const popularCrimeMovies: any = yield call(fetchPopularCrimeMovies);
        if (popularCrimeMovies.error) {
            toast.error('Nešto je pošlo po krivu');
        }
        if (popularCrimeMovies) {
            cache.set('popular-crime-movies', popularCrimeMovies.results);
            yield put(setPopularCrimeMoviesAction(popularCrimeMovies.results));
        }
    }

    yield put(stopPageLoaderAction());
}

export function* searchMoviesSaga(action: ISearchMoviesAction): Generator<void> | void {
    yield put(startSearchLoaderAction());

    const searchResult: any = yield call(searchMovies, action.searchTerm);
    if (searchResult.error) {
        toast.error('Nešto je pošlo po krivu');
    }
    if (searchResult) {
        yield put(setSearchResultMoviesAction(searchResult.results));
    }

    yield put(stopSearchLoaderAction());
}

export function* watchMoviesSaga(): Generator<ForkEffect<never>, void> {
    yield takeLatest(SET_MOVIE_AS_FAVORITE, setMovieAsFavoriteSaga);
    yield takeLatest(FETCH_MOVIE_FOR_DETAILS, fetchMovieForDetailsSaga);
    yield takeLatest(FETCH_NEWEST_MOVIES, fetchNewestMoviesSaga);
    yield takeLatest(FETCH_POPULAR_MYSTERY_MOVIES, fetchPopularMysteryMoviesSaga);
    yield takeLatest(FETCH_POPULAR_CRIME_MOVIES, fetchPopularCrimeMoviesSaga);
    yield takeLatest(FETCH_POPULAR_DOCUMENTARY_MOVIES, fetchPopularDocumentaryMoviesSaga);
    yield takeLatest(SEARCH_MOVIES, searchMoviesSaga);
}
