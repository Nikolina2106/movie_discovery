import {FormControl, InputLabel, Select} from '@mui/material';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';

interface FilterProps {
    setVoteAverageFilter?: React.Dispatch<React.SetStateAction<string>>;
    voteAverageFilter?: string;
}

Filter.defaultProps = {
    setVoteAverageFilter: '',
    voteAverageFilter: '',
};

const genreList: {name: string; value: number}[] = [
    {name: 'Action', value: 28},
    {name: 'Adventure', value: 12},
    {name: 'Animation', value: 16},
    {name: 'Comedy', value: 35},
    {name: 'Crime', value: 80},
    {name: 'Documentary', value: 99},
    {name: 'Drama', value: 18},
    {name: 'Family', value: 10751},
    {name: 'Fantasy', value: 14},
    {name: 'History', value: 36},
    {name: 'Horror', value: 27},
    {name: 'Music', value: 10402},
    {name: 'Mystery', value: 9648},
    {name: 'Romance', value: 10749},
    {name: 'Science Fiction', value: 878},
    {name: 'TV Movie', value: 10770},
    {name: 'Thriller', value: 53},
    {name: 'War', value: 10752},
    {name: 'Western', value: 37},
];

export default function Filter(props: FilterProps): JSX.Element {
    const {setVoteAverageFilter, voteAverageFilter} = props;

    const range = (start: number, stop: number, step: number): number[] =>
        Array.from({length: (stop - start) / step + 1}, (_, i) => start + i * step);

    return (
        <div className="c-filter">
            <div className="l-group__item l-grid u-flex u-h-center u-pb-4">
                <div className="l-col:3 sm:12 xs:12">
                    <FormControl fullWidth>
                        <InputLabel style={{color: '#666666'}} id="demo-simple-select-label">
                            Ocjena
                        </InputLabel>
                        <Select
                            className="c-filter__select"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={voteAverageFilter}
                            name="vote_average"
                            label="Ocjena"
                            onChange={(e) => setVoteAverageFilter && setVoteAverageFilter(e.target.value)}
                            MenuProps={{
                                className: 'c-filter__select_dropdown',
                            }}
                        >
                            <MenuItem value="">Reset filter</MenuItem>
                            {range(10, 1, -1).map((voteAverage) => (
                                <MenuItem value={voteAverage} key={voteAverage}>
                                    {voteAverage}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>
    );
}
