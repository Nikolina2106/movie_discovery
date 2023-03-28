import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import {styled} from '@mui/material/styles';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useDebouncedCallback} from 'use-debounce';
import {moviesSelector} from '../store/selectors/movies.selector';
import {selectMovieIdForDetailsAction} from '../store/reducers/actions/movies.action';

const pages = ['Favorites'];
const ITEM_HEIGHT = 48;

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#10161d',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666666',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        color: '#666666',
        [theme.breakpoints.up('sm')]: {
            width: '30ch',
            '&:focus': {
                width: '38ch',
            },
        },
    },
}));

interface NavbarProps {
    onSearch?: (searchTerm: string) => void;
}

Navbar.defaultProps = {
    onSearch: undefined,
};

export default function Navbar(props: NavbarProps): JSX.Element {
    const {onSearch} = props;

    const dispatch = useDispatch();
    const [favoriteMoviesMenuOpen, setFavoriteMoviesMenuOpen] = useState<null | HTMLElement>(null);
    const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState<null | HTMLElement>(null);
    const [searchInputState, setSearchInputState] = useState<string>('');
    const {favoriteMovies} = useSelector(moviesSelector);
    const navigate = useNavigate();

    const handleOpenFavoriteMovies = (event: React.MouseEvent<HTMLElement>): void => {
        setFavoriteMoviesMenuOpen(event.currentTarget);
    };

    const handleCloseFavoriteMovies = (): void => {
        setFavoriteMoviesMenuOpen(null);
    };

    const handleOpenHamburgerMenu = (event: React.MouseEvent<HTMLElement>): void => {
        setHamburgerMenuOpen(event.currentTarget);
    };

    const handleCloseHamburgerMenu = (): void => {
        setHamburgerMenuOpen(null);
    };

    const onSearchDebounced = useDebouncedCallback((searchTerm) => {
        if (onSearch) {
            onSearch(searchTerm);
        }
    }, 1000);

    useEffect(() => {
        if (onSearch) {
            onSearch(searchInputState);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AppBar position="static" color="transparent">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenHamburgerMenu}
                            color="inherit"
                        >
                            <MenuIcon fontSize="large" style={{color: '#666666'}} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={hamburgerMenuOpen}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(hamburgerMenuOpen)}
                            onClose={handleCloseHamburgerMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                            className="c-navbar__menu"
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleOpenFavoriteMovies}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {xs: 'none', md: 'flex', justifyContent: 'flex-end'},
                        }}
                    >
                        <Button onClick={handleOpenFavoriteMovies} sx={{my: 2, color: '#666666', display: 'block'}}>
                            FAVORITI
                        </Button>
                        <Menu
                            anchorEl={favoriteMoviesMenuOpen}
                            id="basic-menu"
                            open={!!favoriteMoviesMenuOpen}
                            onClose={handleCloseFavoriteMovies}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            className="c-navbar__menu"
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                },
                            }}
                        >
                            {favoriteMovies.map((movie) => (
                                <MenuItem
                                    key={movie.id}
                                    onClick={() => {
                                        dispatch(selectMovieIdForDetailsAction(movie.id));
                                        navigate(`/movieDiscovery/${movie.id}`);
                                    }}
                                >
                                    {movie.title}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{flexGrow: 0, display: 'flex'}}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                value={searchInputState}
                                placeholder="Search…"
                                inputProps={{'aria-label': 'search'}}
                                onChange={(e) => {
                                    onSearchDebounced(e.target.value);
                                    setSearchInputState(e.target.value);
                                }}
                            />
                        </Search>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
