import React from 'react';
import { IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const Home = () => {
    return (
        <IconButton
            children={
                <HomeIcon />
            }
        />
    )
}

export default Home;
