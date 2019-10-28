import React from 'react';
// import { Box } from '@material-ui/core';
// import Home from './Home';
import SearchBar from './SearchBar';
import { Grid } from '@material-ui/core';

const Header = () => {
    return (
        <Grid
            container
            justify="center"
        >
            {/* <Home /> */}
            <SearchBar />
        </Grid>
    )
}

export default Header

