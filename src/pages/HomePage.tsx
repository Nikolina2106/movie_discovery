import {Box, Grid, Typography } from "@mui/material";
import Layout from "../layout/Layout";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

export default function HomePage(): JSX.Element {
    const navigate = useNavigate();

    return (
        <Layout>
            <Grid container direction="column" className="p-home">
                <Grid container item direction="column" className="content">
                    <Typography variant="h1" sx={{display: {xs: "none", md: "flex", justifyContent: 'center'}, color: 'white',
                        fontSize: '65px', fontWeight: '900', width: '50%', marginTop: '105px'}}>
                        Vaš vodič za streaming filmovi, TV serije i sport
                    </Typography>
                    <Typography variant="h1" sx={{display: {xs: "flex", md: "none", justifyContent: 'center'}, color: 'white',
                        fontSize: '36px', marginTop: '105px', width: '90%', fontWeight: '900'}}>
                        Vaš vodič za streaming filmovi, TV serije i sport
                    </Typography>
                    <Box sx={{display: {xs: "none", md: "flex", justifyContent: 'center'}}}>
                        <p style={{color: '#999c9f'}}>Uz JustWatch pronađite gdje streamati nove, popularne i nadolazeće sadržaje.</p>
                    </Box>
                </Grid>
                <Box sx={{display: {xs: "none", md: "flex", justifyContent: 'center'}, marginTop: '50px'}}>
                    <Button variant="contained" style={{backgroundColor: '#fbc500', color: 'black', textTransform: 'none',
                        fontWeight: '700', padding: '1rem', width: '15vw', fontSize: '16px',}}
                        onClick={() => navigate("/movieDiscovery")}>
                        Otkrijte filmove i serije
                    </Button>
                </Box>
                <Box sx={{display: {xs: "flex", md: "none", justifyContent: 'center'}, marginTop: '30px'}}>
                    <Button variant="contained" style={{backgroundColor: '#fbc500', color: 'black', fontSize: '16px',
                        fontWeight: '700', padding: '0.8rem', width: '65vw', textTransform: 'none'}} onClick={() => navigate("/movieDiscovery")}>
                        Otkrijte filmove i serije
                    </Button>
                </Box>
            </Grid>
        </Layout>
    )
}