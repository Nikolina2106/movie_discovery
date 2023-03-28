import {IGenre} from './IGenre';

export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genres: IGenre[];
    genreIds: number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    runtime: number | null;
}
