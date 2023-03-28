import {Typography} from '@mui/material';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Layout from '../layout/Layout';
import {searchMoviesAction} from '../store/sagas/actions/movies.action';
import {setMovieSearchTermAction} from '../store/reducers/actions/movies.action';
import {moviesSelector} from '../store/selectors/movies.selector';
import SearchResultMovies from '../components/SearchResultMovies';

export default function HomePage(): JSX.Element {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {movieSearchTerm, searchResultMovies} = useSelector(moviesSelector);

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
                <div className="p-home">
                    <div className="l-group__item l-grid u-flex u-h-center u-pb-4">
                        <div className="l-col:12 sm:12 xs:12">
                            <div className="l-group__item l-grid u-flex u-h-center u-pb-4">
                                <div className="p-home__content u-flex u-h-center l-col:12 sm:12 xs:12">
                                    <Typography className="p-home__content_title" variant="h1">
                                        Vaš vodič za streaming filmovi, TV serije i sport
                                    </Typography>
                                </div>
                                <div className="p-home__content l-col:12 sm:12 xs:12">
                                    <Typography variant="h6" className="p-home__content_subtitle">
                                        Uz JustWatch pronađite gdje streamati nove, popularne i nadolazeće sadržaje.
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <Button
                            className="p-home__content_discoveryButton"
                            variant="contained"
                            onClick={() => {
                                navigate('/movieDiscovery');
                            }}
                        >
                            Otkrijte filmove i serije
                        </Button>
                    </div>
                </div>
            ) : (
                <SearchResultMovies movies={searchResultMovies} />
            )}
        </Layout>
    );
}
