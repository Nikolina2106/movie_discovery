import React from "react";
import {IMovie} from "../types";
import {Box, Card, CardContent, Tab, Tabs} from "@mui/material";

interface MovieScrollProps {
    movies: IMovie[];
}

export default function MoviesScroll({movies}: MovieScrollProps): JSX.Element {

    return (
        <>
            <Box className="c-scroll" sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
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
                                    <Card key={movie.id} className="c-scroll tab__tabItem">
                                        <CardContent className="c-scroll tab__tabItem_content">
                                            <img className="moviePoster" alt={`${movie.title}`}
                                                 src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
                                        </CardContent>
                                    </Card>
                                }
                            />
                        );
                    })
                    }
                </Tabs>
            </Box>

            <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
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
                                    <Card key={movie.id} className="c-scroll tab__tabItemMobile">
                                        <CardContent className="c-scroll tab__tabItemMobile_content">
                                            <img className="moviePosterMobile" alt={`${movie.title}`}
                                                 src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
                                        </CardContent>
                                    </Card>
                                }
                            />
                        );
                    })
                    }
                </Tabs>
            </Box>
        </>
    );
}