import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import {Card, CardActions, CardContent, IconButton, Paper} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {getYearFromStringDate} from '../helpers/utils';
import {moviesSelector} from '../store/selectors/movies.selector';
import Layout from '../layout/Layout';
import {searchMoviesAction, setMovieAsFavoriteAction} from '../store/sagas/actions/movies.action';
import {IGenre} from '../types/IGenre';
import {setMovieSearchTermAction} from '../store/reducers/actions/movies.action';
import SearchResultMovies from '../components/SearchResultMovies';
import {IMAGE_URL} from '../config';

export default function MovieDetailsPage(): JSX.Element {
    const dispatch = useDispatch();

    const {selectedMovie, favoriteMovies, selectedMovieCast, movieSearchTerm} = useSelector(moviesSelector);

    useEffect(() => {
        if (movieSearchTerm) {
            dispatch(searchMoviesAction(movieSearchTerm));
        }
    }, [dispatch, movieSearchTerm]);

    const onSearch = (searchTerm: string): void => {
        dispatch(setMovieSearchTermAction(searchTerm));
    };

    return (
        <Layout onSearch={onSearch}>
            {movieSearchTerm === '' ? (
                <Paper className="p-movieDetails u-mt-4" style={{backgroundColor: '#10161d'}}>
                    <div className="l-group__item l-grid l-grid--noGaps u-flex u-h-center">
                        <div className="l-col:5 sm:12">
                            <div className="p-movieDetails__title p-movieDetails__title--top">
                                <h1>
                                    {selectedMovie.title} ({getYearFromStringDate(selectedMovie.release_date)})
                                </h1>
                            </div>
                            <Card key={selectedMovie.id} className="p-movieDetails__posterItem">
                                <CardContent className="p-movieDetails__posterItem content">
                                    <img alt="moviePoster" style={{maxWidth: '100%'}} src={`${IMAGE_URL}/${selectedMovie.poster_path}`} />
                                    <CardActions disableSpacing style={{position: 'absolute'}}>
                                        <IconButton
                                            aria-label="add to favorites"
                                            onClick={() => dispatch(setMovieAsFavoriteAction(selectedMovie))}
                                        >
                                            <FavoriteIcon
                                                fontSize="large"
                                                className={`${
                                                    favoriteMovies.some((favoriteMovie) => favoriteMovie.id === selectedMovie.id)
                                                        ? 'content__actionButton--favorite'
                                                        : 'content__actionButton--notFavorite'
                                                }`}
                                            />
                                        </IconButton>
                                    </CardActions>
                                </CardContent>
                            </Card>
                            <div className="l-group__item l-grid l-grid--noGaps u-mt-2">
                                <div className="l-col:4">
                                    <span className="p-movieDetails__movieData_title">OCJENA</span>
                                </div>
                                <div className="l-col:8">
                                    <span className="p-movieDetails__infoItem">{selectedMovie.vote_average.toFixed(1)}</span>
                                </div>
                            </div>
                            <div className="l-group__item l-grid l-grid--noGaps">
                                <div className="l-col:4">
                                    <span className="p-movieDetails__movieData_title">ŽANROVI</span>
                                </div>
                                <div className="l-col:8">
                                    {selectedMovie &&
                                        selectedMovie.genres.slice(0, 3).map((movieGenre: IGenre) => (
                                            <span className="p-movieDetails__infoItem" key={movieGenre.id}>
                                                {movieGenre.name}&nbsp;&nbsp;
                                            </span>
                                        ))}
                                </div>
                            </div>
                            <div className="l-group__item l-grid l-grid--noGaps">
                                <div className="l-col:4">
                                    <span className="p-movieDetails__movieData_title">TRAJANJE</span>
                                </div>
                                <div className="l-col:8">
                                    <span className="p-movieDetails__infoItem">{selectedMovie.runtime}min</span>
                                </div>
                            </div>
                        </div>
                        <div className="l-col:7 sm:12">
                            <div className="p-movieDetails__title p-movieDetails__title--lower">
                                <h1>
                                    {selectedMovie.title} ({getYearFromStringDate(selectedMovie.release_date)})
                                </h1>
                            </div>
                            <div className="p-movieDetails__infoItem u-pt-2">
                                <h2>SINOPSIS</h2>
                                <p>{selectedMovie.overview}</p>
                            </div>
                            <div className="p-movieDetails__infoItem u-pt-2">
                                <h2>GLUMCI</h2>

                                <div className="l-group__item l-grid l-grid--noGaps u-flex">
                                    {selectedMovieCast.slice(0, 5).map((character) => (
                                        <div className="u-pr-2 u-pb-2" key={character.id}>
                                            <span style={{color: 'white'}}>{character.original_name}</span>
                                            <br />
                                            <span>{character.character}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
            ) : (
                <SearchResultMovies />
            )}
        </Layout>
    );
}
