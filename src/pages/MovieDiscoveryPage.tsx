import React, {useCallback, useEffect, useState} from "react";
import Layout from "../layout/Layout";
import ApiHelper from "../helpers/apiHelper";
import {IMovie} from "../types";
import MoviesScroll from "../components/MoviesScroll";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

export default function MovieDiscoveryPage(): JSX.Element {
    const current = new Date();
    const getMonth = () => {
        if(current.getMonth() < 10){
            return `0${current.getMonth()+1}`
        } else {
            return current.getMonth()+1;
        }
    }
    const date = `${current.getFullYear()}-${getMonth()}-${current.getDate()}`;

    const [newestMovies, setNewestMovies] = useState<IMovie[]>([]);

    const getNewestMovies = useCallback(async () => {
        const response = await ApiHelper.getRequest(`discover/movie`, `&release_date.lte=${date}`);
        const { success, data } = response;
        if(success) return setNewestMovies(data.results);
        return null
    }, []);

    useEffect(() => {
        getNewestMovies();
    }, []);

    return(
        <Layout>
            <Box className="p-movieDiscovery">
                <Typography sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}
                            className="p-movieDiscovery__titleMobile" variant="h4">
                    Najnoviji filmovi
                </Typography>
                <Typography sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}
                            className="p-movieDiscovery__title" variant="h4">
                    Najnoviji filmovi
                </Typography>
                <MoviesScroll movies={newestMovies}/>
            </Box>
        </Layout>
    )
}