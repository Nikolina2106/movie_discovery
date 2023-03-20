import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function PageLoader(): JSX.Element {
    return (
        <Box sx={{display: 'flex'}} className="c-spinner">
            <CircularProgress size="100px" />
        </Box>
    );
}
