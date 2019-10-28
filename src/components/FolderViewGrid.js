import React, { Component } from 'react';
import FolderList from './FolderList';
import FileList from './FileList';
import { Grid, Paper, Slide, Box } from '@material-ui/core';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    file: state.file
})


class connectedFolderViewGrid extends Component {
    componentDidMount() {
    }

    render() {
        return (

            <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <Box
                    pt={8}
                >
                    <Grid
                        container
                        direction="row"
                        justify="center"
                    >
                        <Grid item xs={11} sm={3} lg={2}>
                            <FolderList />
                        </Grid>
                        <Grid item xs={11} sm={8} lg={10}>
                            <Paper
                                square
                            >
                                <Box
                                    bgcolor="rgb(63, 81, 155)"
                                >
                                    <FileList />
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Slide>

        )
    }
}

const FolderViewGrid = connect(mapStateToProps)(connectedFolderViewGrid);

export default FolderViewGrid;
