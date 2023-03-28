import React from 'react';
import {Card, CardActions, CardContent, CardMedia, IconButton, Tab, Tabs} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {IMovie} from '../types/IMovie';
import {setMovieAsFavoriteAction} from '../store/sagas/actions/movies.action';
import {moviesSelector} from '../store/selectors/movies.selector';
import {selectMovieIdForDetailsAction} from '../store/reducers/actions/movies.action';

interface MovieScrollProps {
    movies: IMovie[];
}

export default function MoviesScroll({movies}: MovieScrollProps): JSX.Element {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {favoriteMovies} = useSelector(moviesSelector);

    return (
        <div className="c-scroll">
            <Tabs
                variant="scrollable"
                value={false}
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                className="c-scroll scrollButtons"
            >
                {movies.map((movie) => {
                    return (
                        <Tab
                            className="c-scroll tab"
                            key={movie.id}
                            label={
                                <Card
                                    key={movie.id}
                                    className="c-scroll tab__tabItem"
                                    onClick={() => {
                                        dispatch(selectMovieIdForDetailsAction(movie.id));
                                        navigate(`/movieDiscovery/${movie.id}`);
                                    }}
                                >
                                    <CardActions disableSpacing style={{position: 'absolute'}}>
                                        <IconButton
                                            aria-label="add to favorites"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                e.preventDefault();
                                                dispatch(setMovieAsFavoriteAction(movie));
                                            }}
                                        >
                                            <FavoriteIcon
                                                className={`${
                                                    favoriteMovies.some((favoriteMovie) => favoriteMovie.id === movie.id)
                                                        ? 'content__actionButton--favorite'
                                                        : 'content__actionButton--notFavorite'
                                                }`}
                                            />
                                        </IconButton>
                                    </CardActions>
                                    <CardContent className="c-scroll content">
                                        <CardMedia
                                            className="moviePoster"
                                            image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                        />
                                    </CardContent>
                                </Card>
                            }
                        />
                    );
                })}
            </Tabs>
        </div>
    );
}
