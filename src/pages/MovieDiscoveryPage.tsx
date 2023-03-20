import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import {Typography} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import Layout from '../layout/Layout';
import MoviesScroll from '../components/MoviesScroll';
import {moviesSelector} from '../store/selectors/movies.selector';
import {searchMoviesAction} from '../store/sagas/actions/movies.action';
import {setMovieSearchTermAction} from '../store/reducers/actions/movies.action';
import SearchResultMovies from '../components/SearchResultMovies';

export default function MovieDiscoveryPage(): JSX.Element {
    const dispatch = useDispatch();
    const {newestMovies, movieSearchTerm} = useSelector(moviesSelector);

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
                <Box className="p-movieDiscovery">
                    <Typography
                        sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                        className="p-movieDiscovery__titleMobile"
                        variant="h4"
                    >
                        Najnoviji filmovi
                    </Typography>
                    <Typography sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}} className="p-movieDiscovery__title" variant="h4">
                        Najnoviji filmovi
                    </Typography>
                    <MoviesScroll movies={newestMovies} />
                </Box>
            ) : (
                <SearchResultMovies />
            )}
        </Layout>
    );
}
