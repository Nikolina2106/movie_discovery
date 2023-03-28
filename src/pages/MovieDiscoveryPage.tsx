import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import {Typography} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import Layout from '../layout/Layout';
import MoviesScroll from '../components/MoviesScroll';
import {moviesSelector} from '../store/selectors/movies.selector';
import {
    fetchNewestMoviesAction,
    fetchPopularCrimeMoviesAction,
    fetchPopularDocumentaryMoviesAction,
    fetchPopularMysteryMoviesAction,
    searchMoviesAction,
} from '../store/sagas/actions/movies.action';
import {setMovieSearchTermAction} from '../store/reducers/actions/movies.action';
import SearchResultMovies from '../components/SearchResultMovies';
import Filter from '../components/Filter';
import {IMovie} from '../types/IMovie';
import PageLoader from '../common/PageLoader';
import {pageLoaderSelector} from '../store/selectors/pageLoader.selector';

export default function MovieDiscoveryPage(): JSX.Element {
    const dispatch = useDispatch();
    const {newestMovies, movieSearchTerm, popularDocumentaryMovies, popularMysteryMovies, popularCrimeMovies, searchResultMovies} =
        useSelector(moviesSelector);
    const {pageLoader} = useSelector(pageLoaderSelector);

    const [voteAverageFilter, setVoteAverageFilter] = useState<string>('');

    const [filteredMovies, setFilteredMovies] = useState<IMovie[]>([] as IMovie[]);

    useEffect(() => {
        setFilteredMovies([...newestMovies, ...popularCrimeMovies, ...popularDocumentaryMovies, ...popularMysteryMovies]);
    }, [newestMovies, popularCrimeMovies, popularDocumentaryMovies, popularMysteryMovies]);

    useEffect(() => {
        if (movieSearchTerm === '') {
            dispatch(fetchNewestMoviesAction());
            dispatch(fetchPopularDocumentaryMoviesAction());
            dispatch(fetchPopularMysteryMoviesAction());
            dispatch(fetchPopularCrimeMoviesAction());
        }
    }, [dispatch, movieSearchTerm]);

    useEffect(() => {
        if (movieSearchTerm) {
            dispatch(searchMoviesAction(movieSearchTerm));
        }
    }, [dispatch, movieSearchTerm]);

    useEffect(() => {
        if (voteAverageFilter !== '') {
            const filteredNewestMoviesResult = filteredMovies.filter(
                (movie) => Math.trunc(movie.vote_average) === parseInt(voteAverageFilter)
            );
            const filteredPopularDocumentaryMoviesResult = filteredMovies.filter(
                (movie) => Math.trunc(movie.vote_average) === parseInt(voteAverageFilter)
            );
            const filteredPopularMysteryMoviesResult = filteredMovies.filter(
                (movie) => Math.trunc(movie.vote_average) === parseInt(voteAverageFilter)
            );
            const filteredPopularCrimeMoviesResult = filteredMovies.filter(
                (movie) => Math.trunc(movie.vote_average) === parseInt(voteAverageFilter)
            );
            setFilteredMovies([
                ...filteredNewestMoviesResult,
                ...filteredPopularDocumentaryMoviesResult,
                ...filteredPopularMysteryMoviesResult,
                ...filteredPopularCrimeMoviesResult,
            ]);
        }
    }, [voteAverageFilter, filteredMovies]);

    const uniqueMovies: IMovie[] = Array.from(new Set(filteredMovies.map((movie) => movie.id))).map((id) =>
        filteredMovies.find((movie) => movie.id === id)
    ) as IMovie[];

    const onSearch = (searchTerm: string): void => {
        dispatch(setMovieSearchTermAction(searchTerm));
    };

    return (
        <Layout onSearch={onSearch}>
            {pageLoader ? (
                <PageLoader />
            ) : (
                <>
                    {movieSearchTerm === '' ? (
                        <>
                            <div className="l-col:12 u-ml-1 u-mr-1 u-mt-4 u-mb-4">
                                <Filter setVoteAverageFilter={setVoteAverageFilter} voteAverageFilter={voteAverageFilter} />
                            </div>
                            {voteAverageFilter === '' ? (
                                <>
                                    <Box className="p-movieDiscovery">
                                        <Typography className="p-movieDiscovery__title" variant="h4">
                                            Najnoviji filmovi
                                        </Typography>
                                        <MoviesScroll movies={newestMovies} />
                                    </Box>
                                    <Box className="p-movieDiscovery">
                                        <Typography className="p-movieDiscovery__title" variant="h4">
                                            Popularni dokumentarni filmovi
                                        </Typography>
                                        <MoviesScroll movies={popularDocumentaryMovies} />
                                    </Box>
                                    <Box className="p-movieDiscovery">
                                        <Typography className="p-movieDiscovery__title" variant="h4">
                                            Popularni filmovi misterije
                                        </Typography>
                                        <MoviesScroll movies={popularMysteryMovies} />
                                    </Box>
                                    <Box className="p-movieDiscovery">
                                        <Typography className="p-movieDiscovery__title" variant="h4">
                                            Popularni kriminalistički filmovi
                                        </Typography>
                                        <MoviesScroll movies={popularCrimeMovies} />
                                    </Box>
                                </>
                            ) : (
                                <SearchResultMovies movies={uniqueMovies} />
                            )}
                        </>
                    ) : (
                        <SearchResultMovies movies={searchResultMovies} />
                    )}
                </>
            )}
        </Layout>
    );
}
