import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Tooltip,
    tooltipClasses,
    TooltipProps,
    Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useNavigate} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import {moviesSelector} from '../store/selectors/movies.selector';
import {selectMovieForDetailsAction, setMovieAsFavoriteAction} from '../store/sagas/actions/movies.action';
import {getYearFromStringDate} from '../helpers/utils';
import {IMAGE_URL} from '../config';
import {pageLoaderSelector} from '../store/selectors/pageLoader.selector';
import PageLoader from '../common/PageLoader';

const HtmlTooltip = styled(({className, ...props}: TooltipProps) => <Tooltip {...props} classes={{popper: className}} />)(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

export default function SearchResultMovies(): JSX.Element {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {searchResultMovies, favoriteMovies} = useSelector(moviesSelector);
    const {searchLoader} = useSelector(pageLoaderSelector);

    return (
        <div className="l-group__item l-grid l-grid--noGaps u-flex u-h-center c-searchResultMovies u-pb-4">
            {searchLoader ? (
                <PageLoader />
            ) : (
                <>
                    {searchResultMovies.map((movie) => (
                        <div className="l-col:2 sm:4 xs:4 u-ml-1 u-mr-1 u-mt-4 u-mb-4" key={movie.id}>
                            <Card
                                key={movie.id}
                                className="c-searchResultMovies__card"
                                onClick={() => {
                                    dispatch(selectMovieForDetailsAction(movie.id));
                                    navigate(`/movieDiscovery/${movie.id}`);
                                }}
                            >
                                <CardActionArea>
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
                                                        ? 'c-searchResultMovies__card_actionButton--favorite'
                                                        : 'c-searchResultMovies__card_actionButton--notFavorite'
                                                }`}
                                            />
                                        </IconButton>
                                    </CardActions>
                                    <CardMedia
                                        className="c-searchResultMovies__card_image"
                                        component="img"
                                        image={`${IMAGE_URL}/${movie.poster_path}`}
                                        alt="movie poster"
                                    />
                                    <CardContent className="c-searchResultMovies__card_content">
                                        <HtmlTooltip title={<Typography color="inherit">{movie.title}</Typography>}>
                                            <Typography className="c-searchResultMovies__card_title">
                                                {movie.title} ({getYearFromStringDate(movie.release_date)})
                                            </Typography>
                                        </HtmlTooltip>
                                    </CardContent>
                                </CardActionArea>{' '}
                            </Card>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}
