import axios from 'axios';
import {API_KEY, BASE_URL} from '../../config';

const http = axios.create({});

export const httpGet = (url: string, options: any = {}): Promise<any> => {
    return http.get(url, options).then((response) => response.data);
};

export const fetchNewestMovies = (date: string): Promise<{data: string; success: boolean} | {data: any; success: boolean}> => {
    return httpGet(`${BASE_URL}/discover/movie?api_key=${API_KEY}&release_date.lte=${date}`).catch((error) => {
        console.log(error);
        return error;
    });
};

export const fetchPopularDocumentaryMovies = (): Promise<{data: string; success: boolean} | {data: any; success: boolean}> => {
    return httpGet(`${BASE_URL}/movie/popular?api_key=${API_KEY}&with_genres=99`).catch((error) => {
        console.log(error);
        return error;
    });
};

export const fetchPopularMysteryMovies = (): Promise<{data: string; success: boolean} | {data: any; success: boolean}> => {
    return httpGet(`${BASE_URL}/movie/popular?api_key=${API_KEY}&with_genres=9648`).catch((error) => {
        console.log(error);
        return error;
    });
};

export const fetchPopularCrimeMovies = (): Promise<{data: string; success: boolean} | {data: any; success: boolean}> => {
    return httpGet(`${BASE_URL}/movie/popular?api_key=${API_KEY}&with_genres=80`).catch((error) => {
        console.log(error);
        return error;
    });
};

export const fetchMovie = (movieId: number): Promise<{data: string; success: boolean} | {data: any; success: boolean}> => {
    return httpGet(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`).catch((error) => {
        console.log(error);
        return error;
    });
};

export const fetchMovieCast = (movieId: number): Promise<{data: string; success: boolean} | {data: any; success: boolean}> => {
    return httpGet(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`).catch((error) => {
        console.log(error);
        return error;
    });
};

export const searchMovies = (searchTerm: string): Promise<{data: string; success: boolean} | {data: any; success: boolean}> => {
    return httpGet(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}`).catch((error) => {
        console.log(error);
        return error;
    });
};
