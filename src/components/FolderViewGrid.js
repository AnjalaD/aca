import React, { Component } from 'react';
import FolderList from './FolderList';
import FileList from './FileList';
import SideBar from './SideBar';
import { Grid, Box, Paper, Slide } from '@material-ui/core';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    file: state.file
})


class connectedFolderViewGrid extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <Box clone height="70vh">
                <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                    <Paper elevation={2}>
                        <Grid container>
                            <Grid item xs={12} md={3} height="100vh">
                                <FolderList />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box clone height="100%" p={1}>
                                    <Paper
                                        square
                                        bgcolor="secondary.main"
                                        elevation={2}
                                        height="80vh"
                                    >
                                        <FileList />
                                    </Paper>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <SideBar />
                            </Grid>
                        </Grid>
                    </Paper>
                </Slide>
            </Box>
        )
    }
}

const FolderViewGrid = connect(mapStateToProps)(connectedFolderViewGrid);

export default FolderViewGrid;
