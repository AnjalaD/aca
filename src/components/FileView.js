import React from 'react';
import { Box, Slide, Grid, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import Comments from './Comments';
import FileLinks from './FileLinks';
import TabView from './TabView';

const mapStateToProps = (state) => ({
    files: state.file.files,
    selected: state.file.selected
})

const connectedFileView = ({ files, selected, dispatch }) => {
    const content = (
        <Box clone height="70vh">
            <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <Paper elevation={2}>
                    <Grid container>
                        <Grid item xs={12} md={3} height="100vh">
                            <FileLinks />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box clone height="100%" p={1}>
                                <Paper
                                    square
                                    bgcolor="secondary.main"
                                    elevation={2}
                                    height="80vh"
                                >
                                    <TabView />
                                </Paper>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Comments />
                            <CommentForm />
                        </Grid>
                    </Grid>
                </Paper>
            </Slide>
        </Box>
    );

    let display = '';
    if (files === null || files.length === 0) {

    } else {
        display = content;
    }

    return (
        <div>
            {display}
        </div>
    )
}

const FileView = connect(mapStateToProps)(connectedFileView);

export default FileView;
