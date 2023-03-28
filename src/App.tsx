import React, {ReactElement} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {QueryClient, QueryClientProvider} from 'react-query';
import PageLoader from './common/PageLoader';
import {pageLoaderSelector} from './store/selectors/pageLoader.selector';
import HomePage from './pages/HomePage';
import MovieDiscoveryPage from './pages/MovieDiscoveryPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

const queryClient = new QueryClient();

function App(): ReactElement {
    const {pageLoader} = useSelector(pageLoaderSelector);

    return (
        <div>
            <QueryClientProvider client={queryClient}>
                {pageLoader ? (
                    <PageLoader />
                ) : (
                    <>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/movieDiscovery" element={<MovieDiscoveryPage />} />
                                <Route path="/movieDiscovery/:movieId" element={<MovieDetailsPage />} />

                                <Route path="/*" element={<Navigate replace to="/" />} />
                            </Routes>
                        </BrowserRouter>
                    </>
                )}
            </QueryClientProvider>
        </div>
    );
}

export default App;
